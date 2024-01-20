const container = document.querySelector(".gridContainer");
const gridValue = document.getElementById("gridRange").value;
createGrid(gridValue);
function createGrid(size) {
  let side = size * size;
  for (let i = 0; i < side; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    container.appendChild(gridItem);
  }
  gridSizing(size);
}

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((gridItem) => {
  gridItem.addEventListener("mouseover", (event) => {
    gridItem.classList.add("gridItemHover");
  });
});

const resetBtn = document.querySelector(".resetBtn");

resetBtn.addEventListener("click", (event) => {
  gridItems.forEach((gridItem) => {
    gridItem.classList.remove("gridItemHover");
  });
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
