function getRandomInteger(a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomArrElem(elem) {
  return elem[getRandomInteger(0, elem.length - 1)];
}

export {
  getRandomInteger,getRandomArrElem
};
