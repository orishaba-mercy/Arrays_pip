/ // //  write a function that returns the sum of all people who are less than 18 years.
// const people = [
//     { name: 'Alice', age: 17 },
//     { name: 'Eunice', age: 22 },
//     { name: 'Charlie', age: 14 },
//     { name: 'Max', age: 19 },
//   ];
function sumAgesUnder18(people) {
    let totalAge = 0;
    for (let i = 0; i < people.length; i++) {
      if (people[i].age < 18) {
        totalAge += 1
      }
    }
    return totalAge;
  }
  
  const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ];
  
  console.log(sumAgesUnder18(people)); 


//   Given an array of objects, each object representing a person with a name and age property,
  function reverseAndSort(arr) {
    arr = arr.reduce((acc, str, index) => {
      if (index % 2 !== 0) { 
        str = str.split('').reverse().join('');
      }
      acc.push(str);
      return acc;
    }, []);
    arr.sort(); 
    return arr;
  }
  

  const arr = ['hello', 'world', 'javascript', 'programming'];
  console.log(reverseAndSort(arr)); 


// Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
 function checkArray(arr) {
    arr.forEach(function(element) {
      if (element > 0) {
        console.log("positive");
      } else if (element < 0) {
        console.log("negative");
      } else {
        console.log("zero");
      }
    });
  }
  
  const myArray = [1, -2, 0, 3, -4];
  checkArray(myArray); 
// Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.

const employees = [
    { id: 1, name: 'John', salary: 50000 },
    { id: 2, name: 'Jane', salary: 60000 },
    { id: 3, name: 'Bob', salary: 40000 },
    { id: 4, name: 'Alice', salary: 70000 }
  ];
  
const sortedEmployees = employees.sort((a, b) => a.salary - b.salary);
  
console.log(sortedEmployees);




