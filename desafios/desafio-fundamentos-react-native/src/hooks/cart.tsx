import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      // LOAD ITEMS FROM ASYNC STORAGE
      const asyncStorageProducts = await AsyncStorage.getItem('@GoMarketplace/cart')

      if (asyncStorageProducts) {
        const parsedProducts = JSON.parse(asyncStorageProducts);

        setProducts(parsedProducts)
      }
    }

    loadProducts();
  }, []);

  const addToCart = useCallback(async product => {
    // TODO ADD A NEW ITEM TO THE CART
    const itemAlreadyOnCart = products.some(item => item.id === product.id)
    let newProducts = [];

    if (itemAlreadyOnCart) {
      newProducts = products.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 }
        }

        return item;
      })
    } else {
      newProducts = [...products, { ...product, quantity: 1 }]
    }

    await AsyncStorage.setItem('@GoMarketplace/cart', JSON.stringify(newProducts))
    setProducts(newProducts)
  }, [products]);

  const increment = useCallback(async id => {
    // TODO INCREMENTS A PRODUCT QUANTITY IN THE CART
    const newProducts = products.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 }
      }

      return item;
    })

    setProducts(newProducts)
    await AsyncStorage.setItem('@GoMarketplace/cart', JSON.stringify(newProducts))
  }, [products]);

  const decrement = useCallback(async id => {
    // TODO DECREMENTS A PRODUCT QUANTITY IN THE CART
    const foundProduct = products.find(item => item.id === id);

    let newProducts = []

    if (foundProduct?.quantity === 1) {
      newProducts = products.filter(item => item.id !== id)
    } else {
      newProducts = products.map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 }
        }

        return item;
      })
    }

    setProducts(newProducts)
    await AsyncStorage.setItem('@GoMarketplace/cart', JSON.stringify(newProducts))

  }, [products]);

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
