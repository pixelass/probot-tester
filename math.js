function factorial(n) {
  if (n == 0) { 
    return 1;
  }
  return n * factorial(n - 1);
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function gcd(a, b) {
  while (b != 0) {
    let temp = a;
    a = b;
    b = temp % b;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function getRandomInt(min, max) {
  min = Math.floor(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
