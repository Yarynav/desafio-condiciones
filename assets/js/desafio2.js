const sticker1 = document.querySelector("#sticker1");
const sticker2 = document.querySelector("#sticker2");
const sticker3 = document.querySelector("#sticker3");

/**
 * @description la funcion muestra la cantidad de sticker a llevar, si esta supera los 10 te avisa que llevas demasidos stickers
 */
function countStickers() {
  const result =
    Number(sticker1.value) + Number(sticker2.value) + Number(sticker3.value);
  if (result > 10) {
    document.querySelector("#message").innerHTML = "Llevas demasiados stickers";
  } else {
    document.querySelector("#message").innerHTML = `Llevas ${result} sticker`;
  }
}
document.querySelector("#button").addEventListener("click", countStickers);
