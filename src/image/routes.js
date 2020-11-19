const image_path = __dirname + "/teste.png";

module.exports = (app) => {
  app.get("/image", (req, res) => {
    console.log("Imagem retornada.");
    res.sendFile(image_path);
  });

};
