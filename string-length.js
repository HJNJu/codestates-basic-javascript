/* 문제: 두 단어를 입력받아 두 단어의 평균 길이를 내림하여 리턴해야 합니다. */

function computeAverageLengthOfWords2(word1, word2) {
    let length1 = word1.length;
    let length2 = word2.length;
    let avrg = (length1 + length2) / 2;
    let result = Math.floor(avrg);
    return result;
  }