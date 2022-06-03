const jwt = require("jsonwebtoken");

function checkJWT() {
  const sentToken = req.headers.authorization;
  if (!sentToken) return res.status(400).json({ err: "Token não enviado" });

  const array = sentToken.split(" "); // Separando tipo do token do token em si
  const token = array[1];

  jwt.verify(token, jwtSecret, (err, data) => {
    if (err) return res.status(401).json({ err: "Token inválido" });

    req.token = token;
    req.loggedUser = { id: data.id, email: data.email };
    next();
  });
}

module.exports = checkJWT;
