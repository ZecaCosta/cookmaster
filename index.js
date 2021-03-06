const express = require('express');
const routes = require('./routes');
const { errorMiddleware } = require('./middlewares');

const app = express();
app.use(express.json());

const PORT = 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(routes.usersRoute);

app.use(routes.recipesRoute);

app.use(routes.imagesRoute);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT} .`); 
});
