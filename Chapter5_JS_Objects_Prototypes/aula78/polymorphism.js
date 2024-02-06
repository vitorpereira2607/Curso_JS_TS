// Superclass
function Account(agency, account, balance) {
    this.agency = agency;
    this.account = account;
    this.balance = balance;
}

function CurrentAccount(agency, account, balance, limit){
    Account.call(this, agency, account, balance);
    this.limit = limit;
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

CurrentAccount.prototype = Object.create(Account.prototype)
CurrentAccount.prototype.constructor = CurrentAccount

CurrentAccount.prototype.withdraw = function (value) {
    if ((this.balance + this.limit) < value) {
        return `Insufficient Funds: ${this.balance}`
    }

    this.balance -= value;
    this.getBalance();
}

const account1 = new Account(11, 22, 10);
account1.deposit(10);
console.log(account1.getBalance());
console.log(account1.withdraw(10));

const currentAcc = new CurrentAccount(11, 22, 0, 100);
currentAcc.deposit(10);
currentAcc.withdraw(110);
console.log(currentAcc.getBalance())