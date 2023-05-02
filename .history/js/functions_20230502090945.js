let students = [];
let pins = [];
// let studentsStored = [];

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
  let studentsAccessed = JSON.parse(localStorage.getItem(`students`));
  const loginName = headerFullNameInput.value;
  const loginPin = headerPinInput.value;
  const target = studentsAccessed.find(
    (stu) => stu.fullName === `${loginName}` && stu.pin === `${loginPin}`
  );
  currentAccount = target;
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

    if (currentAccount.lessons1.length > 1) {
      showStudentTiemtable();
    } else {
      resetTimetableInputs();
    }
  }
};

const loginModal = function () {
  let studentsAccessed = JSON.parse(localStorage.getItem(`students`));
  const loginName = loginModalFullname.value;
  const loginPin = loginModalPin.value;
  const target = studentsAccessed.find(
    (stu) => stu.fullName === `${loginName}` && stu.pin === `${loginPin}`
  );
  currentAccount = target;
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
  students.push(newStudent);

  pins.push(createAccountPinInput.value);
  let studentsStored = JSON.stringify(students);
  localStorage.setItem(`students`, studentsStored);
  console.log(studentsStored);
  createAccountModalSubmit();
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

  if (target === undefined) {
    alert(`Not a valid user`);
  } else {
    target["referals"] = target.referals + 1;
    studentInformationReferals.textContent =
      target.referals < 0 ? "Referals: 0" : `Referals: ${target.referals}`;
    sidebarAddReferalInput.value = "";
  }
};

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
  studentManagementClose.src = "images/close-white.png";
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
  studentManagementClose.src = "images/close.png";
};
