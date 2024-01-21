const container = document.querySelector(".gridContainer");
const gridValue = document.getElementById("gridRange").value;
const sizeInfo = document.querySelector(".sizeInfo");
sizeInfo.textContent = `Grid Size: ${gridValue}`;

function createGrid(size) {
  let side = size * size;
  for (let i = 0; i < side; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    container.appendChild(gridItem);
  }
  gridSizing(size);
  AddHoverEffect();
}

createGrid(gridValue);

function updateGrid(size) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  let side = size * size;
  for (let i = 0; i < side; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    container.appendChild(gridItem);
  }
  gridSizing(size);
  AddHoverEffect();
  sizeInfo.textContent = `Grid Size:${size}`;
}

function AddHoverEffect() {
  const gridItems = document.querySelectorAll(".grid-item");

  gridItems.forEach((gridItem) => {
    gridItem.addEventListener("mouseenter", (event) => {
      gridItem.classList.add("gridItemHover");
    });
  });
}

function resetGrid() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem) => {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItem.classList.remove("gridItemHover");
  });
}

AddHoverEffect();
const resetBtn = document.querySelector(".resetBtn");

resetBtn.addEventListener("click", (event) => {
  resetGrid();
});

function gridSizing(size) {
  let containerWidth = 960;
  let containerHeight = containerWidth;
  let gridWidth = containerWidth / size;
  let gridHeight = containerHeight / size;
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem) => {
    gridItem.setAttribute(
      "style",
      `width:${gridWidth}px;height:${gridHeight}px;`
    );
  });
}
