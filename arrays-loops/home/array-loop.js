//Task 1
const nums = [10, 20, 30];
//console.log(nums);

nums[2] = 99;
//console.log(nums);

//Task2

function getLastValue(array) {
 const result = array[array.length - 1];
  console.log(result);
  
}
//getLastValue([4,5,56,5, 54]);
//getLastValue([5,4,'hello', 'good']);

// Task 3
function arraySwap(array) {
    let firstElement = array[0];
    array[0] = array[array.length - 1] 
    array[array.length - 1] = firstElement;
    console.log(array);
    
    
}
//arraySwap([4,5,6,]);
//arraySwap([4,5,'good job'])

//Task 4
for(let i = 0; i <= 10; i++) {
  if(i % 2 == 0) {
    //console.log(i);
  }
}

//Task 5
for(let i = 5; i >=0; i--) {
 // console.log(i);
  
}

//Task 6
/*
let i = 0;
while(i <= 10) {
  if(i % 2 == 0) {
    console.log(i);
  }
  i++
}
let i = 5;
while(i >= 0) {
  console.log(i);
  i--;
}
*/

