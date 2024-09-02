var arr = [0,3,6,2,120,56,32,5,89,32];
var resultArr= arr[0];
for (i=0; i<=arr.length;i++){
   if(arr[i] > resultArr)  // largest number of an array
//    if(arr[i] < resultArr) // smallest number of an array
   {
       resultArr = arr[i];
   }
   
}
 console.log(resultArr);