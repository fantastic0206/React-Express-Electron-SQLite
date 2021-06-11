const server = require("./app");
const http = require("http");

const app = http.createServer(server);
app.listen(3000);

