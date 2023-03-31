let students = [];
let pins = [];

const Student = class {
  constructor(
    firstName,
    lastName,
    fullName,
    inbox,
    sent,
    pin,
    referals,
    year,
    lessons
  ) {
    this.firstName = firstName.value;
    this.lastName = lastName.value;
    this.fullName = firstName.value + " " + lastName.value;
    this.year = createAccountYearInput.value;
    this.inbox = [];
    this.sent = [];
    this.pin = createAccountPinInput.value;
    this.referals = 0;

    this.lessons1 = [];
    this.lessons2 = [];
    this.lessons3 = [];
    this.lessons4 = [];
    this.lessons5 = [];
  }
};

const login = function () {
  // let studentsAccessed = JSON.parse(localStorage.getItem(`students`));

  const loginName = headerFullNameInput.value;
  const loginPin = headerPinInput.value;
  const target = students.find(
    (stu) => stu.fullName === `${loginName}` && stu.pin === `${loginPin}`
  );
  currentAccount = target;
  console.log(target);
  if (target === undefined) {
    alert("Incorrect login credentials");
  } else {
    headerFullNameInput.value = "";
    headerPinInput.value = "";
    studentInformationHeader.textContent = `Student Name: ${currentAccount.fullName}`;
    studentInformationFirstname.textContent = `First Name: ${currentAccount.firstName}`;
    studetnInformationLastname.textContent = `Last Name: ${currentAccount.lastName}`;
    studentInformationYear.textContent = `Year Group: ${currentAccount.year}`;
    studentInformationReferals.textContent =
      currentAccount.referals < 0
        ? "Referals: 0"
        : `Referals: ${currentAccount.referals}`;
    mainContainer.style.opacity = "1";

    showStudentTiemtable();
  }
};

const loginModal = function () {
  // let studentsAccessed = JSON.parse(localStorage.getItem(`students`));
  const loginName = loginModalFullname.value;
  const loginPin = loginModalPin.value;
  const target = students.find(
    (stu) => stu.fullName === `${loginName}` && stu.pin === `${loginPin}`
  );
  currentAccount = target;
  if (target.length === 0) {
    alert("Incorrect login credentials");
  } else {
    headerFullNameInput.value = "";
    headerPinInput.value = "";
    studentInformationHeader.textContent = `Student Name: ${currentAccount.fullName}`;
    studentInformationFirstname.textContent = `First Name: ${currentAccount.firstName}`;
    studetnInformationLastname.textContent = `Last Name: ${currentAccount.lastName}`;
    studentInformationYear.textContent = `Year Group: ${currentAccount.year}`;
    studentInformationReferals.textContent =
      currentAccount.referals < 0
        ? "Referals: 0"
        : `Referals: ${currentAccount.referals}`;
    mainContainer.style.opacity = "1";
  }
};

const createStudent = function () {
  let newStudent = new Student(
    createAccountFirstnameInput,
    createAccountLastnameInput,
    createAccountYearInput,
    createAccountPinInput.value,
    createAccountRepinInput.value
  );
  if (pins.includes(createAccountPinInput.value)) {
   alert(`Pin already in use`)
  // } else if (createAccountFirstnameInput.value === "") {
  //   document.querySelector(
  //     ".create-account-fullname-error"
  //   ).innerText = `No First Name`;
  // } else if (createAccountLastnameInput.value === "") {
  //   document.querySelector(".create-account-lastname-error").innerText =
  //     "No Last Name";
  // } else if (createAccountYearInput.value === "") {
  //   document.querySelector(".create-account-year-error").innerText = "No Year";
  // } else if (
  //   createAccountYearInput.value < 4 ||
  //   createAccountYearInput.value > 13
  // ) {
  //   document.querySelector(".create-account-year-error").innerText =
  //     "Year must be between 4 and 13";
  // } else if (createAccountPinInput.value === "") {
  //   document.querySelector(".create-account-pin-error").innerText = "No Pin";
  // } else if (createAccountRepinInput.value === "") {
  //   document.querySelector(".create-account-repin-error").innerText =
  //     "Need to check Pin";
  // } else if (createAccountPinInput != createAccountRepinInput) {
  //   document.querySelector(".create-account-repin-error").innerText =
  //     "Pins do not match";
  // } else {
  students.push(newStudent);
  console.log(students);
  pins.push(createAccountPinInput.value);
  // let studentsStored = JSON.stringify(students);
  // localStorage.setItem(`students`, studentsStored);
  createAccountModalSubmit();
};
const createStudentInputReset = function () {
  createAccountFirstnameInput.value = "";
  createAccountLastnameInput.value = "";
  createAccountYearInput.value = "";
  createAccountPinInput.value = "";
  createAccountRepinInput.value = "";
};

const searchStudent = function () {
  // let studentsAccessed = JSON.parse(localStorage.getItem(`students`));
  const searchParameter = sidebarStudentSearchInput.value;
  const searchResult = students.find(
    (stu) => stu.fullName === `${searchParameter}`
  );
  if (searchResult.length === 0) {
    alert(`Not a valid user`);
  } else {
    studentInformationHeader.textContent = `Student: ${searchResult.fullName}`;
    studentInformationFirstname.textContent = `First Name: ${searchResult.firstName}`;
    studetnInformationLastname.textContent = `Last Name: ${searchResult.lastName}`;
    studentInformationYear.textContent = `Year Group: ${searchResult.year}`;
    studentInformationReferals.text =
      searchResult.referals > 0
        ? "Referals: 0"
        : `Referals: ${searchResult.referals}`;
    sidebarStudentSearchInput.textContent = "";
  }
};

const showPin = function () {
  if (headerPinInput.type === "password") {
    headerPinInput.type = "number";
  } else if (headerPinInput.type === "number") {
    headerPinInput.type = "password";
  }
};

const showPinLoginModal = function () {
  if (loginModalPin.type === "password") {
    loginModalPin.type = "number";
  } else if (loginModalPin.type === "number") {
    loginModalPin.type = "password";
  }
};

const addReferal = function () {
  // let studentsAccessed = JSON.parse(localStorage.getItem(`students`));
  const searchParameter = sidebarAddReferalInput.value;
  const target = students.find((stu) => stu.fullName === `${searchParameter}`);
  if (target.length === 0) {
    alert(`Not a valid user`);
  } else {
    target["referals"] = target.referals + 1;
    studentInformationReferals.textContent =
      target.referals < 0 ? "Referals: 0" : `Referals: ${target.referals}`;
    sidebarAddReferalInput.value = "";
  }
};

const darkModeToggleOn = document.querySelector(".header-dark-mode-toggle");
const darkModeToggleOff = document.querySelector(".header-light-mode-toggle");
const headerLogo = document.querySelector(".header-logo");
const createAccountInputs = document.getElementById("create-account-input");

const darkModeOn = function () {
  mainContainer.classList.add("dark-mode");
  headerFullNameInput.classList.add("dark-mode-input");
  headerPinInput.classList.add("dark-mode-input");
  sidebarAddReferalInput.classList.add("dark-mode-input");
  sidebarStudentSearchInput.classList.add("dark-mode-input");
  loginContainer.classList.add("dark-mode");
  loginContainer.style.backgroundColor = "black";
  document
    .querySelectorAll(".login-input")
    .forEach((el) => el.classList.add("dark-mode-input"));
  loginSubmit.style.backgroundColor = "white";
  loginSubmit.style.color = "black";

  createAccountContainer.classList.add("dark-mode");
  createAccountContainer.style.backgroundColor = "black";
  document
    .querySelectorAll(".create-account-input")
    .forEach((el) => el.classList.add("dark-mode-input"));
  composeMessageContainer.classList.add("dark-mode");
  composeMessageContainer.style.backgroundColor = "black";
  document
    .querySelectorAll(".compose-message-input")
    .forEach((el) => el.classList.add("dark-mode-input"));
  composeMessageSubmitButton.style.backgroundColor = "white";
  composeMessageSubmitButton.style.color = "black";
  darkModeToggleOff.style.opacity = "1";
  darkModeToggleOn.style.opacity = "0";
  sidebarOpenMenu.src = "images/menu-white.png";
  headerLogin.src = "images/login-button-white.png";
  headerLogo.src = "images/logo-white.png";
  headerLoginIcon.src = "images/login-white.png";
  headerLoginClose.src = "images/close-white.png";
  createAccountModalClose.src = "images/close-white.png";
  composeMessageModalClose.src = "images/close-white.png";
};

const darkModeOff = function () {
  mainContainer.classList.remove("dark-mode");
  headerFullNameInput.classList.remove("dark-mode-input");
  headerPinInput.classList.remove("dark-mode-input");
  sidebarAddReferalInput.classList.remove("dark-mode-input");
  sidebarStudentSearchInput.classList.remove("dark-mode-input");
  loginContainer.classList.remove("dark-mode");
  loginContainer.style.backgroundColor = "#faf9f6";
  document
    .querySelectorAll(".login-input")
    .forEach((el) => el.classList.remove("dark-mode-input"));
  loginSubmit.classList.remove("dark-mode-button");
  loginSubmit.style.backgroundColor = "black";
  loginSubmit.style.color = "white";
  createAccountContainer.classList.remove("dark-mode");
  createAccountContainer.style.backgroundColor = "#faf9f6";
  document
    .querySelectorAll(".create-account-input")
    .forEach((el) => el.classList.remove("dark-mode-input"));
  composeMessageContainer.classList.remove("dark-mode");
  composeMessageContainer.style.backgroundColor = "#faf9f6";
  document
    .querySelectorAll(".compose-message-input")
    .forEach((el) => el.classList.remove("dark-mode-input"));
  composeMessageSubmitButton.style.backgroundColor = "black";
  composeMessageSubmitButton.style.color = "white";
  darkModeToggleOn.style.opacity = "1";
  darkModeToggleOff.style.opacity = "0";
  sidebarOpenMenu.src = "images/menu.png";
  headerLogin.src = "images/login-button.png";
  headerLogo.src = "images/logo.png";
  headerLoginIcon.src = "images/login.png";
  headerLoginClose.src = "images/Close.png";
  createAccountModalClose.src = "images/Close.png";
  composeMessageModalClose.src = "images/Close.png";
};

darkModeToggleOn.addEventListener("click", function (e) {
  e.preventDefault();
  darkModeOn();
});

darkModeToggleOff.addEventListener("click", function (e) {
  e.preventDefault();
  darkModeOff();
});
