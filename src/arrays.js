const getNthElement = (index, array) => {
  const newIndex = index < array.length ? index : index - array.length;

  return array[newIndex];
};

const arrayToCSVString = array => array.join();
{
}

const csvStringToArray = string => string.split(',');
{
}

const addToArray = (element, array) => array.push(element);
{
}

const addToArray2 = (element, array) => array.concat([element]);
{
}

const removeNthElement = (index, array) => array.splice(index, 1);
{
}

const numbersToStrings = numbers => numbers.map(number => String(number));
{
}

const uppercaseWordsInArray = strings =>
  strings.map(word => word.toUpperCase());
{
}

const reverseWordsInArray = strings =>
  strings.map(word =>
    word
      .split('')
      .reverse()
      .join('')
  );
{
}

const onlyEven = numbers => numbers.filter(number => number % 2 === 0);
{
}

const removeNthElement2 = (index, array) =>
  array.filter((_, itemIndex) => itemIndex !== index);
{
}

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
