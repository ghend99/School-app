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
  createAccountFirstnameInput.textContent = "";
  createAccountLastnameInput.textContent = "";
};

const composeMessageOpen = function () {
  composeMessageContainer.style.opacity = "1";
  composeMessageContainer.style.zIndex = "1";
  mainContainer.style.filter = "blur(3px)";
};

const composeMessageClose = function () {
  composeMessageContainer.style.opacity = "0";
  composeMessageContainer.style.zIndex = "0";
  mainContainer.style.filter = "blur(0px)";
};

const timetableOpen = function () {
  timetableContainer.style.opacity = "1";
  timetableContainer.style.zIndex = "1";
};

const timetableClose = function () {
  timetableContainer.style.opacity = "0";
  timetableContainer.style.zIndex = "0";
};

const inboxOpen = function () {
  inboxContainer.style.opacity = "1";
  inboxContainer.style.zIndex = "1";
};

const inboxClose = function () {
  inboxContainer.style.opacity = "0";
  inboxContainer.style.zIndex = "0";
};
