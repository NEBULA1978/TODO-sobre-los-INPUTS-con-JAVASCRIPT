// Trucos Javascript: Evitar if y else if anidados

const persona = {
  name: "Yandrak",
  nif: 1234,
  age: 20
};

const changeName = (newName) => {
  persona.name = newName;
};

const changeNif = (newNif) => {
  persona.nif = newNif;
};

// const changeAge = (newAge) => {
//   persona.age = newAge;
// };

const events = [
  {
    key: "changeName",
    event: changeName
  },
  {
    key: "changeNif",
    event: changeNif
  }
];

const key = "changeName";
const newValue = "Yandrak mod.";

const fireEvent = events.find(e => e.key === key);

if (fireEvent) {
  fireEvent.event(newValue);
}

// Assuming cole.tog is meant to console.log, you can log the updated persona object
console.log(persona);
