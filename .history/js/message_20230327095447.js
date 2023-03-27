let date = new Date(Date.now()).toLocaleString();
let objReciever;
let objSender;
let currentAccount;

const sendMessage = function () {
  let studentsAccessed = JSON.parse(localStorage.getItem(`students`));
  message = composeMessageText.value;
  const messageReciever = composeMessageRecieverInput.value;
  const reciever = studentsAccessed.filter(
    (stu) => stu.fullName === `${messageReciever}`
  );
  if (reciever.length === 0) {
    alert(`Not a valid user`);
  } else {
    console.log(reciever);
    objReciever = { ...reciever[0] };
    objSender = { ...currentAccount[0] };
    objReciever.inbox.push(message);
    objSender.sent.push(message);
    composeMessageReciever.value = "";
    composeMessageText.value = "";
    composeMessageSubject.value = "";
  }
};

const updateInbox = function () {
  const html = ` <div id="inbox-line">
  <p>${date}</p>
  <p>${objSender.fullName}</p>
  <p>${objReciever.fullName}</p>
  <p>${message}</p>
</div>
  `;
  inboxLine.insertAdjacentHTML("beforebegin", html);
};

btnComposeMessageSend.addEventListener("click", function (e) {
  e.preventDefault();
  sendMessage();
  updateInbox();
  timetableCloseStyle();
  inboxOpenStyle();
  sidebarOpenStyle();
  composeMessageModal.style.opacity = "0";
  composeMessageModal.style.zIndex = "0";
  container.style.filter = "blur(0px)";
  btnStudentContainerClose.style.opacity = "1";
  btnStudentContainerClose.style.zIndex = "1";
});
