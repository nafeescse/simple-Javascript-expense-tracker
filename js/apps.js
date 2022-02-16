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

function getInput(input){
        if(input.value >=  0){
            const Cost =  input.value;
            return Cost;
        }
        else if(input.value <  0 ){
 
            window.alert('Enter a valid amount!!');
        }else if(typeof(input.value) == 'string'){
            window.alert('Enter a valid amount not string!!');
        }
    
}
// debugger;

saveButton.addEventListener('click', function(){
    const incomeTotal = Number(getInput(income));
    const saveInput = Number(getInput(save));
    savingAmount.innerText = (incomeTotal * saveInput) / 100;
   
    console.log(savingAmount.innerText);

})
calcButton.addEventListener('click', function(){
    // console.log(income.value, save.value, balance.innerText);
    const foodCost = Number(getInput(food));
    const rentCost = Number(getInput(rent));
    const clothCost = Number(getInput(cloth));
    const total = foodCost + rentCost + clothCost;
    let totalExpences = expences.innerText;
    expences.innerText = total;
    const incomeTotal = Number(getInput(income));
    balance.innerText = incomeTotal - total;
    if(savingAmount.innerText > balance.innerText){
        window.alert('Savings cant be bigger than balance');
    }else{
    remainingBalance.innerText = balance.innerText - savingAmount.innerText;
    }
    console.log('total', remainingBalance.innerText);
});

