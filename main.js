// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById("go-btn");
let menuEl = document.getElementById("menu");
let outputEl = document.getElementById("output");

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
  }
}

// MENU FUNCTIONS
function displayContacts() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  console.log(tasks);

  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];

    let string = `<div>
    <h1>${task.index + 1}: ${task.name}</h1>
    <p>
    ${task.email}\n
    ${task.phoneNumber} (${task.country})
    </p>
    </div>`;

    outputEl.append(string);
  }
}

function addContact() {
  console.log("Add Contact");
}

function removeContact() {
  console.log("Remove Contact");
}

function displayByName() {
  console.log("Display by Name");
}

function displayByCountry() {
  console.log("Display by Country");
}
