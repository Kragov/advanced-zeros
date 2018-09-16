module.exports = function getZerosCount(number, base) {
  let biggestSimpleNumber = 0;
  let baseCopy = base;
  let counter = 0;
  for (let i = 2; i <= base; i++) {
        while (((baseCopy % i) === 0) && (base > 1)) {
            biggestSimpleNumber = i;
            baseCopy /= i;
        }
  }

  let multiplier = biggestSimpleNumber;

  while (biggestSimpleNumber < number) {
      counter += Math.trunc(number / biggestSimpleNumber);
      biggestSimpleNumber *= multiplier;
  }

  return counter;
}