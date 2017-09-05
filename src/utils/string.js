function getStringBetween(str, init, end = '') {
  if (!str || !init) return '';
  const regexp = `${init}(.*)${end}`;
  return str.match(regexp)[1];
}

function deleteLastCharacter(str) {
  return str.slice(0, -1);
}

const StrUtils = {
  getStringBetween,
  deleteLastCharacter,
};

export default StrUtils;
