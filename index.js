//Buttons
const resetButton = document.querySelectorAll("button")[0];
const pauseButton = document.querySelectorAll("button")[1];
const startButton = document.querySelectorAll("button")[2];

//DrawingArea
drawingArea = document.querySelector(".drawing-area");

//Colorpicker
const colorPicker = document.getElementById("color-picker");

//Drawing function
function drawingFunc(e) {
  const circle = document.createElement("div");
  drawingArea.appendChild(circle);

  circle.style.width = "15px";
  circle.style.height = "15px";
  circle.style.backgroundColor = colorPicker.value;
  circle.style.borderRadius = "50%";
  circle.style.position = "absolute";
  circle.style.left = e.clientX + "px";
  circle.style.top = e.clientY + "px";
}
drawingArea.addEventListener("mousemove", drawingFunc);

//Reset Button
resetButton.addEventListener("click", () => {
  drawingArea.innerHTML = "";
});

//Pause Button
pauseButton.addEventListener("click", () => {
  drawingArea.removeEventListener("mousemove", drawingFunc);
});

//Start Button
startButton.addEventListener("click", () => {
  drawingArea.addEventListener("mousemove", drawingFunc);
});
