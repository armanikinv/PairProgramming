function splitOddAndEven(numbers) {

    const odd = numbers.filter((number) => number % 2 === 1);
  
   
    const even = numbers.filter ((number) => number % 2 === 0);
  
    const returnObject = {
      odd,
      even,
    };
  
    return returnObject;
  }
  console.log(splitOddAndEven([1,2,3]));
  console.log(splitOddAndEven([0,3,5]));
  