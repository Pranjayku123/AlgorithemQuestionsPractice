/*Way 01*/
console.log(lyrics); function spreadArr() {
    let arr = [2, 12, 6,[21,44,"str"], 0, 'prk', ['pilog', true, 2, 5], false];
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        newArr.push(...arr[i]);
      } else {
        newArr.push(arr[i]);
      }
    }
    console.log(newArr);
  }
  spreadArr();
  

//   way02
  const parts = ["shoulders", "knees"];
  const lyrics = ["head", ...parts, "and", "toes"];
  console.log(lyrics); 
  