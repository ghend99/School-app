headerLogin.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(`CLICK`);
  login();
});

headerShowPin.addEventListener("click", function (e) {
  e.preventDefault();
  showPin();
});

sidebarSearchStudentButton.addEventListener("click", function (e) {
  e.preventDefault();
  searchStudent();
});

createAccountModalClose.addEventListener("click", function (e) {
  e.preventDefault();
  createAccountClose();
});

createAccountSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(`CLICK`);
  createStudent();
  createAccountModalSubmit();
});

sidebarCreateAccountButton.addEventListener("click", function (e) {
  e.preventDefault();
  createAccountOpen();
});

sidebarComposeMessageButton.addEventListener("click", function (e) {
  e.preventDefault();
  composeMessageOpen();
});

composeMessageModalClose.addEventListener("click", function (e) {
  e.preventDefault();
  composeMessageClose();
});

sidebarShowTimetable.addEventListener("click", function (e) {
  e.preventDefault();
  timetableOpen();
  inboxClose();
});

sidebarShowInbox.addEventListener("click", function (e) {
  e.preventDefault();
  timetableClose();
  inboxOpen();
});

studentManagementClose.addEventListener("click", function (e) {
  e.preventDefault();
  timetableClose();
  inboxClose();
});
