const makeGridTimetable = function (rows, cols) {
  const timetable = document.querySelector(".");

  timetable.style.setProperty("--grid-rows", rows);
  timetable.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    cell = document.createElement("div");
    cell.innerText = "Cell";
  }
};

makeGridTimetable(6, 6);
