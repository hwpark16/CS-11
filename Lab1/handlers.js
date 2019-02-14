// Toggles the style with name styleName on the tag, with either the value or
// the default value.
function toggleStyle(el, styleName, value) {
  // If the value of the field corresponding to styleName on the
  // element's style field is '', then set it to value. Otherwise, reset it to
  // ''. e.g. if styleName = "color", we are trying to access the color field
  // on the style field of element.

  if (el.style[styleName] === '') {
    el.style[styleName] = value;
  }
  else {
    el.style[styleName] = '';
  }
}

function onFormSubmit(e) {
  var form = e.target;

  // Prevents the form from actually submitting!  
  e.preventDefault();

  var val1 = form.foo.value
  var val2 = form.bar.value

  // Prints values of foo input and bar input together to response div.
  document.getElementById("response").innerHTML = val1 + ' ' + val2;
}

function formAlert(e) {

  var foo_val = document.getElementById("our_form").foo.value
  var bar_val = document.getElementById("our_form").bar.value

  var button = document.getElementById("alert");

  alert("foo: " + foo_val + '\n' + "bar: " + bar_val);
}

function toggleBox(e) {
  var box = document.getElementById("box");
  var button = document.getElementById("button-1");

  toggleStyle(box, "display", "none");
}


// Rotates the colors of the box from red to blue to green.
function rotateColors(e) {
  var box = document.getElementById("box");
  var button = document.getElementById("button-2");

  if (box.style.backgroundColor === "red") {
  	box.style.backgroundColor = "blue";
  }
  else if (box.style.backgroundColor === "blue") {
  	box.style.backgroundColor = "green";
  }
  else {
  	box.style.backgroundColor = "red";
  }
}

function onTagButtonClick(e) {
  var el = e.target;
  var tagsEl = document.getElementById("tags");
  // Check for the id here and determine which values to toggle. Then
  // loop over all the tags you find and toggle the appropriate values.

  var b = tagsEl.getElementsByTagName("b");
  var i = tagsEl.getElementsByTagName("i");
  var u = tagsEl.getElementsByTagName("u")

  if (el.id === "bold-btn") {
  	toggleStyle(b[0], "color", "red");
  	toggleStyle(b[1], "color", "red");
  }
  else if (el.id === "italic-btn") {
  	toggleStyle(i[0], "backgroundColor", "gray");
  	toggleStyle(i[1], "backgroundColor", "gray");
  	toggleStyle(i[2], "backgroundColor", "gray");
  }
  else {
  	toggleStyle(u[0], "border", "1px solid blue");
  	toggleStyle(u[1], "border", "1px solid blue");
  }
}

function initCanvas() {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");

  // Fills the canvas with the color #ddd
  ctx.fillStyle = "#ddd";
  ctx.fillRect(0, 0, 600, 300);

}

function randomColor() {
  var r = (Math.random() * 256 | 0).toString(16);
  var g = (Math.random() * 256 | 0).toString(16);
  var b = (Math.random() * 256 | 0).toString(16);
  return "#" + r + g + b;
}

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function drawBox(e) {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");

  // Firefox doesn't set offsetX/offsetY.
  if(!e.hasOwnProperty('offsetX')) {
    e.offsetX = e.layerX - e.currentTarget.offsetLeft;
    e.offsetY = e.layerY - e.currentTarget.offsetTop;
  }
  var mouseX = e.offsetX;
  var mouseY = e.offsetY;
  
  // Fills a rectangle with a random color, with a width between 50 and
  // 200 and a height between 50 and 100, such that it is centered around the
  // point (mouseX, mouseY)

  var width = randomInt(50, 200);
  var height = randomInt(50, 100);

  ctx.fillStyle = randomColor();
  ctx.fillRect(mouseX - (width / 2), mouseY - (height / 2), width, height)

}






