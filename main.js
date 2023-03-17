// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById("go-btn");
let menuEl = document.getElementById("menu");
let outputEl = document.getElementById("output");

// Global variables
let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

// Go Btn - Menu Listener
goBtnEl.addEventListener("click", goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === "display-all") {
    displayContacts();
  } else if (selection === "add") {
    addContact();
  } else if (selection === "remove") {
    removeContact();
  } else if (selection === "display-name") {
    displayByName();
  } else if (selection === "display-country") {
    displayByCountry();
  } else {
    displayByEmail();
  }
}

// MENU FUNCTIONS
function displayContacts() {
  outputEl.innerHTML = "";

  for (let i = 0; i < contacts.length; i++) {
    let contact = contacts[i];

    outputEl.appendChild(getNode(contact));
  }
}

function addContact() {
  let name;
  let email;
  let phoneNumber;
  let country;

  name = prompt("Name:");
  if (name) email = prompt("Email:");
  else return;

  if (email && findByEmail(email) != -1) {
    return (outputEl.innerHTML = `Contact with that email already exists`);
  }

  if (email) phoneNumber = prompt("Phone Number:");
  if (phoneNumber) country = prompt("Country:");
  else return;

  contacts.push({
    index: contacts.length + 1,
    name: name,
    email: email,
    phoneNumber,
    phoneNumber,
    country: country,
  });

  alert(`Added ${name}`);

  save();
}

function removeContact() {
  const email = prompt("Email:");
  const index = findByEmail(email);

  if (index >= 0 && index < contacts.length) {
    const contact = contacts.splice(index, 1)[0];
    outputEl.innerHTML = `Removed ${contact.name}`;
  } else alert("Email not found");

  save();
}

function displayByName() {
  const name = prompt("Name:");

  outputEl.innerHTML = "";

  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];

    if (contact.name.includes(name)) outputEl.appendChild(getNode(contact));
  }
}

function displayByCountry() {
  const country = prompt("Country:");

  outputEl.innerHTML = "";

  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];

    if (contact.country === country) outputEl.appendChild(getNode(contact));
  }
}

function displayByEmail() {
  const email = prompt("Email:");

  outputEl.innerHTML = "";

  const contact = contacts[findByEmail(email)];
  if (contact) outputEl.appendChild(getNode(contact));
}

// Helper Functions
function save() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function getNode(contact) {
  const div = document.createElement("div");

  div.innerHTML = `
      <h3>${contact.index}: ${contact.name}</h1>
      <p>
      ${contact.email}<br>
      ${contact.phoneNumber} (${contact.country})
      </p>
    `;

  div.className = "contact";

  return div;
}

function findByEmail(email) {
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];

    if (contact.email.includes(email)) return i;
  }

  return -1;
}
