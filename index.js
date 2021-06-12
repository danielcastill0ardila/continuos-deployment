const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end("Hellow, from server");
});

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
