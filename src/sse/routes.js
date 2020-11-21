let clients = [];
let nests = [];

const eventsHandler = (req, res, next) => {
  const headers = {
    "Content-Type": "text/event-stream",
    "Connection": "keep-alive",
    "Cache-Control": "no-cache",
  };
  res.writeHead(200, headers);

  res.write("***Mensagens***\n\n");
  nests.forEach((nest) => res.write(nest.msg + "\n\n"));

  const clientId = Date.now();
  const newClient = {
    id: clientId,
    res,
  };
  clients.push(newClient);

  req.on("close", () => {
    console.log(`${clientId} Connection closed`);
    clients = clients.filter((c) => c.id !== clientId);
  });
};

const sendEventsToAll = (newNest) => {
  clients.forEach((c) => c.res.write(`${newNest.msg}\n\n`));
};

const addNest = async (req, res, next) => {
  const newNest = req.body;
  nests.push(newNest);

  res.json(newNest);

  return sendEventsToAll(newNest);
};

const getStatus = (req, res) => res.json({ clients: clients.length });

module.exports = (app) => {
  app.post("/sse/nest", addNest);
  app.get("/sse/events", eventsHandler);
  app.get("/sse/status", getStatus);
};
