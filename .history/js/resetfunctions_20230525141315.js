const createAccountOpen = function () {
  createAccountContainer.style.opacity = "1";
  createAccountContainer.style.zIndex = "1";
  mainContainer.style.filter = "blur(3px)";
};

const createAccountClose = function () {
  createAccountContainer.style.opacity = "0";
  createAccountContainer.style.zIndex = "0";
  mainContainer.style.filter = "blur(0px)";
};

const createAccountModalSubmit = function () {
  createAccountClose();
  createAccountFirstnameInput.value = "";
  createAccountLastnameInput.value = "";
  createAccountYearInput.value = "";
  createAccountPinInput.value = "";
  createAccountRepinInput.value = "";
};

const createStudentInputReset = function () {
  createAccountFirstnameInput.value = "";
  createAccountLastnameInput.value = "";
  createAccountYearInput.value = "";
  createAccountPinInput.value = "";
  createAccountRepinInput.value = "";
};

const composeMessageOpen = function () {
  composeMessageContainer.style.display = "block";
  mainContainer.style.filter = "blur(3px)";
};

const composeMessageClose = function () {
  composeMessageContainer.style.display = "none";
  mainContainer.style.filter = "blur(0px)";
};

const timetableOpen = function () {
  timetableContainer.style.opacity = "1";
  timetableContainer.style.zIndex = "1";
  studentManagmentHeader.textContent = "Timetable";
  studentManagementClose.style.opacity = "1";
  sidebarUpdateTimetable.style.opacity = "1";
};

const timetableClose = function () {
  timetableContainer.style.opacity = "0";
  timetableContainer.style.zIndex = "0";
  studentManagmentHeader.textContent = "";
  studentManagementClose.style.opacity = "0";
  sidebarUpdateTimetable.style.opacity = "0";
};

const inboxOpen = function () {
  inboxContainer.style.opacity = "1";
  inboxContainer.style.zIndex = "1";
  studentManagmentHeader.textContent = "Inbox";
  studentManagementClose.style.opacity = "1";
};

const inboxClose = function () {
  inboxContainer.style.opacity = "0";
  inboxContainer.style.zIndex = "0";
  studentManagmentHeader.textContent = "";
  studentManagementClose.style.opacity = "0";
};

const loginModalOpen = function () {
  loginContainer.style.opacity = "1";
  loginContainer.style.zIndex = "1";
  mainContainer.style.filter = "blur(3px)";
};

const loginModalClose = function () {
  loginContainer.style.opacity = "0";
  loginContainer.style.zIndex = "0";
  mainContainer.style.filter = "blur(0px)";
};

const passwordResetOpen = function () {
  passwordResetContianer.style.display = "block";
  mainContainer.style.filter = "blur(3px)";
  document.querySelector(
    ".password-reset-name"
  ).textContent = `${currentAccount.fullName}`;
};

const passwordResetClose = function () {
  passwordResetContianer.style.display = "none";
  mainContainer.style.filter = "blur(0px)";
};
