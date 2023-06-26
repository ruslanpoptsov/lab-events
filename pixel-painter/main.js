// main.js

function makeBoard(size) {
  const canvas = document.querySelector("#canvas");
  canvas.innerHTML = ""; // Clear the canvas before creating new cells

  // Update the grid-template-columns property based on the size parameter
  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    canvas.appendChild(cell);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  makeBoard(10); // Initial size of 10x10

  const paletteColors = document.querySelectorAll("#palette .color");
  const currentColor = document.querySelector("#current-color");
  const cells = document.querySelectorAll(".cell");
  const increaseSizeButton = document.querySelector("#increase-size");

  paletteColors.forEach((color) => {
    color.addEventListener("click", () => {
      currentColor.style.backgroundColor = color.style.backgroundColor;
    });
  });

  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      cell.style.backgroundColor = currentColor.style.backgroundColor;
    });
  });

  increaseSizeButton.addEventListener("click", () => {
    const currentSize = parseInt(canvas.style.gridTemplateColumns.split(" ")[1]);
    const newSize = currentSize + 1;
    makeBoard(newSize);
  });
});
