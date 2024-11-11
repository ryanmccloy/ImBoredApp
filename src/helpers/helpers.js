export const randomIndex = function (data) {
  const min = 0;
  const max = data.length - 1;

  const index = Math.floor(Math.random() * (max - min + 1)) + min;
  return index;
};

export const sleep = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
