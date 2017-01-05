//create a click event on the window
$(window).click(pickImage);
//run a function that randomly calls between two options
var rightArrow = "http://i.imgur.com/s6EknWJ.jpg?1";
var leftArrow = "http://i.imgur.com/2B5NFNR.jpg";
var arrowImages = [rightArrow, leftArrow];

//depending on the option, call an image and put it on the page

function pickImage() {
  var index;
  //randomly take a number between 1 and 2
  index = Math.floor(Math.random() * (2)) + 1
  //converse the number to being between 0 and 1
  index = index - 1;
  //use the random number to choose which image randomly from the array
  var choosenImage = arrowImages[index];
  //plug the selected image into an html tag
  var imageHTML = `<img src=${choosenImage} alt="" width="500" height="500">`
  //add imageHTML to the page
  $(".arrow").html(imageHTML);

}
