const code1 = document.querySelector("#code1");
const code2 = document.querySelector("#code2");
const code3 = document.querySelector("#code3");

/**
 * @description validacion de contraseñas con mensaje
 */
function validatePassword() {
  debugger;
  const result = code1.value + code2.value + code3.value;
  if (result === "911") {
    document.querySelector("#message").innerHTML = "Password 1 correcto";
  } else if (result === "714") {
    document.querySelector("#message").innerHTML = "Password 2 correcto";
  } else {
    document.querySelector("#message").innerHTML = "Password incorrecto";
  }
}
document.querySelector("#button").addEventListener("click", validatePassword);
