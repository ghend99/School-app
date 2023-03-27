headerLogin.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(`CLICK`);
  login();
});

sidebarSearchStudentButton.addEventListener("click", function (e) {
  e.preventDefault();
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
