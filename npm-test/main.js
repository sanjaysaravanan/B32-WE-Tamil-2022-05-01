const { isEqual } = require("lodash");
// import { isEqual } from 'lodash';

const obj = {
  name: "Sanjay",
  age: 25,
  bio: {
    role: "developer",
    company: 'GUVI'
  }
}

const obj2 = {
  age: 25,
  name: "Sanjay",
  bio: {
    company: 'GUVI',
    role: "developer",
  }
}

// No Package
console.log(JSON.stringify(obj) === JSON.stringify(obj2));

// With Package
console.log(isEqual(obj, obj2));








