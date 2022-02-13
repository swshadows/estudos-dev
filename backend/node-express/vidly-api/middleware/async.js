// Middleware não utilizado de erros (Utilizado: express-async-errors)
module.exports = function asyncMiddleWare() {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (ex) {
      next(ex);
    }
  };
};
