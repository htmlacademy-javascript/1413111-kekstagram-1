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
if (checkingPalindrome('Лёша на полке клопа нашёл ')) {
  console.log('right');
} else {
  console.log('wrong');
}

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
console.log(getNum(1.5));

//task3
function addingLine(origLine, minLenght, addWord) {
  let newWord = '';
  for (let index = 0; index < minLenght - 1; index++) {
    newWord = newWord + addWord;
  }
  if (newWord.length > minLenght) {
    newWord = newWord.slice(0, minLenght - 1);
  }
  newWord = newWord + origLine;
  return newWord;
}
console.log(addingLine('q', 4, 'werty'));

//task4
function checkingString(str, maxLen) {
  return str.length <= maxLen;
}
console.log(checkingString('проверяемая строка', 10));
