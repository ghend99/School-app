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
  <p>${obj.objSender.fullName}</p>
  <p>${obj.}</p>
  <p>Can we review tuesdays plans?</p>
</div>
  `;
  inboxLine.insertAdjacentHTML("beforebegin", html);
};
