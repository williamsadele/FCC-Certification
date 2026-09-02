const budgetBalance = document.getElementById("balance");
const moneyPlus = document.getElementById("money-plus");
const moneyMinus = document.getElementById("money-minus");
const transactionHistory = document.getElementById("list");
const textInput = document.getElementById("text");
const amountInput = document.getElementById("amount");
const form = document.getElementById("form");

let transactions = [];

const addTransaction = () => {
    transactions.push = {text : textInput.value.trim(), amount : Number(amountInput.value.trim())}
}