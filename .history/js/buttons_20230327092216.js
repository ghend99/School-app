headerLogin.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(`CLICK`);
  login();
});

createAccountSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(`CLICK`);
  createStudent();
});

sidebarLinkButton.addEventListener("click", function (e) {
  e.preventDefault();
  createAccountOpen();
});
