const timetable = document.getElementById("timetable-container");

function makeRows(rows, cols) {
  timetable.style.setProperty("--grid-rows", rows);
  timetable.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");

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
    if (c >= 7 && c <= 11) {
      inputLesson = document.createElement("input");
      inputLesson.type = "text";
      inputLesson.className = "lesson-monday-1";
      cell.appendChild(inputLesson);
    }
    if (c >= 13 && c <= 17) {
      inputLesson = document.createElement("input");
      inputLesson.type = "text";
      inputLesson.className = "lesson-tuesday-1";
      cell.appendChild(inputLesson);
    }
    if (c >= 19 && c <= 23) {
      inputLesson = document.createElement("input");
      inputLesson.type = "text";
      inputLesson.className = "lesson-wednesday-1";
      cell.appendChild(inputLesson);
    }
    if (c >= 25 && c <= 29) {
      inputLesson = document.createElement("input");
      inputLesson.type = "text";
      inputLesson.className = "lesson-thursday-1";
      cell.appendChild(inputLesson);
    }
    if (c >= 31 && c <= 35) {
      inputLesson = document.createElement("input");
      inputLesson.type = "text";
      inputLesson.className = "lesson-friday-1";
      cell.appendChild(inputLesson);
    }
    if (c === 7) {
      inputLesson.className = "lesson-monday-1";
    }
    if (c === 8) {
      inputLesson.className = "lesson-tuesday-1";
    }
    if (c === 9) {
      inputLesson.className = "lesson-wednesday-1";
    }
    if (c === 10) {
      inputLesson.className = "lesson-thursday-1";
    }
    if (c === 11) {
      inputLesson.className = "lesson-friday-1";
    }
    if (c === 13) {
      inputLesson.className = "lesson-monday-2";
    }
    if (c === 14) {
      inputLesson.className = "lesson-tuesday-2";
    }
    if (c === 15) {
      inputLesson.className = "lesson-wednesday-2";
    }
    if (c === 16) {
      inputLesson.className = "lesson-thursday-2";
    }
    if (c === 17) {
      inputLesson.className = "lesson-friday-2";
    }
    if (c === 19) {
      inputLesson.className = "lesson-monday-3";
    }
    if (c === 20) {
      inputLesson.className = "lesson-tuesday-3";
    }
    if (c === 21) {
      inputLesson.className = "lesson-wednesday-3";
    }
    if (c === 22) {
      inputLesson.className = "lesson-thursday-3";
    }
    if (c === 23) {
      inputLesson.className = "lesson-friday-3";
    }
    if (c === 25) {
      inputLesson.className = "lesson-monday-4";
    }
    if (c === 26) {
      inputLesson.className = "lesson-tuesday-4";
    }
    if (c === 27) {
      inputLesson.className = "lesson-wednesday-4";
    }
    if (c === 28) {
      inputLesson.className = "lesson-thursday-4";
    }
    if (c === 29) {
      inputLesson.className = "lesson-friday-4";
    }
    if (c === 31) {
      inputLesson.className = "lesson-monday-5";
    }
    if (c === 32) {
      inputLesson.className = "lesson-tuesday-5";
    }
    if (c === 33) {
      inputLesson.className = "lesson-wednesday-5";
    }
    if (c === 34) {
      inputLesson.className = "lesson-thursday-5";
    }
    if (c === 35) {
      inputLesson.className = "lesson-friday-5";
    }
  }
}

makeRows(6, 6);

sidebarUpdateTimetableBtn.addEventListener("click", function (e) {
  e.preventDefault();
});
