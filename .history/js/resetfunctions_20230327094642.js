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

const composeMessageOpen = function () {
  composeMessageContainer.style.opacity = "1";
  composeMessageOpen.style.zIndex = "1";
  mainContainer.style.filter = "blur(3px)";
};
