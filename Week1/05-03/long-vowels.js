/*
## Long-long Vowels

Given a word as a string, print the result of extending any long vowels to the length of 5. Examples:

```
Good => Goooood
Cheese => Cheeeeese
Man => Man
Spoon => Spooooon
```

#loop #string #medium

*/

var word = "Good";
var vowels = ["a", "e", "i", "o", "u"];

for (var i = 0; i < word.length; i++) {
  for (var j = 0; j < vowels.length; j++) {
    if (word[i] === vowels[j]) {
      if (word[i + 1] === vowels[j]) {
        var wordBeginning = word.substring(0, i);
        var wordEnd = word.substring(i + 2);

        //console.log("found " + word[i]);
        console.log(wordBeginning);
        console.log(wordEnd);
      }
    }
  }
}
