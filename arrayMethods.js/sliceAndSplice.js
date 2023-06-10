let arr1 = [98,87,76,65,54,43,32,21];
let arr2 = ["john","lewis","aron","james","smith"];
console.log(arr1);
//slice array 1
let sliceArr1 = arr1.slice(1,4);
console.log(sliceArr1);
//splice array 1
let spliceArr1 = arr1.splice(2,0,1,2);
console.log(spliceArr1);
console.log(arr1);
//slice array 2
let sliceArr2 = arr2.slice(-3,-1);
console.log(sliceArr2);
//splice array 2
let spliceArr2 = arr2.splice(1,3,"alice","bruce");
console.log(spliceArr2);
console.log(arr2);


