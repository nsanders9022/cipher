var sentence = prompt("Type a sentence...");
console.log(sentence);

var firstLastCap = function (s) {
  return s.charAt(0).toUpperCase() + s.slice(1, s.length - 2) + s.charAt(s.length - 1).toUpperCase();
};

console.log(firstLastCap(sentence));

var reverse = function (s) {
  return s.charAt(s.length - 1).toUpperCase() + s.slice(1, s.length - 2) + s.charAt(0).toUpperCase();
};

console.log(reverse(sentence));
