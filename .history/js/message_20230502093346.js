let reciever;
let objSender;
let currentAccount;
let message;
let subject;

const sendMessage = function () {
  let studentsAccessed = JSON.parse(localStorage.getItem(`students`));
  message = composeMessageText.value;
  subject = composeMessageSubject.value;
  const messageReciever = composeMessageReciever.value;
  reciever = studentsAccessed.find(
    (stu) => stu.fullName === `${messageReciever}`
  );
  if (reciever === undefined) {
    alert(`Not a valid message reciever`);
  } else {
    reciever.inbox.push(message);
    currentAccount.sent.push(message);
    composeMessageReciever.value = "";
    composeMessageText.value = "";
    composeMessageSubject.value = "";
  }
};

const updateInbox = function () {
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
