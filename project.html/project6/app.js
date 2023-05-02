//Getting Dom Element

 const main = document.getElementById('main');
 const addUserButton = document.getElementById('add-user');
 const doubbleMoneyButton = document.getElementById('double');
 const showmillionairesButton = document.getElementById('show-millionaires');
 const sortButton = document.getElementById('sort');
 const totalButton = document.getElementById('Calculate-total')

//Initializing Data Array

 let datta = [];

 //create initial user
  
 generateRandomUser();
 generateRandomUser();
 generateRandomUser();


 //function to fetch random user form API
// API: Randomuser.me/API 

 async function generateRandomUser(){
 const res = await fetch('https://randomuser.me/api/?results=20');
 const data = await res.json();

 

 const user = data.results[0];
 const newUser = {
    Name: `${user.name.first} ${user.name.last}` ,
    Worth:Math.random()*1000000
 }
 addData(newUser);
 }

 // function to Double the net Worth of Each user

 function doubleWorth(){
   datta = datta.map(item =>{
      return{...item, Worth:item.Worth * 2 }
   });
   updateDoM();
  }
 // Function to Sort user by Richest Users

function sortRichest(){
   datta.sort((a, b) => b.Worth-a.Worth );
   updateDoM();
}
// Function to filters the user and only show millioneris

function showmillionaires(){
   datta = datta.filter(
      item => item.Worth > 1000000
   );
   updateDoM();
}
// Function to Calculate the total Net Worth All USer

function calcuLateTotalNetWorth(){
   const totalWorth = datta.reduce(
   (acc, item) => (acc += item.Worth),0
   );
   const totalNetWortElement = document.createElement('div'); 
   totalNetWortElement.innerHTML = `<h3>Total Net Worth:<strong>${formatCurrency(totalWorth )}</strong></h3>`;
   main.appendChild(totalNetWortElement);

}

 // Add Newly Generated user into the Data Array

 function addData(newUser){
 
 datta.push(newUser) 

 updateDoM();

 }

 //Function to Update the UI With DOM
  
 function updateDoM( inputData = datta){
 
  main.innerHTML = '<h2><strong>Name</strong> NetWorth</h2>'

 inputData.forEach( item =>{
 const element = document.createElement('div');
 
 element.classList.add('name');
 element.innerHTML = `<strong>${item.Name}</strong> ${formatCurrency(item.Worth)}`
 main.appendChild(element);



 });

 };
 
 //Function to Format a number as a currency

 function formatCurrency(num){
 return 'PKR'+ (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
 }

 // Event Lisner
 // 1.Add Uer Event Listner

 addUserButton.addEventListener('click',generateRandomUser);

 // 2.Add Double Money Event Listner

 doubbleMoneyButton.addEventListener('click',doubleWorth);

 //3.Add short Event listner

 sortButton.addEventListener('click',sortRichest);

 //4.Show add millionaires Event Listner

 showmillionairesButton.addEventListener('click',showmillionaires);

// Add Calculate Total Wealth Event listner

totalButton.addEventListener(`click`,calcuLateTotalNetWorth)
 

