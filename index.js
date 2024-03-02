// Variables:
const setGridBtn = document.getElementById("create-grid-btn");
const resetGridBtn = document.getElementById("reset-grid-btn");
const gridSizeInp = document.getElementById("grid-input");
const gridContainer = document.getElementById("grid");
const gridBoxes = document.querySelectorAll(".grid-box");

// Event Listeners:
document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      // Create a grid Box element
      const gridBox = document.createElement("div");
      gridBox.className = "grid-box";
      gridBox.style.width = `${100 / 16}%`;
      gridBox.style.height = `${100 / 16}%`;

      // Append the grid item to the grid container
      gridContainer.appendChild(gridBox);
    }
  }
  gridSizeInp.addEventListener("input", function () {
    // Check if the input field is empty
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

  gridSizeInp.focus();
});

// Allow button click with Enter key:
gridSizeInp.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && !setGridBtn.disabled) {
    setGridBtn.click();
  }
});

setGridBtn.addEventListener("click", function () {
  if (
    parseInt(gridSizeInp.value.trim()) < 1 ||
    parseInt(gridSizeInp.value.trim()) > 100
  ) {
    alert("Please enter a value between 1 and 100");
    return;
  }
  // Clear previously created grid boxes
  gridContainer.innerHTML = "";
  for (let i = 0; i < gridSizeInp.value; i++) {
    for (let j = 0; j < gridSizeInp.value; j++) {
      // Create a grid Box element
      const gridBox = document.createElement("div");
      gridBox.className = "grid-box";
      gridBox.style.width = `${100 / gridSizeInp.value}%`;
      gridBox.style.height = `${100 / gridSizeInp.value}%`;

      // Append the grid item to the grid container
      gridContainer.appendChild(gridBox);
    }
  }
});
