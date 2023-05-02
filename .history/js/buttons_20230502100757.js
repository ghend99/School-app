headerLogin.addEventListener("click", function (e) {
  e.preventDefault();
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

loginPinShow.addEventListener("click", function (e) {
  e.preventDefault();
  showPinLoginModal();
});

loginSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  login();
  loginModalClose();
});

sidebarOpenMenu.addEventListener("click", function (e) {
  e.preventDefault();
  sidebarContainer.style.display = "flex";
  sidebarContainer.style.opacity = "1";
  sidebarOpenMenu.style.opacity = "0";
  sidebarOpenMenu.style.zIndex = "0";
  sidebarCloseMenu.style.opacity = "1";
  sidebarCloseMenu.style.zIndex = "1";
});

sidebarCloseMenu.addEventListener("click", function (e) {
  e.preventDefault();
  sidebarContainer.style.opacity = "0";
  sidebarOpenMenu.style.opacity = "1";
  sidebarOpenMenu.style.zIndex = "1";
  sidebarCloseMenu.style.opacity = "0";
  sidebarCloseMenu.style.zIndex = "0";
});

composeMessageSubmitButton.addEventListener("click", function (e) {
  e.preventDefault();
  sendMessage();
  updateInbox();
  timetableClose();
  inboxOpen();
  mainContainer.style.filter = "blur(0px)";
  composeMessageContainer.style.opacity = "0";
  composeMessageContainer.style.zIndex = "0";
});

sidebarAddReferal.addEventListener("click", function (e) {
  e.preventDefault();
  addReferal();
});

darkModeToggleOn.addEventListener("click", function (e) {
  e.preventDefault();
  darkModeOn();
});

darkModeToggleOff.addEventListener("click", function (e) {
  e.preventDefault();
  darkModeOff();
});
