const app = require("express")();
require("./src/config")(app);
require("./src/routes")(app);

const port = 8081;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
});
