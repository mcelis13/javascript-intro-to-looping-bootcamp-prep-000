
function forLoop(array){
  for(var i = 0; i < 25; i++){
    array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
  }
  return array;
};

function whileLoop(n){
  while(n > 0){
    console.log(n);
    n--;
  }
  return 'done';
};

function maybeTrue(){
  return Math.random() >= 0.5;
};

function doWhileLoop(array){
  do {
    array.pop();
  } while (array.length && maybeTrue());
  return array;
};

console.log(doWhileLoop([1,2,3,4,5,6]));
