(function (window) {
var names = ["Hemnath", "Authur", "Lookman", "Jason", "Nono", "Frank", "Prince", "Paula", "Laura", "Jack"];
for (var i in names) {
  var firstLetter = ((names[i]).charAt(0)).toLowerCase();
  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);