/* 문제: 삼각형의 세 변을 입력받아 직각삼각형(pythagorean)인지 여부를 리턴해야 합니다. */

function isPythagorean(side1, side2, side3) {
    let int1 = side1 * side1;
    let int2 = side2 ** 2;
    let int3 = Math.pow(side3, 2);
    return (int1 + int2) === int3 || (int1 + int3) === int2 || (int2 + int3) === int1; 
  }
  