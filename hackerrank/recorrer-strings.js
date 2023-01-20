function vowelsAndConsonants(s) {
  const vowels = 'aeiou';
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s.charAt(i))) {
      console.log(s.charAt(i));
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (!vowels.includes(s.charAt(i))) {
      console.log(s.charAt(i));
    }
  }
}

vowelsAndConsonants('javascriptloops');
