const fs = require("fs");

fs.readFile('./right-left.txt', (err, data) => {
  if (err) {
    console.log(err.message);
  }
  else {
    console.log(totalSteps(data.toString()));
    console.log(firstTime(data.toString()));
  }
});

function totalSteps(data) {
  let left = 0;
  let right = 0;
  for (let i = 0; i < data.length; i++){
    if (data[i] == '<'){
      left++;
    }
    if (data[i] == '>'){
      right++;
    }
  }
  return left-right > 0 ? left-right + ' steps to the left' : right-left + ' steps to the right';
}

function firstTime(data) {
  let amount = 0;
  for (let i = 0; i < data.length; i++){
    if (data[i] == '>'){
      amount++;
    }
    if (data[i] == '<'){
      if (amount == -1){
        return 'In step '+ i +' you reach the left side';
      }
      amount--;
    }
  }
  return null;
}