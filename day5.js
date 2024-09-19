/*Write an InnerArray function that takes two arrays as input.
The function checks if the second array contains the first array and returns the index of the second array
where it found the first one. And returns null, if doesn’t contain.*/

function innerArray(arr1, arr2) {
  let len1 = arr1.length;
  let len2 = arr2.length;

  for (let i = 0; i <= len2 - len1; i++) {
    let match = true;
    for (let j = 0; j < len1; j++) {
      if (arr2[i + j] !== arr1[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      return i;
    }
  }
  return null;
}

console.log(innerArray([4, 6, 6], [1, 2, 3, 4, 6, 6, 7, 8, 9])); 


console.log()
/*Write a Translit function that takes a Latin text as input and converts it to Armenian.*/

function Translit(text) {
  const translitMap = {
    'a': 'ա',
    'b': 'բ',
    'g': 'գ',
    'd': 'դ',
    'e': 'է',
    '@': 'ը',
    'th': 'թ',
    'zh': 'ժ',
    'i': 'ի',
    'l': 'լ',
    'kh': 'խ',
    'ts': 'ծ',
    'k': 'կ',
    'h': 'հ',
    'dz': 'ձ',
    'gh': 'ղ',
    'tsh': 'ճ',
    'm': 'մ',
    'y': 'յ',
    'n': 'ն',
    'sh': 'շ',
    'o': 'օ',
    'ch': 'չ',
    'p': 'պ',
    'j': 'ջ',
    'rr': 'ռ',
    's': 'ս',
    'v': 'վ',
    't': 'տ',
    'r': 'ր',
    'c': 'ց',
    'u': 'ու',
    'ph': 'փ',
    'q': 'ք',
    'ev': 'եւ',
    'f': 'ֆ',
  };

  const wordStartMap = {
    'e': 'ե', 
    'o': 'ո', 
    'ev': 'եւ',
  };

  return text
    .toLowerCase()
    .split(' ')
    .map(word => {
      for (let key in wordStartMap) {
        if (word.startsWith(key)) {
          word = word.replace(key, wordStartMap[key]);
          break;
        }
      }

      return word.replace(/th|zh|kh|ts|dz|gh|tsh|ch|rr|sh|ph|ev|[a-z@]/g, match => translitMap[match] || match);
    })
    .join(' ');
}

console.log(Translit("tumo")); 
console.log(Translit("labs")); 
