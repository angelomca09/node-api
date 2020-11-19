const fs = require("fs");
const file_path = __dirname + "/teste.txt";

module.exports = (app) => {
  app.get("/file", (req, res) => {
    console.log("Arquivo retornado.");
    res.sendFile(file_path);
  });

  app.post("/file", (req, res) => {
    const content = req.body.content;
    fs.appendFile(file_path, content, (error) => {
      if (error) {
        console.log("Nao foi possivel alterar o arquivo.\nErro: ", error);
        res.send("Erro ao alterar arquivo.");
      } else {
        console.log("Arquivo Alterado!");
        res.send("Sucesso ao alterar arquivo!");
      }
    });
  });

  app.get("/file/reset", (req, res) => {
    const content = "***Arquivo de Testes***\n\n";
    fs.writeFile(file_path, content, (error) => {
      if (error) {
        console.log("Nao foi possivel resetar o arquivo.\nErro: ", error);
        res.send("Erro ao resetar arquivo.");
      } else {
        console.log("Arquivo Resetado!");
        res.send("Sucesso ao resetar arquivo!");
      }
    });
  });
};
