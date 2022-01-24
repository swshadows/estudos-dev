exports.notFound = (req, res, next) => {
  res.status = 404; // Define o código do erro como 404 no header da requisição
  res.render("404");
};
