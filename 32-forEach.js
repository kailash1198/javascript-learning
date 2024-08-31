// For Each in Javascript

// let myArray = [1, 2, 3, 4, 5];
// myArray.forEach(function (number) {
//   console.log(`Index : ${number}`);
// });

const userList = ["user-1", "user-2", "user-3", "user-4"];
userList.forEach(function () {
  userList.push("User-5");
});

console.log(userList.forEach(function(i){
    console.log(i)
}))