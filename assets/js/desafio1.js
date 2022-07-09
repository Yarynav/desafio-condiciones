const image = document.querySelector("#main-image");
/**
 * @description Esta función añade un borde de color rojo al hacer click en la imagen con id #main-image, si la imagen tiene borde en ese caso se lo quita
 */
function changeBorder() {
  if (image.style.border == "") {
    image.setAttribute("style", "border: 2px solid red");
  } else {
    image.setAttribute("style", "");
  }
}
image.addEventListener("click", changeBorder);
