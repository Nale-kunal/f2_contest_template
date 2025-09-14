/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((item)=>{
    if(item.profession==="developer") console.log(item);
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((item,index)=>{
    if(item.profession=="developer") console.log(item);
  })
}

function addData() {
  //Write your code here, just console.log
  let obj={ id: 4, name: "susan", age: "20", profession: "intern" }
  arr.push(obj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr=arr.filter((item)=> item.profession!=="admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr=[
    { id: 5, name: "Kunal", age: "18", profession: "MERN" },
    { id: 6, name: "Nale", age: "20", profession: "JAVA" },
    { id: 7, name: "Akash", age: "19", profession: "admin" }
  ];
  let ans= arr.concat(newArr);
  console.log(ans);
}
