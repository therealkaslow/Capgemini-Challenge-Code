// lógica baseada em https://www.geeksforgeeks.org/count-total-anagram-substrings/?ref=lbp
// requisito 3 do desafio da Academia Capgemini
// confuso em relação ao exemplo que ovo tem um resultado sendo 3, o que me fez teorizar que o exercício também conta palindromos

function getSubstrings(str) {
    const result = [];
    for (let i = 0; i < str.length; i += 1) {
      for (let j = i + 1; j <= str.length; j += 1) {
        result.push(str.substring(i, j));
      }
    }
  
    return result;
  }
  
  function isAnagram(str1, str2) {
    const strA = str1.split('').sort().join('');
    const strB = str2.split('').sort().join('');
    return strA === strB;
  }
  
  function countAnagrams(currentIndex, arr) {
    const currentElement = arr[currentIndex];
    const arrRest = arr.slice(currentIndex + 1);
    let anagramCount = 0;
  
    for (let i = 0; i < arrRest.length; i += 1) {
      if (currentElement.length === arrRest[i].length && isAnagram(currentElement, arrRest[i])) {
        anagramCount += 1;
      }
    }
  
    return anagramCount;
  }
  
  function isDuplicate(string) {
    const text = string.split('');
    return text
      .some((currentValue, index, currentArr) => currentArr.lastIndexOf(currentValue) !== index);
  }
  
  function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i += 1) if (str[i] !== str[str.length - i - 1]) return false;
    return true;
  }
  
  function anagramsChallenger(string) {
    if (!isDuplicate(string)) return 0;
    let anagramsCount = 0;
    const arrSubstrings = getSubstrings(string);
    arrSubstrings.forEach((_, i) => { anagramsCount += countAnagrams(i, arrSubstrings); });
    if (isPalindrome(string)) {
      anagramsCount += 1;
    }
    return anagramsCount;
  }
  
  module.exports = anagramsChallenger;
  