canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");
var color = "";
var width = "";
var last_position_of_touch_x = "";
var last_position_of_touch_y = "";
var mouseEvent = "";
canvas.addEventListener("mousup", my_mouseup);

function my_mouseup() {
  mouseEvent = "mouseup";
}

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown() {
  mouseEvent = "mousedown";
  color = document.getElementById("color_of_line").value;
  width = document.getElementById("width_of_line").value;
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave() {
  mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
  current_position_of_touch_x = e.clientX - canvas.offsetLeft;
  current_position_of_touch_y = e.clientY - canvas.offsetTop;
  if (mouseEvent == "mousedown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();
  }

  last_position_of_touch_x = current_position_of_touch_x;
  last_position_of_touch_y = current_position_of_touch_y;
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
  console.log("touchstart");
  color = document.getElementById("color_of_line").value;
  width = document.getElementById("width_of_line").value;

  last_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
  last_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
  current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
  current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
  ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
  ctx.stroke();

  last_position_of_touch_x = current_position_of_touch_x;
  last_position_of_touch_y = current_position_of_touch_y;
}