export function Journal(title, sentence) {
  this.title = title,
  this.sentence = sentence,
  this.count = 0;
  
}

Journal.prototype.Count = function(sum) {
  var countArray = sum.split(" ");
  this.count = countArray.length;
  return this.count;
};

Journal.prototype.Vowels = function(word){
  var result = word.toLowerCase();
  var totalV = "";
  
  console.log(result)
  var vowels = ['a','e','i','o','u'];
  for(var i = 0; i < result.length; i++){
    if((vowels.includes(result[i]))){
      totalV += result[i];
    }
  }
  return totalV.length;
}

Journal.prototype.Cons = function(word){
  var result = word.toLowerCase();
  
  var totalC = "";
  console.log(result)
  var vowels = ['a','e','i','o','u', ' '];
  for(var i = 0; i < result.length; i++){
    if(!(vowels.includes(result[i]))){
      totalC += result[i];
  }
}
  return totalC.length;
}

Journal.prototype.getTeaser = function(word) {
  var teaser = "";
  var wordArray = word.split(" ");
  console.log(wordArray)
  console.log(wordArray.length)
  if (wordArray.length >= 8) {
    for (var i = 0; i < 8; i++) {
      teaser = teaser + " " + wordArray[i];
      console.log(wordArray[i])
    } 
  } else {
    return wordArray[0]; 
  }
  return teaser;
}