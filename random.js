//create a click event on the window
$(window).click(pickImage);
//run a function that randomly calls between two options
var rightArrow = "http://i.imgur.com/s6EknWJ.jpg?1";
var leftArrow = "http://i.imgur.com/2B5NFNR.jpg";
var arrowImages = [rightArrow, leftArrow];

//depending on the option, call an image and put it on the page

function pickImage() {
  var index;
  index = Math.floor(Math.random() * (2)) + 1
  index = index - 1;
  console.log(index)
  var choosenImage = arrowImages[index];
  var imageHTML = `<img src=${choosenImage} alt="" width="500" height="500">`
  console.log(imageHTML)
  $(".arrow").html(imageHTML);

}
