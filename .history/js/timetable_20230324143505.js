const makeGridTimetable = function (rows, cols) {
  timetable.style.setProperty("--grid-rows", rows);
  timetable.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    cell = document.createElement("div")
    cell.innerText = "Cell"
  }