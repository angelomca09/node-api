module.exports = (app) => {
  app.get("/text", (req, res) => {
    console.log("Texto retornado.");
    res.send("Retorno da Requisição");
  });

  app.get("/text/:content", (req, res) => {
    console.log("Texto retornado: " + req.params.content);
    res.send("Retorno da Requisição com parametro: " + req.params.content);
  });
};
