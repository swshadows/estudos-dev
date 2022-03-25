// Checa atraves do jwt se o usuário é administrador

module.exports = function (req, res, next) {
  if (!req.user.isAdmin) return res.status(403).send("Access denied");

  next();
};
