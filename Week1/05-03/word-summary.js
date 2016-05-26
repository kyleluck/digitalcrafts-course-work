/*
## Word Summary

Given a paragraph of text, for each word present in the paragraph, print the number of time the word was used in the paragraph. Example: for the sentence: "The Caesar cipher is one of the earliest known and simplest ciphers." The output should be:

```
the: 2
caesar: 1
cipher: 2
is: 1
one: 1
of: 1
earliest: 1
known: 1
and: 1
simplest: 1
```

The order in which the words are printed doesn't matter. #loop #string #medium #object #math
*/

//initial parahgraph in lowercase
var paragraph = "The Caesar cipher is one of the earliest known and simplest ciphers.".toLowerCase();

//array of words in paragraph
var words = paragraph.split(" ");

//for each word, how many occurances? split the string on each word and find length
for (var i = 0; i < words.length; i++) {
  var numOccurances = paragraph.split(words[i]).length - 1;
  console.log(words[i] + ": " + numOccurances);
}
