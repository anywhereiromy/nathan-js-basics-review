const createPerson = (name, age) => {
  return { name, age };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object[property]) return true;
  return false;
};

const isOver65 = person => {
  if (person.age > 65) return true;
  return false;
};

const getAges = people => {
  const array = [];
  people.forEach(element => {
    array.push(element.age);
  });
  return array;
};

const findByName = (name, people) => {};

const findHondas = cars => {
  // your code here
};

const averageAge = people => {
  // your code here
};

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
