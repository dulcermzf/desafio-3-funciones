function pintar(div, color = "green") {
  div.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");

pintar(ele);

ele.addEventListener("click", function () {
  pintar(ele, "yellow");
});
