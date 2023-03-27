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
  inboxClose();
  timetableOpen();
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
  studentManagementClose.style.opacity = "0";
});

headerLoginIcon.addEventListener("click", function (e) {
  e.preventDefault();
  loginModalOpen();
});

headerLoginClose.addEventListener("click", function (e) {
  e.preventDefault();
  loginModalClose();
});

loginSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  loginModal();
  loginModalClose();
});
