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
const inboxLine = document.getElementById("inbox-line");

/////////////////// Sidebar ///////////////////
const sidebarStudentSearchInput = document.querySelector(
  ".sidebar-link-search"
);
const sidebarSearchStudentButton = document.querySelector(
  ".search-student-button"
);
const sidebarCreateAccountButton = document.querySelector(
  ".create-account-button"
);
const sidebarComposeMessageButton = document.querySelector(
  ".compose-message-button"
);
const sidebarShowTimetable = document.querySelector(".show-timetable");
const sidebarShowInbox = document.querySelector(".show-inbox");
const sidebarOpenMenu = document.querySelector(".sidebar-open-menu");
const sidebarCloseMenu = document.querySelector(".");

/////////////////// Header ///////////////////
const headerFullNameInput = document.querySelector(".header-login-fullname");
const headerPinInput = document.querySelector(".header-login-pin");
const headerShowPin = document.querySelector(".header-show-pin");
const headerLogin = document.querySelector(".header-login-button");
const headerLoginIcon = document.querySelector(".header-login-icon");

/////////////////// Create Account ///////////////////
const createAccountFirstnameInput = document.querySelector(
  ".create-account-fullname"
);
const createAccountModalClose = document.querySelector(".create-account-close");
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

/////////////////// Student Management ///////////////////
const timetableContainer = document.getElementById("timetable-container");
const inboxContainer = document.getElementById("inbox-container");
const studentManagmentHeader = document.querySelector(
  ".student-management-heading"
);
const studentManagementClose = document.querySelector(
  ".student-management-close"
);

/////////////////// Compose Message ///////////////////
const composeMessageModalClose = document.querySelector(
  ".compose-message-close"
);
const composeMessageReciever = document.querySelector(
  ".compose-message-reciever"
);
const composeMessageSubject = document.querySelector(
  ".compose-message-subject"
);
const composeMessageText = document.querySelector(".compose-message-textarea");
const composeMessageSubmitButton = document.querySelector(
  ".compose-message-send"
);

/////////////////// Login ///////////////////
const headerLoginClose = document.querySelector(".login-close");
const loginModalFullname = document.querySelector(".login-input-fullname");
const loginModalPin = document.querySelector(".login-input-pin");
const loginPinShow = document.querySelector(".login-pin-show");
const loginSubmit = document.querySelector(".login-button-submit");
