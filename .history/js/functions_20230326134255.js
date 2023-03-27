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
