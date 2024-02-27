export {};

// EXAMPLE 1 - Remove a Property from an Object in TypeScript

interface Employee {
  id: number;
  name?: string; // 👈️ marked optional
  salary: number;
}

const obj: Employee = {
  id: 1,
  name: 'Bobby Hadz',
  salary: 100,
};

delete obj['name'];

// 👇️ { id: 1, salary: 100 }
console.log(obj);

// ---------------------------------------------------

// // EXAMPLE 2 - Using a type instead of an interface

// type Employee = {
//   id: number;
//   name?: string;
//   salary: number;
// };

// const obj: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
// };

// delete obj['name'];

// // 👇️ { id: 1, salary: 100 }
// console.log(obj);

// ---------------------------------------------------

// // EXAMPLE 3 - Removing a property from an object by using destructuring

// interface Employee {
//   id: number;
//   name: string;
//   salary: number;
// }

// const obj: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
// };

// // 👇️ remove `name` property
// const { name: _, ...newObj } = obj;

// console.log(newObj); // { id: 1, salary: 100 }

// console.log(newObj.id); // 1
// console.log(newObj.salary); // 100

// ---------------------------------------------------

// // EXAMPLE 4 - Excluding a dynamic key that is stored in a variable

// interface Employee {
//   id: number;
//   name: string;
//   salary: number;
// }

// const obj: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
// };

// const keyToRemove = 'name';

// const { [keyToRemove]: _, ...newObj } = obj;

// console.log(newObj); // { id: 1, salary: 100 }

// ---------------------------------------------------

// // EXAMPLE 5 - Remove a property from an object using the Partial type

// interface Employee {
//   id: number;
//   name: string; // 👈️ not marked optional
//   salary: number;
// }

// const obj: Partial<Employee> = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
// };

// delete obj['name'];

// ---------------------------------------------------

// // EXAMPLE 6 - Remove a property from an object using Omit and Pick

// interface Employee {
//   id: number;
//   name: string;
//   salary: number;
// }

// const obj: Partial<Pick<Employee, 'id' | 'name'>> &
//   Omit<Employee, 'id' | 'name'> = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
// };

// delete obj['name'];

// // 👇️ { id: 1, salary: 100 }
// console.log(obj);

// ---------------------------------------------------

// // EXAMPLE 7 - Remove a Property from an Object in TypeScript using lodash

// import _ from 'lodash';

// interface Employee {
//   id: number;
//   name: string;
//   salary: number;
// }

// const obj: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
// };

// const newObj = _.omit(obj, ['name']);

// console.log(newObj); // 👉️ { id: 1, salary: 100 }

// console.log(newObj.id); // 1
// console.log(newObj.salary); // 100
