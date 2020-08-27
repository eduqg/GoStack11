// Para autenticação
// Adicionar o usuário no request para ser utilizado em outras requisições
declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
