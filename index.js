// VARIABLES
const setGridBtn = document.getElementById("create-grid-btn");
const resetGridBtn = document.getElementById("reset-grid-btn");
const gridSizeInp = document.getElementById("grid-input");
const gridContainer = document.getElementById("grid");

// FUNCTIONS

// Creating the grid:

function colorGridBox() {
  let gridBoxes = document.querySelectorAll(".grid-box");
  gridBoxes.forEach(function (gridBox) {
    gridBox.addEventListener("mouseenter", function () {
      gridBox.style.backgroundColor = generateRandomRGB();
    });
  });
}

function createGrid(size) {
  gridContainer.innerHTML = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      // Creating a grid Box element
      const gridBox = document.createElement("div");
      gridBox.className = "grid-box";
      gridBox.style.width = `${100 / size}%`;
      gridBox.style.height = `${100 / size}%`;
      // Appending the grid item to the grid container
      gridContainer.appendChild(gridBox);
    }
  }
}

// Default settings:
function toDefault() {
  gridSizeInp.value = "";
  createGrid(16);
  colorGridBox();
}

// Generating random rbg value:
function generateRandomRGB() {
  let r, g, b;
  do {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
  } while (r + g + b >= 700); // to avoid white

  return `rgb(${r}, ${g}, ${b})`;
}

// EVENT LISTENERS

// When DOM loads:
document.addEventListener("DOMContentLoaded", function () {
  toDefault();
  gridSizeInp.addEventListener("input", function () {
    // Checking if the input field is empty
    if (
      gridSizeInp.value.trim() === "" ||
      parseInt(gridSizeInp.value.trim()) < 1 ||
      parseInt(gridSizeInp.value.trim()) > 100
    ) {
      setGridBtn.classList.add("disabled");
      setGridBtn.disabled = true;
    } else {
      setGridBtn.classList.remove("disabled");
      setGridBtn.disabled = false;
    }
  });

  // Initial check on page load:
  if (gridSizeInp.value.trim() === "") {
    setGridBtn.classList.add("disabled");
    setGridBtn.disabled = true;
  }
});

// 'Create Grid' button click with 'Enter' key:
gridSizeInp.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && !setGridBtn.disabled) {
    setGridBtn.click();
  }
});

// 'Create Grid' button click functionality:
setGridBtn.addEventListener("click", function () {
  setGridBtn.blur();

  // Validating user input:
  if (
    parseInt(gridSizeInp.value.trim()) < 1 ||
    parseInt(gridSizeInp.value.trim()) > 100
  ) {
    alert("Please enter a value between 1 and 100");
    return;
  }

  // Clearing previously created grid boxes:
  gridContainer.innerHTML = "";
  createGrid(gridSizeInp.value);
  colorGridBox();
});

// Reset button functionality (sets the page back to default settings):
resetGridBtn.addEventListener("click", function () {
  resetGridBtn.blur();
  toDefault();
});
