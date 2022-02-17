const income = document.getElementById('income-input');
const food = document.getElementById('food-input');
const rent = document.getElementById('rent-input');
const cloth = document.getElementById('cloth-input');
const calcButton = document.getElementById('calc-button');
const expences = document.getElementById('total-expences');
const balance = document.getElementById('balance');
const save = document.getElementById('save-input');
const saveButton = document.getElementById('save-button');
const savingAmount = document.getElementById('saving-amount');
const remainingBalance = document.getElementById('remaining-balance');
// Function for getting input fields
function getInput(input) {
    if (input.value >= 0) {
        const Cost = input.value;
        return Cost;
    }
    else if (input.value < 0) {
        window.alert('Enter a valid amount!!');
        return 0;

    } else if (typeof (input.value) == 'string') {
        window.alert('Enter a valid amount not string!!');
        return 0;
    }
}
// debugger;
// Event handler for calculate button
calcButton.addEventListener('click', function () {

// Getting value by calling getInput() function
    const foodCost = Number(getInput(food));
    const rentCost = Number(getInput(rent));
    const clothCost = Number(getInput(cloth));
    const total = foodCost + rentCost + clothCost;
    const incomeTotal = Number(getInput(income));
// Error checking as income must be greater than expences
    if (incomeTotal < total) {
        swal({
            title: "Oppps!",
            text: "Expences can't be bigger than income!!",
            icon: "warning",
            button: "Try Again!",
        });
    } else {
        expences.innerText = total;
        balance.innerText = incomeTotal - total;
    }
});
// Event handler for save button
saveButton.addEventListener('click', function () {
    const incomeTotal = Number(getInput(income));
    const saveInput = Number(getInput(save));
    savingAmount.innerText = (incomeTotal * saveInput) / 100;
// Error checking as balance must be greater than Savings
    if ((balance.innerText - savingAmount.innerText) < 0) {
        swal({
            title: "Oppps!",
            text: "Savings can't be bigger than balance!!",
            icon: "warning",
            button: "Okay!",
        });
    } else {
        remainingBalance.innerText = balance.innerText - savingAmount.innerText;
    }
})


