const http = require("http");
const url = require("url");
const fs = require("fs");

function handleFile(argReq, argRes, callback) {
  const path = url.parse(argReq.url).pathname;
  const fileName = "." + path;

  fs.readFile(fileName, (error, data) => {
    if (error) {
      if (callback) {
        if (!callback(argReq, argRes)) {
          argRes.writeHead(404, { "Content-Type": "text/html;charset=utf8" });
          argRes.end("<h1>Página não encontrada</h1>");
        }
      }
    } else {
      argRes.writeHead(200, { "Content-Type": "text/html" });
      argRes.write(data);
      argRes.end();
    }
  });
}

function handleRequest(argReq, argRes) {
  const path = url.parse(argReq.url).pathname;
  const method = argReq.method;

  console.log(method);
  if (path == "/teste") {
    argRes.end("Teste");
    return true;
  }

  return false;
}

http
  .createServer((request, response) => {
    handleFile(request, response, handleRequest);
  })
  .listen(3000, (err) => {
    if (err) console.log(err);
    else console.log("Servidor rodando na porta 3000");
  });
