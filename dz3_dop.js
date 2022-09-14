const average = (numbers) => {
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    const length = numbers.length;
    return sum / length;
  };
  
  const numbers = [1, 2, 3, 4, 5, 6];
  console.log(average(numbers))