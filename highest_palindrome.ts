function highestPalindrome(str: string, k: number): string {
  if (str === '') {
    return '';
  }

  if (k === 0) {
    if (isPalindrome(str)) {
      return str;
    } else {
      return '-1';
    }
  }

  if (str.length === 1) {
    return str;
  }

  if (str[0] !== str[str.length - 1]) {
    const firstReplaced = highestPalindrome(
      str[0] + str.slice(1, str.length - 1) + str[0],
      k - 1
    );
    const lastReplaced = highestPalindrome(
      str[str.length - 1] + str.slice(1, str.length - 1) + str[str.length - 1],
      k - 1
    );

    if (firstReplaced === '-1' && lastReplaced === '-1') {
      return '-1';
    } else if (firstReplaced === '-1') {
      return lastReplaced;
    } else if (lastReplaced === '-1') {
      return firstReplaced;
    } else {
      return maxPalindrome(firstReplaced, lastReplaced);
    }
  } else {
    return (
      str[0] +
      highestPalindrome(str.slice(1, str.length - 1), k) +
      str[str.length - 1]
    );
  }
}

function isPalindrome(str: string): boolean {
  if (str.length <= 1) {
    return true;
  }
  
  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return isPalindrome(str.slice(1, str.length - 1));
}

function maxPalindrome(str1: string, str2: string): string {
  const num1 = parseInt(str1);
  const num2 = parseInt(str2);
  
  return num1 > num2 ? str1 : str2;
}

const string = '39431';
const k = 1;
const result = highestPalindrome(string, k);

console.log(result);