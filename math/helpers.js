// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Function to check if a number is prime
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Function to calculate the greatest common divisor (GCD) of two numbers
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

// Function to calculate the least common multiple (LCM) of two numbers
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// Function to generate random integer between a minimum and maximum value (inclusive)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
