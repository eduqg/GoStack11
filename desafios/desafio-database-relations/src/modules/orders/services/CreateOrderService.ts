import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import Order from '../infra/typeorm/entities/Order';
import IOrdersRepository from '../repositories/IOrdersRepository';

interface IProduct {
  id: string;
  quantity: number;
}

interface IRequest {
  customer_id: string;
  products: IProduct[];
}

@injectable()
class CreateOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,

    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,

    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}

  public async execute({ customer_id, products }: IRequest): Promise<Order> {
    const customer = await this.customersRepository.findById(customer_id);

    if (!customer) {
      throw new AppError('User not found');
    }

    const existingProducts = await this.productsRepository.findAllById(
      products,
    );

    if (!existingProducts.length) {
      throw new AppError('Any products found for ids');
    }

    const existingProductsIds = existingProducts.map(product => product.id);

    const notFoundProducts = products.filter(
      product => !existingProductsIds.includes(product.id),
    );

    if (notFoundProducts.length) {
      throw new AppError(`Not found products: ${notFoundProducts[0].id}`);
    }

    const findProductsWithoutQuantityAvailable = products.filter(
      product =>
        existingProducts.filter(p => p.id === product.id)[0].quantity <
        product.quantity,
    );

    if (findProductsWithoutQuantityAvailable.length) {
      throw new AppError('Quantity insuficient of product');
    }

    const serializedProducts = products.map(product => ({
      product_id: product.id,
      quantity: product.quantity,
      price: existingProducts.filter(p => p.id === product.id)[0].price,
    }));

    const order = await this.ordersRepository.create({
      customer,
      products: serializedProducts,
    });

    const { order_products } = order;

    const orderedProdutsQuantity = order_products.map(product => {
      return {
        id: product.product_id,
        quantity:
          existingProducts.filter(p => p.id === product.product_id)[0]
            .quantity - product.quantity,
      };
    });

    await this.productsRepository.updateQuantity(orderedProdutsQuantity);

    return order;
  }
}

export default CreateOrderService;
