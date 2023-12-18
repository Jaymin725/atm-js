var balance = null;

// Login
function login() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  if (username.value == "Jaymin725" && password.value == "atm@123") {
    const atmModal = new bootstrap.Modal('#atm');
    atmModal.show();
  } else {
    alert("Invalid username or password!");
  }
}

// Set Balance
function setBalance(bal) {
  const balanceInput = document.querySelectorAll("#balance-input");
  console.log(balanceInput);

  if (balance == null) {
    balance = 0;
  }

  if (bal != null) {
    balance = bal;
  }

  for (let i = 0; i < balanceInput.length; i++) {
    balanceInput[i].value = balance;
    console.log(balanceInput[i], balanceInput[i].value);
  }
}

// Withdraw
function withdraw() {
  const withdrawInput = document.getElementById("withdraw-input");
  let withdrawAmount = Number(withdrawInput.value);

  if (withdrawAmount > 0) {
    if (withdrawAmount > balance) {
      alert("Withdraw amount is greater than Balance!");
    } else {
      balance -= withdrawAmount;
    }
  } else {
    alert("Invalid withdraw amount!");
  }

  setBalance(balance);
}

// Diposit
function diposit() {
  const dipositInput = document.getElementById("diposit-input");
  let dipositAmount = Number(dipositInput.value);

  if (dipositAmount > 0) {
    balance += dipositAmount;
  } else {
    alert("Invalid diposit amount!");
  }

  setBalance(balance);
}