
document.getElementById("switchButton").onclick = function () {
  document.getElementById("myBody").classList.toggle("dark");
  document.getElementById("lesson").classList.toggle("bg-light2");
  document.getElementById("head").classList.toggle("dark2");
  document.getElementById("lesson").classList.toggle("dark3");
};

// document.getElementById("eraser").onclick = function () {
//   document.getElementById("search").value =""
//   document.getElementById("eraser").classList.add("d-none")
// }
// document.getElementById("search").onclick = function () {
//   document.getElementById("eraser").classList.add("d-inline")
// }

// document.getElementById("buttonExpand").onclick = function () {
//   document.getElementById("expand").classList.add("none")
//   document.getElementById("close").classList.add("none")
// }