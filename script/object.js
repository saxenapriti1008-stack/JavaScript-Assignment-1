// Create the account object

const account = {

  accountName: "John Doe",
  balance: 1000, 

  // Method: display account holder’s name

  getAccountName: function () {
    console.log(`Account holder: ${this.accountName}`);
  },

// Method: display balance

  getBalance: function () {
    console.log(`Current balance: $${this.balance.toFixed(2)}`);
  },

  // Method: deposit money

  deposit: function (amount) {
    if (amount <= 0 || isNaN(amount)) {
      this.accountError("Invalid deposit amount.");
      return;
    }
    this.balance += amount;
    console.log(`Deposited $${amount.toFixed(2)} successfully.`);
    this.getBalance();
  },

// Method: withdraw money

  withdrawal: function (amount) {
    if (amount <= 0 || isNaN(amount)) {
      this.accountError("Invalid withdrawal amount.");
      return;
    }
    if (amount > this.balance) {
      this.accountError("Insufficient funds.");
      return;
    }
    this.balance -= amount;
    console.log(`Withdrew $${amount.toFixed(2)} successfully.`);
    this.getBalance();
  },


  // Method: handle account errors

  accountError: function (message) {
    console.error(` Account Error: ${message}`);
  },

  // EXTRA: exitAccount

  exitAccount: function () {
    console.log("Exiting account... Goodbye!");


    // Option 1: clear the account data

    this.accountName = null;
    this.balance = 0;
  }
};

// --- Example Usage ---

account.getAccountName();
account.getBalance();
account.deposit(500);
account.withdrawal(200);
account.withdrawal(2000); 
account.deposit(-50);     
account.exitAccount();
