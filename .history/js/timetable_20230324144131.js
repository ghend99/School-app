const timetable = document.getElementById("timetable-container");

function makeRows(rows, cols) {
  timetable.style.setProperty("--grid-rows", rows);
  timetable.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.innerText = c + 1;
    timetable.appendChild(cell).className = "grid-item";
  }
}

makeRows(6, 6);
