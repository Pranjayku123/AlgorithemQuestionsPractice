const arr=[1,2,5,3,4,5,6,7,8,9,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];

function plusOne(digits){
    const str = digits.join("");
    const num = BigInt(str);
    const res = num + BigInt(1);
    const out = res.toString().split("").map(Number)
    return out
}

const a = plusOne(arr);

console.log(a)