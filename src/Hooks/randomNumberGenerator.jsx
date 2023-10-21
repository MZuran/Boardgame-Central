export function generateInt(minimumNumber, maximumNumber) {
    // Ensure that minimumNumber and maximumNumber are integers
    const min = Math.ceil(minimumNumber);
    const max = Math.floor(maximumNumber);
  
    // Generate a random integer between min (inclusive) and max (inclusive)
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  
    // Check if the generated integer is equal to the minimumNumber or maximumNumber
    if (randomInt === min) {
      return min;
    } else if (randomInt === max) {
      return max;
    } else {
      return randomInt;
    }
  }