headerLogin.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(`CLICK`);
  login();
});

createAccountModalClose.addEventListener("click", function (e) {
  e.preventDefault();
  createAccountModalClose();
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
