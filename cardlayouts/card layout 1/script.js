const div = document.querySelector(".parent div:first-child");
const div1 = document.querySelector(".parent div:first-child div");
const btn = document.getElementById("btn");

div.addEventListener("mouseover", function () {
  console.log("cliched");

  div.classList.toggle("bckcolor");
  div1.classList.toggle("opacity");
  btn.classList.toggle("opacity0");
});
div.addEventListener("mouseout", function () {
  div1.classList.toggle("opacity");
  div.classList.toggle("bckcolor");
  btn.classList.toggle("opacity0");
});
// /////
const black = document.querySelector(".parent div:last-child div:first-child");
const white = document.querySelector(".parent div:last-child div:nth-child(2)");
const maroon = document.querySelector(
  ".parent div:last-child div:nth-child(3)"
);
const blue = document.querySelector(".parent div:last-child div:last-child ");
const img = document.querySelector(".parent div:first-child div:first-child");
/// white
white.addEventListener("click", function () {
  img.classList.remove("img", "blackimg", "maroonimg", "blueimg");
  img.classList.add("whiteimg");
});
//black
black.addEventListener("click", function () {
  img.classList.remove("img", "whiteimg", "maroonimg", "blueimg");
  img.classList.add("blackimg");
});
// maroon
maroon.addEventListener("click", function () {
  img.classList.remove("img", "whiteimg", "blackimg", "blueimg");
  img.classList.add("maroonimg");
});
//blue
blue.addEventListener("click", function () {
  img.classList.remove("img", "whiteimg", "blackimg", "maroonimg");
  img.classList.add("blueimg");
});
