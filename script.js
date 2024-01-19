const container = document.querySelector(".container");
createGrid();
function createGrid() {
  for (let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    container.appendChild(gridItem);
  }
}

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((gridItem) => {
  gridItem.addEventListener("mouseover", (event) => {
    gridItem.classList.add("gridItemHover");
  });
});
