module.exports.areaQdd = (lado) => {
  return lado * lado;
};

module.exports.areaRet = (base, alt) => {
  return base * alt;
};

module.exports.areaTri = (base, alt) => {
  return (base * alt) / 2;
};

module.exports.areaCir = (raio) => {
  const pi = 3.1416;
  return pi * raio * raio;
};
