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
    this.lessons = [];
  }
};

const login = function () {
  // let studentsAccessed = JSON.parse(localStorage.getItem(`students`));

  const loginName = headerFullNameInput.value;
  const loginPin = headerPinInput.value;
  const target = students.filter(
    (stu) => stu.fullName === `${loginName}` && stu.pin === `${loginPin}`
  );

  console.log(target);
  if (target.length === 0) {
    alert("Incorrect login credentials");
  } else {
    const obj = { ...target[0] };
    headerFullNameInput.value = "";
    headerPinInput.value = "";
    studentInformationHeader.textContent = `Student Name: ${obj.fullName}`;
    studentInformationFirstname.textContent = `First Name: ${obj.firstName}`;
    studetnInformationLastname.textContent = `Last Name: ${obj.lastName}`;
    studentInformationYear.textContent = `Year Group: ${obj.year}`;
    studentInformationReferals.textContent =
      obj.referals < 0 ? "Referals: 0" : `Referals: ${obj.referals}`;
    currentAccount = target;
    mainContainer.style.opacity = "1";
  }
};

const loginModal = function () {
  // let studentsAccessed = JSON.parse(localStorage.getItem(`students`));
  const loginName = loginModalFullname.value;
  const loginPin = loginModalPin.value;
  const target = students.filter(
    (stu) => stu.fullName === `${loginName}` && stu.pin === `${loginPin}`
  );
  console.log(loginName);
  console.log(loginPin);
  console.log(target);
  if (target.length === 0) {
    alert("Incorrect login credentials");
  } else {
    const obj = { ...target[0] };
    headerFullNameInput.value = "";
    headerPinInput.value = "";
    studentInformationHeader.textContent = `Student Name: ${obj.fullName}`;
    studentInformationFirstname.textContent = `First Name: ${obj.firstName}`;
    studetnInformationLastname.textContent = `Last Name: ${obj.lastName}`;
    studentInformationYear.textContent = `Year Group: ${obj.year}`;
    studentInformationReferals.textContent =
      obj.referals < 0 ? "Referals: 0" : `Referals: ${obj.referals}`;
    currentAccount = target;
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
  // if (pins.includes(createAccountPinInput.value)) {
  //   document.querySelector(".create-account-pin-error").innerText =
  //     "Pin already in use";
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
  const searchResult = students.filter(
    (stu) => stu.fullName === `${searchParameter}`
  );
  if (searchResult.length === 0) {
    alert(`Not a valid user`);
  } else {
    const obj = { ...searchResult[0] };
    studentInformationHeader.textContent = `Student: ${obj.fullName}`;
    studentInformationFirstname.textContent = `First Name: ${obj.firstName}`;
    studetnInformationLastname.textContent = `Last Name: ${obj.lastName}`;
    studentInformationYear.textContent = `Year Group: ${obj.year}`;
    studentInformationReferals.text =
      obj.referals > 0 ? "Referals: 0" : `Referals: ${obj.referals}`;
    sidebarStudentSearchInput.textContent = "";
  }
};

const showPin = function () {
  if (headerPinInput.type === "password") {
    headerPinInput.type = "number";
  } else if ((headerPinInput.type = "number")) {
    headerPinInput.type = "password";
  }
};

const addReferal = function () {
  // let studentsAccessed = JSON.parse(localStorage.getItem(`students`));
  const searchParameter = sidebarAddReferalInput.value;
  const target = students.filter(
    (stu) => stu.fullName === `${searchParameter}`
  );
  if (target.length === 0) {
    alert(`Not a valid user`);
  } else {
    obj = { ...target[0] };
    obj["referals"] = obj.referals + 1;
    studentInformationReferals.textContent =
      obj.referals < 0 ? "Referals: 0" : `Referals: ${obj.referals}`;
    sidebarAddReferalInput.value = "";
  }
};

const darkModeToggleOn = document.querySelector(".header-dark-mode-toggle");
const darkModeToggleOff = document.querySelector(".header-light-mode-toggle");
const headerLogo = document.querySelector(".header-logo");

const darkModeOn = function () {
  mainContainer.classList.add("dark-mode");
  headerFullNameInput.classList.add("dark-mode-input");
  headerPinInput.classList.add("dark-mode-input");
  sidebarAddReferalInput.classList.add("dark-mode-input");
  sidebarStudentSearchInput.classList.add("dark-mode-input");
  loginContainer.classList.add("dark-mode");
  loginModalFullname.classList.add("dark-mode-input");
  darkModeToggleOff.style.opacity = "1";
  darkModeToggleOn.style.opacity = "0";
  sidebarOpenMenu.src = "images/menu-white.png";
  headerLogin.src = "images/login-button-white.png";
  headerLogo.src = "images/logo-white.png";
  headerLoginIcon.src = "images/login-white.png";
};

const darkModeOff = function () {
  mainContainer.classList.remove("dark-mode");
  headerFullNameInput.classList.remove("dark-mode-input");
  headerPinInput.classList.remove("dark-mode-input");
  sidebarAddReferalInput.classList.remove("dark-mode-input");
  sidebarStudentSearchInput.classList.remove("dark-mode-input");
  loginContainer.classList.remove("dark-mode");
  loginModalFullname.classList.remove("dark-mode-input");
  darkModeToggleOn.style.opacity = "1";
  darkModeToggleOff.style.opacity = "0";
  sidebarOpenMenu.src = "images/menu.png";
  headerLogin.src = "images/login-button.png";
  headerLogo.src = "images/logo.png";
  headerLoginIcon.src = "images/login.png";
};

darkModeToggleOn.addEventListener("click", function (e) {
  e.preventDefault();
  darkModeOn();
});

darkModeToggleOff.addEventListener("click", function (e) {
  e.preventDefault();
  darkModeOff();
});
