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
    this.year = addStudentYearInput.value;
    this.inbox = [];
    this.sent = [];
    this.pin = addStudentPinInput.value;
    this.referals = 0;
    this.lessons = [];
  }
};

const login = function () {
  let studentsAccessed = JSON.parse(localStorage.getItem(`students`));
  const loginName = headerFullNameInput.value;
  const loginPin = headerPinInput.value;
  const target = studentsAccessed.filter(
    (stu) => stu.fullName === `${loginName}` && stu.pin === `${loginPin}`
  );
  console.log(target);
  if (target.length === 0) {
    alert("Incorrect login credentials");
  } else {
    const obj = { ...target[0] };
    headerFullNameInput.value = "";
    headerPinInput.value = "";
    informationName.textContent = `Student Name: ${obj.fullName}`;
    informationFirstName.textContent = `First Name: ${obj.firstName}`;
    informationLastName.textContent = `Last Name: ${obj.lastName}`;
    informationYear.textContent = `Year Group: ${obj.year}`;
    informationReferals.textContent =
      obj.referals < 0 ? "Referals: 0" : `Referals: ${obj.referals}`;
    currentAccount = target;
    mainContainer.style.opacity = "1";
  }
};

const createStudent = function () {
  let newStudent = new Student(
    addStudentFirstNameInput,
    addStudentLastNameInput,
    addStudentYearInput,
    addStudentPinInput.value,
    addStudentPinReInput.value
  );
  if (pins.includes(addStudentPinInput.value)) {
    document.getElementById("add-student-pin-error").innerText =
      "Pin already in use";
  } else if (addStudentFirstNameInput.value === "") {
    document.getElementById(
      "create-account-fullname-error"
    ).innerText = `No First Name`;
  } else if (addStudentLastNameInput.value === "") {
    document.getElementById("create-account-lastname-error").innerText =
      "No Last Name";
  } else if (addStudentYearInput.value === "") {
    document.getElementById("create-account-year-error").innerText = "No Year";
  } else if (addStudentYearInput.value < 4 || addStudentYearInput.value > 13) {
    document.getElementById("create-account-year-error").innerText =
      "Year must be between 4 and 13";
  } else if (addStudentPinInput.value === "") {
    document.getElementById("add-student-pin-error").innerText = "No Pin";
  } else if (addStudentPinReInput.value === "") {
    document.getElementById("add-student-RePin-error").innerText =
      "Need to check Pin";
  } else if (addStudentPinReInput.value === addStudentPinInput.value) {
    students.push(newStudent);
    pins.push(addStudentPinInput.value);
    let studentsStored = JSON.stringify(students);
    localStorage.setItem(`students`, studentsStored);
    createStudentReset();
  } else {
    document.getElementById("add-student-RePin-error").innerText =
      "Pin Error - Do Not Match";
  }
};
