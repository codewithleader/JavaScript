function regexVar(word) {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  console.log(word);
  const re = word.match(/[aeiou]*[aeiou]/);
  console.log(re);

  /*
   * Do not remove the return statement
   */
  return re;
}

function checkSameVowel(str) {
  // La expresión regular busca una vocal al principio y al final de la cadena
  var regex = /^([aeiouAEIOU]).*\1$/;
  return regex.test(str);
}


regexVar('ada');
