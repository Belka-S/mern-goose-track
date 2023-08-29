const cutUUID = code => {
  const codeArr = code.split('-');
  const max = codeArr.length - 1;
  const min = 1;

  const randomIndex = Math.floor(Math.random() * (max - min) + min);

  return codeArr[randomIndex];
};

module.exports = cutUUID;
