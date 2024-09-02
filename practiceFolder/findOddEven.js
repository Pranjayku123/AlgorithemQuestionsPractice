let arr = [2, 4, 1, 7, 8, 10];
let newArr = [];
let newOddArr = [];
for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  if (item % 2 != 0) {
      newArr.push(item);
     
  } else { 
     
      console.log(item);
  }
}
 console.log(newArr);