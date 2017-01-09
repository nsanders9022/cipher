var sentence = prompt("Type a sentence...");
//console.log(sentence);

var firstLastCap = function (s) {
  return s.charAt(0).toUpperCase() + s.charAt(s.length - 1).toUpperCase();
};

//console.log(firstLastCap(sentence));

var reverse = function (s) {
  return s.charAt(s.length - 1).toUpperCase() + s.charAt(0).toUpperCase();
};

var call = function (s) {
  return(s + reverse(s))
  //console.log(firstLastCap(s));
  //console.log(reverse(s));
};

var reverseStr = function (s) {
  var arr = s.split("");
  var newArr = [];

  for (var i = arr.length; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr.join("");
}

var letterCount = function (s) {
  var count = Math.floor(s.length/2);
  //console.log(count);
  var char = s.charAt(count);
  //console.log(char);
  return char + call(s);
}

console.log(reverseStr(letterCount(sentence)));

$(function () {
  $(".before").click(function () {
    $(".result").text(sentence);
  });

  $(".after").click(function () {
    $(".result").text(reverseStr(letterCount(sentence)));
  });
})
