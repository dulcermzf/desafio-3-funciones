const cuadrado1 = document.getElementById("key");
const contenedorPrincipal = document.querySelector(".contenedor-principal");

function pintarCuadrado(cuadrado, color) {
  cuadrado.style.backgroundColor = color;
}

document.addEventListener("keydown", (event) => {
  let color;

  if (event.key === "a") {
    color = "pink";
  } else if (event.key === "s") {
    color = "orange";
  } else if (event.key === "d") {
    color = "skyblue";
  } else if (event.key === "q") {
    color = "purple";
  } else if (event.key === "w") {
    color = "gray";
  } else if (event.key === "e") {
    color = "brown";
  }

  if (event.key === "a" || event.key === "s" || event.key === "d") {
    pintarCuadrado(cuadrado1, color);
  }

  if (event.key === "q" || event.key === "w" || event.key === "e") {
    let cuadrado2 = document.getElementById("key2");

    if (!cuadrado2) {
      cuadrado2 = document.createElement("div");
      cuadrado2.id = "key2";
      cuadrado2.classList.add("cuadrado");
      contenedorPrincipal.appendChild(cuadrado2);
    }

    pintarCuadrado(cuadrado2, color);
  }
});
