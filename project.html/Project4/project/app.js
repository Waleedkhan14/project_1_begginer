const currOnePicker =document.getElementById('currency-one');
const currTwoPicker =document.getElementById('currency-Two');
const currOneAmount =document.getElementById('amount-one');
const currTwoAmount =document.getElementById('amount-two');
const flipButton= document.getElementById('flip');
const rate = document.getElementById('rate');
 
// fetch Exchange rate form 3 party Api and update Dom
// www.exchange rate Api.com
function calculate(){
    const currencyOneCode = currOnePicker.value;
    const currencyTwoCode = currTwoPicker.value;
     fetch (`https://v6.exchangerate-api.com/v6/9f346a8500d34384b84aeae7/latest/${currencyOneCode}`)
     .then(res => res.json())
     .then(datta =>{
      //  Get The ExchangeRates form Api Datta

     const exchangeRates = datta.conversion_rates['PKR'];

    //  console.log(exchangeRates);
     //display to conversion rate

     rate.innerText = `1 ${currencyOneCode}= ${exchangeRates} ${currencyTwoCode}`;

     //apply conversion update amount of currency two


     currTwoAmount.value = (currOneAmount.value * exchangeRates).toFixed(2);

     });
}
//Flip function for the flip button to reverse currency exchange 
function flip(){
    const temp = currOnePicker.value;
 currOnePicker.value = currTwoPicker.value;
 currTwoPicker.value =temp ;
 calculate();
};
// Event listeners 
currOnePicker.addEventListener('change',calculate);
currTwoPicker.addEventListener('change',calculate);
currOneAmount.addEventListener('input',calculate);
currTwoAmount.addEventListener('input',calculate);
flipButton.addEventListener('click',flip);
calculate();