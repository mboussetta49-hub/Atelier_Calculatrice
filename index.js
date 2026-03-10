const http = require("http");
const server = http.createServer((req, res) => {
  console.log("Requete recue !");
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Bravo ! Le serveur Node fonctionne sur Docker.\n");
});
server.listen(3000, "0.0.0.0", () => {
  console.log("SERVEUR DEMARRE SUR LE PORT 3000");
});
console.log("Test automatique Jenkins OK");