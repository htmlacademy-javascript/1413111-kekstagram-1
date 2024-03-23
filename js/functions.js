//task1
function checkingPalindrome(word) {
  let wordOpposite = '';
  for (let i = word.length; i > 0; i--) {
    if (word[i - 1] !== ' ') {
      wordOpposite = wordOpposite + word[i - 1];
    }
  }
  let newWord = '';
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== ' ') {
      newWord = newWord + word[i];
    }
  }
  return newWord.toUpperCase() === wordOpposite.toUpperCase();
}
checkingPalindrome('word');
//or
function isPalindrom(srting) {
  const palindrom = srting.toLowerCase().replaceAll(' ', '');
  return palindrom === palindrom.split().reverse().join();
}
isPalindrom('hi');


//task2
function getNum(param) {
  const string = param.toString();
  let num = '';
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(string[i]) && string[i] !== ' ') {
      num = num + string[i];
    }
  }
  if (num !== '') {
    return Number(num);
  } else {
    return NaN;
  }
}
getNum('param2');
//or
function chekingNum(string) {
  let num = '';
  if (typeof (string) === 'string') {
    for (let i = 0; i < string.length; i++) {
      if (!Number.isNaN(parseInt(string[i], 10))) {
        num = num + string[i];
      }
    }
    return parseInt(num, 10);
  } else {
    return string;
  }
}
chekingNum('param2');

//task3
function getPadStart(string, minLenght, pad) {
  const actualPad = minLenght - string.length;
  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
}
getPadStart('qwerty', 4, '0');

//task4
function checkingString(str, maxLen) {
  return str.length <= maxLen;
}
checkingString('проверяемая строка', 10);
