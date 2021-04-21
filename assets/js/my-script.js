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

submitBtn.addEventListener("click", (e) => submitMessage(e));

function submitMessage(event) {
  event.preventDefault();
  console.log("Submiting...");
  msgData.name = nameField.value;
  msgData.email = emailField.value;
  msgData.subject = subjectField.value;
  msgData.message = msgField.value;
  let res = postData(DATABASE_URL, msgData);
}

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
