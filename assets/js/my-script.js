const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const subjectField = document.getElementById("subject");
const msgField = document.getElementById("message");
const submitBtn = document.getElementById("form-submit");

const DATABASE_URL =
  "https://portofolio-contact-data-default-rtdb.firebaseio.com/messages.json";

const msgData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validFormEntry() {
  let validEntries = true;
  if (nameField.value.trim().length === 0) {
    nameField.classList.add("invalid");
    validEntries = false;
  }
  if (emailField.value.trim().length === 0) {
    emailField.classList.add("invalid");
    validEntries = false;
  }
  if (subjectField.value.trim().length === 0) {
    subjectField.classList.add("invalid");
    validEntries = false;
  }
  if (msgField.value.trim().length === 0) {
    msgField.classList.add("invalid");
    validEntries = false;
  }
  return validEntries;
}

submitBtn.addEventListener("click", (e) => submitMessage(e));

nameField.addEventListener("input", () => {
  nameField.classList.remove("invalid");
});

emailField.addEventListener("input", () => {
  emailField.classList.remove("invalid");
});

subjectField.addEventListener("input", () => {
  subjectField.classList.remove("invalid");
});

msgField.addEventListener("input", () => {
  msgField.classList.remove("invalid");
});

function submitMessage(event) {
  event.preventDefault();

  if (validFormEntry()) {
    msgData.name = nameField.value.trim();
    msgData.email = emailField.value.trim();
    msgData.subject = subjectField.value.trim();
    msgData.message = msgField.value.trim();
    let res = postData(DATABASE_URL, msgData);
    //console.log(res);
  }
}

function showSubmitSuccess() {
  submitBtn.innerHTML = "Message sent successfully";
  submitBtn.classList.add("success");
  submitBtn.setAttribute("disabled", "true");
}

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    showSubmitSuccess();
  }
  return response.json();
}
