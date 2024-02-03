// Superclass
function Account(agency, account, balance) {
    this.agency = agency;
    this.account = account;
    this.balance = balance;
}

Account.prototype.withdraw = function (value) {
    if (this.balance < value) {
        return `Insufficient Funds: ${this.balance}`
    }

    this.balance -= value;
    return `Withdrawal successful. New balance: ${this.balance}`
}

Account.prototype.deposit = function (value) {
    this.balance += value;
    this.getBalance();
}
Account.prototype.getBalance = function () {
    return `Ag/c: ${this.agency}/${this.account}
Balance: ${this.balance}`
}

const account1 = new Account(11, 22, 10);
account1.deposit(10);
console.log(account1.getBalance());
console.log(account1.withdraw(10));

function currentAccount(agency, account, balance, limit){
    Account.call(this, agency, account, balance)
    this.limit = limit
}

currentAccount.prototype = Object.create(Account.prototype)
currentAccount.prototype.constructor = currentAccount

currentAccount.prototype.withdraw = function (value) {
    if ((this.balance) < value) {
        return `Insufficient Funds: ${this.balance}`
    }

    this.balance -= value;
    return `Withdrawal successful. New balance: ${this.balance}`
}

