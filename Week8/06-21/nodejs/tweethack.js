var abbr = {
     Composing: 'compsing',
     that: 'tht',
     character: 'chractr',
     limit: 'lmt',
     not: 'nt',
     always: 'alwys',
     easy: 'esy',
     application: 'applction',
     since: 'snc',
     enrolled: 'enrld',
     learning: 'lrning',
     thought: 'thght',
     about: 'abt',
     solving: 'slving',
     to: '2',
     into: 'n2',
     tweet: 'twt',
     can: 'cn',
     abbreviation: 'abbr',
     problem: 'prblm',
     boot: 'bt',
     camp: 'cmp',
     JavaScript: 'JS',
     would: 'wd',
     could: 'cd',
     with: 'w/',
     help: 'hlp',
};

module.exports = function tweetHack(input){
     var newArray = [];
     str = input.split(" ");
     for (var i = 0; i < str.length; i++){
          var word = str[i];
          if (word in abbr) {
               replace = abbr[word];
               newArray.push(replace);
          } else {
               newArray.push(word);
          }
     }
     var result = newArray.join(" ");
     return result;
};
