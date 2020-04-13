var colorArray = [false];
var fail = '';
var win = '';


export function userHandler(ourInput) {
  if (!colorArray[0]) {
    var ourColor = colorGen();
    colorArray[0] = ourColor;
    return colorArray;
  } else {
    ourInputArray = ourInput.split(",");
    for (var i = 0; i < ourInputArray.length; i = i + 1) {
      var count = 0;
      if (ourInputArray[i] !== colorArray[i]) {
        fail = 'f';
        return fail;
        colorArray = [false];
      } else {
        count += 1;
        if (count === 4) {
          win = 'w';
          return win;
        } else {
          ourColor = colorGen();
          colorArray.push(ourColor);
          return colorArray;
        }
      }
    }
  }
}

// var updateArray = function (computerArray) {

//   var color = colorGen()
//   computerArray =

// }


var colorGen = function () {
  var ourNumber = randomGen();
  if (ourNumber === 1) {
    return "violet";
  } else if (ourNumber === 2) {
    return "blue";
  } else if (ourNumber === 3) {
    return "green";
  } else {
    return "red";
  }
}

var randomGen = function () {
  return Math.ceil(Math.random() * 4);
}


