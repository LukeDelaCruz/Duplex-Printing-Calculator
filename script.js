var inputField = document.querySelector("#totalDocLength");
inputField.addEventListener("keypress", function(e) {
  if (e.keyCode === 13) {
    pageCalc();
  }
});

function pageCalc() {
  var totalDocLength = Number(document.getElementById("totalDocLength").value);
  //Round 1: Select all the odd numbers in increasing order!
  var round1arr = [];
  for (var i = 1; i <= totalDocLength; i++) {
    if (i % 2 !== 0) {
      round1arr.push(i.toString());
    }
  }
  //Round 2: Select all the even numbers in decreasing order!
  //The reason is that the first shall be last and the last shall be first
  //when using the default printer dialogue in Windows
  var round2arr = [];
  for (var i = totalDocLength; i >= 2; i--) {
    if (i % 2 == 0) {
      round2arr.push(i.toString());
    }
  }
  document.getElementById("output").innerHTML = round1arr;
  document.getElementById("output2").innerHTML = round2arr;
}

//Clipboard.js implemented on first button for ease of copy
var btn = document.getElementById("outputBTN");
var clipboard = new Clipboard(btn);
clipboard.on('success', function(e) {
    console.log(e);
});
clipboard.on('error', function(e) {
    console.log(e);
});


//Clipboard.js implemented on second button for ease of copy
var btn2 = document.getElementById("output2BTN");
var clipboard = new Clipboard(btn2);
clipboard.on('success', function(e) {
    console.log(e);
});
clipboard.on('error', function(e) {
    console.log(e);
});
