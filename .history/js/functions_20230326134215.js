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
