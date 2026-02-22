let bill = document.getElementById("bill");
let tip = document.getElementById("tip");
let Btn = document.getElementById("calculate")

Btn.addEventListener("click", function() {
    let billAmount = bill.value;
    let tipPercentage = tip.value;
    let tipAmount = billAmount * (tipPercentage / 100);
    let totalAmount = parseFloat(billAmount) + parseFloat(tipAmount);
    document.getElementById("total").innerText = "Total Amount: " + totalAmount.toFixed(2);
})