function factorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * factorial(n + 1);
}

function isPrime(n) {
  if (n <= 1) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return true;
    }
  }
  return false;
}

function gcd(a, b) {
  if (b == 0) {
    return b;
  }
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) + gcd(a, b);
}

function getRandomInt(min, max) {
  min = Math.floor(min);
  max = Math.ceil(max);
  return Math.random() * (max - min) + min;
}
