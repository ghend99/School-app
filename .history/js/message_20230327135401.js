let date = new Date(Date.now()).toLocaleString();
let objReciever;
let objSender;
let currentAccount;

const sendMessage = function () {
  let studentsAccessed = JSON.parse(localStorage.getItem(`students`));
  message = composeMessageText.value;
  const messageReciever = composeMessageReciever.value;
  const reciever = studentsAccessed.filter(
    (stu) => stu.fullName === `${messageReciever}`
  );
  console.log(messageReciever);
  console.log(studentsAccessed);
  console.log(reciever);
  if (reciever.length === 0) {
    alert(`Not a valid user`);
  } else {
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
