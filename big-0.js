// TOWER OF HANOI

function TOH(num, source, dest, temp) {
  if (num === 1) {
    console.log(`${source} -> ${dest}`);
    return;
  }

  TOH(num - 1, source, temp, dest);
  console.log(`${source} -> ${dest}`);
  TOH(num - 1, temp, dest, source);
}
TOH(3, "A", "C", "B");



// COUNTING SHEEP
function countSheep(numSheep) {
  for (let i = numSheep; i > 0; i--) {
    console.log(`${i}: Another sheep jumps over the fence`);
  }
  console.log("All sheep jumped over the fence");
}

countSheep(5);



//POWER CALCULATOR
function powerCalculator(base, exponent) {
  let result = base;
  for (i = 1; i < exponent; i++) {
    result *= base;
  }
  console.log(result);
}

powerCalculator(2, 3);


//REVERSE STRING
function reverse(string) {
    let newString = '';

    for( let i = string.length - 1; i >=0; i--){
      newString += string[i]
    }
    return newString
}

console.log(reverse('hello'))




//NTH TRIANGLE NUMBER
function nthTriangleNum(number) {
    let triangleNum = 0
    for(let i = 0; i <= number; i++){
        triangleNum += i
    }
    console.log(triangleNum)
}

nthTriangleNum(3)




//STRING SPLITTER
function stringSplit (string, sep) {
    let result = []
    let prevIndex = -1
    for (let i = 0; i < string.length; i++) {
      if (string[i] === sep) {
        result.push(string.slice(prevIndex+1, i))
        prevIndex = i
      }
      if (i === string.length-1 && string[i] !== sep)  {
        result.push(string.slice(prevIndex+1, i+1))
      }
    }
    console.log(result)
  }
  
  stringSplit('02/20/2020', '/')




  //Fibonacci
  function fibonacci(n) {
    let seq = [1, 1]
    if (n===0) {
      console.log(0);
      return;
    }
    if(n===1){
      console.log(1)
      return;
    }
    if(n===2){
      console.log(seq)
      return;
    }
    for (let i = 2; i <= n; i++) {
      seq.push(seq[i-1]+seq[i-2])
    }
    console.log(seq)
  }
  
  fibonacci(9)




//FACTORIAL
function factorial(number){
    let result = 1
    for(let i = number; i > 0; i--){
      result = result * i
    }
    console.log(result)
  }
  
  factorial(5)

