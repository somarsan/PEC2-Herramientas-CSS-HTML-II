/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

document.getElementById("hamburguesa").addEventListener("click", modificarMenu);
let discriminador = true;
window.addEventListener("resize", ocultarMenu);

function modificarMenu() {
  if (discriminador) {
    document.querySelector("nav ul").style.left = "0px";
    discriminador = false;
  } else {
    document.querySelector("nav ul").style.left = "-750px";
    discriminador = true;
  }
}

function ocultarMenu() {
  if (window.innerWidth >= 800) {
    document.querySelector("nav ul").style.left = "-750px";
    discriminador = true;
  }
}
