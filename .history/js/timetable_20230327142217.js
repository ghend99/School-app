const timetable = document.getElementById("timetable-container");

function makeRows(rows, cols) {
  timetable.style.setProperty("--grid-rows", rows);
  timetable.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.innerText = c + 1;
    timetable.appendChild(cell).className = "grid-item";

    if (c === 0) {
      cell.innerText = "Time";
    }
    if (c === 1) {
      cell.innerText = "Monday";
    }
    if (c === 2) {
      cell.innerText = "Tuesday";
    }
    if (c === 3) {
      cell.innerText = "Wednesday";
    }
    if (c === 4) {
      cell.innerText = "Thursday";
    }
    if (c === 5) {
      cell.innerText = "Friday";
    }
    if (c === 6) {
      cell.innerText = "8:45am-9:00am";
    }
    if (c === 12) {
      cell.innerText = "9:05am-11:05am";
    }
    if (c === 18) {
      cell.innerText = "11:10am-13:10am";
    }
    if (c === 24) {
      cell.innerText = "13:15pm-14:15pm";
    }
    if (c === 30) {
      cell.innerText = "14:20pm-15:20pm";
    }
    if (c > 6 && c < 12) {
      cell.innerText = "English";
    }

    if (c > 13 && c < 18) {
      cell.innerText = "Math";
    }
  }
}

makeRows(6, 6);
