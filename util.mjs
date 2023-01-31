import util from "util";

const firstName = "Renal";
const lastName = "Stwn";

console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format("Hello %s %s", firstName, lastName));

const person = {
    firstName: "Renal",
    lastName: "Stwn"
};

console.info(`Person : ${JSON.stringify(person)}`); // use JSON.stringify
console.info(util.format("Person : %j", person));  // konfersi menjadi json dengat util use %j