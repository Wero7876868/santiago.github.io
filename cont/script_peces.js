const mainText = document.querySelector("#main");
const subText = document.querySelector("#sub");
const theBod = document.querySelector("body");
const menuContainer = document.querySelector("#textContainer");
const leftArrow = document.querySelector("#left");
const rightArrow = document.querySelector("#right");

const pageText = [
{
  main: "¿Qué son peces para niños?",
  sub:
  "Los peces son animales vertebrados, tienen esqueleto formado por espinas o cartílagos. Todos los peces tienen extremidades en forma de aletas y tienen el cuerpo recubierto de escamas. En este vídeo educativo para niños de primaria descubriremos que los peces se reproducen por huevos y respiran a través de branquias.",
  color: "#F9D923" },

{
  main: "¿Qué se alimentan los peces?",
  sub:
  "Pueden ser detrito*, bacterias*, plancton*, gusanos, insectos, caracoles, plantas acuáticas y peces. Su abundancia depende en gran medida de la calidad del agua.",
  color: "#EB5353" },

{
  main: "Tipos de reproducción en los peces",
  sub:
  'La mayor parte de los peces presentan reproducción ovípara, es decir, expulsando huevos al exterior. Aunque también existen peces vivíparos, como es el caso de algunos tiburones y de algunos peces de agua dulce, en los que el embrión se desarrolla dentro del útero de la hembra.',
  color: "#36AE7C" },

{
  main: "¿Cuáles son las características de los peces?",
  sub:
  "Son vertebrados acuáticos. Tienen esqueleto óseo o cartilaginoso. Su cuerpo está recubierto de escamas o dentículos dérmicos. Respiran por branquias el oxígeno disuelto en el agua.",
  color: "#187498" }];



let degrees = 0;
let currentPage = 0;

window.onload = () => {
  mainText.textContent = pageText[currentPage].main;
  subText.textContent = pageText[currentPage].sub;
  document.addEventListener("keydown", checkInput);

  leftArrow.addEventListener("click", () => {
    turnWheel(true);
  });

  rightArrow.addEventListener("click", () => {
    turnWheel();
  });
};

function checkInput(event) {
  if (event.keyCode === 37) {
    turnWheel(true);
  } else if (event.keyCode === 39) {
    turnWheel();
  }
}

function turnWheel(backwards = false) {
  if (backwards) {
    if (currentPage - 1 === -1) {
      currentPage = 3;
    } else {
      currentPage--;
    }
  } else {
    if (currentPage + 1 > 3) {
      currentPage = 0;
    } else {
      currentPage++;
    }
  }

  mainText.textContent = pageText[currentPage].main;
  subText.textContent = pageText[currentPage].sub;

  if (currentPage % 2 === 0) {
    theBod.style.background = "black";
    theBod.style.color = "white";
  } else {
    theBod.style.background = "white";
    theBod.style.color = "black";
  }

  degrees += backwards ? -90 : 90;

  menuContainer.style.transform = `rotateZ(${degrees}deg)`;
  menuContainer.style.backgroundColor = pageText[currentPage].color;
}