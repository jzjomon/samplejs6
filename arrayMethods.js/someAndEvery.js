let check1 = (ele)=>ele>=50;
let check2 = (ele)=>ele=="james";
let arr1 = [98,87,76,65,54,43,32,21];
//some
console.log(arr1.some(check1));
//every
console.log(arr1.every(check1));
let arr2 = ["john","lewis","aron","james","smith"];
//some
console.log(arr2.some(check2));
//every
console.log(arr2.every(check2));

