let date = new Date(Date.now()).toLocaleString();
let objReciever;
let objSender;

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
  const html = ` <div class="inbox-line">
    <p class="inbox-row-date">${date}</p>
    <p class="inbox-row-sender">${objSender.fullName}</p>
    <p class="inbox-row-reciever">${objReciever.fullName}</p>
    <p class="inbox-row-message">${message}</p>
</div>
  `;
  inboxLine.insertAdjacentHTML("beforebegin", html);
};
