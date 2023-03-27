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
  console.log(`CLICK`);
  createStudent();
});

sidebarCreateAccountButton.addEventListener("click", function (e) {
  e.preventDefault();
  createAccountOpen();
});

composeMessageContainer.addEventListener("click", function (e) {
  e.preventDefault();
  composeMessageOpen();
});
