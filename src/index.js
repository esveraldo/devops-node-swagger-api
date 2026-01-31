const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger');
const routes = require('./routes');

const app = express();
app.use(express.json());

app.use('/api', routes);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get('/', (req, res) => {
  res.json({
    api: 'DevOps Node API',
    status: 'rodando no AKS',
    docs: '/swagger'
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API rodando na porta ${port}`));
