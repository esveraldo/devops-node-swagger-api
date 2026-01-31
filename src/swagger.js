module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'DevOps Node API',
    version: '1.0.0',
    description: 'API Node.js com Swagger rodando no AKS'
  },
  servers: [
    { url: '/' }
  ],
  paths: {
    '/api/users': {
      get: {
        summary: 'Lista usuários (mock)',
        responses: {
          200: {
            description: 'Lista de usuários'
          }
        }
      }
    }
  }
};
