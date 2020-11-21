module.exports = (app) => {
  require("./file/routes")(app);
  require("./image/routes")(app);
  require("./text/routes")(app);
  require("./sse/routes")(app);
};
