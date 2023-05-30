let reciever;
let objSender;
let currentAccount;
let message;
let subject;

const sendMessage = function () {
  message = composeMessageText.value;
  subject = composeMessageSubject.value;
  const messageReciever = composeMessageReciever.value;
  reciever = students.find((stu) => stu.fullName === `${messageReciever}`);
  if (reciever === undefined) {
    alert(`Not a valid message reciever`);
  } else if (currentAccount === undefined) {
    alert(`You need to login to send messages`);
  } else {
    reciever.inbox.push(message);
    currentAccount.sent.push(message);
    composeMessageReciever.value = "";
    composeMessageText.value = "";
    composeMessageSubject.value = "";
    alert(`Message Sent`);
    updateInbox(reciever, currentAccount, message);
    console.log(reciever);
  }
};

const updateInbox = function (reciever, currentAccount, message) {
  const html = ` <div id="inbox-line">
  <p>${new Date(Date.now()).toLocaleString()}</p>
  <p>${currentAccount.fullName}</p>
  <p>${reciever.fullName}</p>
  <p>${subject}
  <p>${message}</p>
</div>
  `;
  inboxLine.insertAdjacentHTML("beforebegin", html);
};
