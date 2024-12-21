/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];


// PrintDeveloperbyMap() - console.log all the employees which have the profession of developer using the map function.
function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((developer) => {
    (developer.profession === "developer") && console.log(developer);
  })
}

// PrintDeveloperbyForEach() - console.log all the employees which have the profession of developer using the for each function.
function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr
  .filter((developer) => developer.profession === "developer")
  .forEach((developer) => {
    (developer.profession === "developer") && console.log(developer);
  })

  // arr.forEach((developer) => {
  //   (developer.profession === "developer") && console.log(developer);
  // })
}

// addData() - In this function make another such employee object and append that in this array. Example - push this in the array - {id:4,name:"susan",age:"20",profession:"intern"} and then console.log it.
function addData() {
  //Write your code here, just console.log
  const employee = {
    id:4,
    name:"susan",
    age:"20",
    profession:"intern"
  };
  arr.push(employee);

  console.log(arr[arr.length-1]);
}

// removeAdmin() - In this function remove the object where the profession is admin. console.log the changed array.
function removeAdmin() {
  //Write your code here, just console.log
  const filteredArr = arr.filter((employee) => {
    return employee.profession !== "admin"
  })
  console.log(filteredArr);
}

// ConcatinateArray() - Make another array with 3 objects just like the one in the above given array.
function concatenateArray() {
  //Write your code here, just console.log
  const newArr = [
  { id: 4, name: "Ruchi", age: "22", profession: "Front-end developer" },
  { id: 5, name: "Suchi", age: "23", profession: "Back-end developer" },
  { id: 6, name: "Gucci", age: "14", profession: "Fashion Designer" },
  ];

  // console.log(arr.concat(newArr));
  const resArr = arr.concat(newArr);
  console.log(resArr);
}

