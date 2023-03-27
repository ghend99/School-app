/////////////////// Container ///////////////////
const mainContainer = document.getElementById("main-container");
const headerContainer = document.getElementById("header-container");
const sidebarContainer = document.getElementById("sidebar-container");
const studentInformationContainer = document.getElementById(
  "student-information-container"
);
const studentManagmentContainer = document.getElementById(
  "student-management-container"
);
const loginContainer = document.getElementById("login-container");
const createAccountContainer = document.getElementById(
  "create-account-container"
);
const composeMessageContainer = document.getElementById(
  "compose-message-container"
);

/////////////////// Sidebar ///////////////////
const sidebarCreateAccountButton = document.querySelector(
  ".create-account-button"
);
/////////////////// Header ///////////////////
const headerFullNameInput = document.querySelector(".header-login-fullname");
const headerPinInput = document.querySelector(".header-login-pin");
const headerLogin = document.querySelector(".header-login-button");

/////////////////// Create Account ///////////////////
const createAccountFirstnameInput = document.querySelector(
  ".create-account-fullname"
);
const createAccountClose = document.querySelector(".");
const createAccountLastnameInput = document.querySelector(
  ".create-account-lastname"
);
const createAccountYearInput = document.querySelector(".create-account-year");
const createAccountPinInput = document.querySelector(".create-account-pin");
const createAccountRepinInput = document.querySelector(".create-account-repin");
const createAccountSubmit = document.querySelector(".create-account-submit");

/////////////////// Student Information ///////////////////
const studentInformationHeader = document.querySelector(
  ".student-information-header"
);
const studentInformationFirstname = document.querySelector(
  ".student-information-firstname"
);
const studetnInformationLastname = document.querySelector(
  ".student-information-lastname"
);
const studentInformationYear = document.querySelector(
  ".student-information-year"
);
const studentInformationReferals = document.querySelector(
  ".student-information-referals"
);
