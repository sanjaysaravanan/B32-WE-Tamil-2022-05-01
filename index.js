var calculateArea = function(height = 50, width = 80) {  
  // write logic
  // ...
  console.log(height, width);
}

calculateArea(undefined, 90);

const str = `Sanjay
  Saravanan
  Saravanan`;

console.log(str);

const name = "Sanjay";
const role = "developer";

const personObj = {
  name,
  role,
}

console.log(personObj);

// console.log(window);
const str1 = "asdfhkashdk";
let str2 = "askdfhkasdhk";

// import { userID, getName } from "./module";
const { getName, userID} = require("./module");

console.log(userID);
getName();