const pairNumbers = (min, max) => {
  let result = "";

  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      result += i + ",";
    }
  }

  if (result.endsWith(",")) {
    result = result.slice(0, -1);
  }

  return result;
};
export default pairNumbers;
