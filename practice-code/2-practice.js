let numberList = [1, 2, 3, 4, 4, 4, 5,4,5,6,4];
//find how many repaeted number specific number

let findNumberValue = 6;
let findStore = 0;

for (let i = 0; i < numberList.length; i++) {
  if (numberList[i] == findNumberValue) {
    findStore++;
  }
}

console.log(findStore);
