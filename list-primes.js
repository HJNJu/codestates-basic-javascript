/* 문제: 2 이상의 자연수를 입력받아 2부터 해당 수까지의 소수(prime number)들을 리턴해야 합니다. */

function listPrimes(num) {
    let result = '2';
    for (let i = 3; i <= num; i += 2) {
      let isPrime = true;
      let sqrt = parseInt(Math.sqrt(i));
      for (let j = 3; j <= sqrt; j++) {
        if (i % j === 0) {
          isPrime = false;
        }
      }
  
      if (isPrime) {
        result = `${result}-${i}`;
      }
    }
  
    return result;
  }
  