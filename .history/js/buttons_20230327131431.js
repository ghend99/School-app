headerLogin.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(`CLICK`);
  login();
});

headerShowPin.addEventListener("click", function (e) {
  e.preventDefault();
  showPin();
});

sidebarSearchStudentButton.addEventListener("click", function (e) {
  e.preventDefault();
  searchStudent();
});

createAccountModalClose.addEventListener("click", function (e) {
  e.preventDefault();
  createAccountClose();
});

createAccountSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  createStudent();
  createAccountModalSubmit();
});

sidebarCreateAccountButton.addEventListener("click", function (e) {
  e.preventDefault();
  createAccountOpen();
});

sidebarComposeMessageButton.addEventListener("click", function (e) {
  e.preventDefault();
  composeMessageOpen();
});

composeMessageModalClose.addEventListener("click", function (e) {
  e.preventDefault();
  composeMessageClose();
});

sidebarShowTimetable.addEventListener("click", function (e) {
  e.preventDefault();
  inboxClose();
  timetableOpen();
});

sidebarShowInbox.addEventListener("click", function (e) {
  e.preventDefault();
  timetableClose();
  inboxOpen();
});

studentManagementClose.addEventListener("click", function (e) {
  e.preventDefault();
  timetableClose();
  inboxClose();
  studentManagementClose.style.opacity = "0";
});

headerLoginIcon.addEventListener("click", function (e) {
  e.preventDefault();
  loginModalOpen();
});

headerLoginClose.addEventListener("click", function (e) {
  e.preventDefault();
  loginModalClose();
});

loginSubmit.addEventListener("click", function (e) {
  e.preventDefault();
});

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
