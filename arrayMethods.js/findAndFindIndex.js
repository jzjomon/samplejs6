let check1 = (ele)=>ele>=50;
let check2 = (ele)=>ele<=10;
let arr1 = [35,87,76,65,54,43,32,21];
let arr2 = [34,43,5,56,7,3,22,23]
//find
console.log(arr1.find(check1));
//find
console.log(arr2.find(check1));
//findIndex
console.log(arr1.findIndex(check2));
//findIndex
console.log(arr2.findIndex(check2));

