function getZerosCount(number, base) {
  let biggestSimpleNumber = 0;
  let baseCopy = base;
  let counter = 0;
  for (let i = 2; i <= base; i++) {
        while (((baseCopy % i) === 0) && (base > 1)) {
            biggestSimpleNumber = i;
            baseCopy /= i;
            console.log(baseCopy, biggestSimpleNumber)
        }
  }

  let multiplier = biggestSimpleNumber;

  console.log(multiplier)
  while (biggestSimpleNumber < number) {
      console.log(biggestSimpleNumber, counter)
      counter += Math.trunc(number / biggestSimpleNumber);
      biggestSimpleNumber *= multiplier;
  }

  return counter;
}

console.log(getZerosCount(82610032, 144))

// module.exports =