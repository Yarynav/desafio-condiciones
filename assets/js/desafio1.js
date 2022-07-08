const image = document.querySelector("#main-image");
function changeBorder() {
  if (image.style.border == "") {
    image.setAttribute("style", "border: 2px solid red");
  } else {
    image.setAttribute("style", "");
  }
}
image.addEventListener("click", changeBorder);
