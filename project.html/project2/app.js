const container = document.querySelector('.container');
const Seats = document.querySelectorAll('.row .Seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('Movie');
let ticketPrice = +movieSelect.value;
 populateUI();

 //pull datta form local Storage to bulid ui     
 function populateUI(){
  const selectedSeats =JSON.parse(localStorage.getItem('selectedSeats'));
   if (selectedSeats !== null && selectedSeats.length > 0 ){
 }
 Seats.forEach( (Seat, index) => {
    if(selectedSeats.indexOf(index) > -1){
     Seat.classList.add('selected');
    }
 });
 const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')
 if(selectedMovieIndex !== null){
    movieSelect.selectedIndex = selectedMovieIndex;
 }
 }
 

// function to updat Count

function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .Seat.selected');
    const countselectedSeats = selectedSeats.length;

    const seatsIndex =[...selectedSeats].map(Seat => [...Seats].indexOf(Seat));
       
    localStorage.setItem('SelectedSeats',JSON.stringify(seatsIndex));
    
    count.innerText = countselectedSeats;
    total.innerText = ticketPrice * countselectedSeats;
    
}
//  function to save select movie datta and price
 function setMovieData(movieIndex,moviePrice){
 localStorage.setItem('SelectedMovieIndex',movieIndex)
 localStorage.setItem('SelectedMoviePrice',moviePrice)
 }

     
    





//  Event Listener for change on select movie dropdown

 movieSelect.addEventListener('change', e => {

 ticketPrice = +e.target.value;

//  setMovieData(e.target.value,e.target.value);
setMovieData(e.target.selectedIndex,e.target.value);
 updateSelectedCount();

 })

// Event Listener for click on avaible seats

container.addEventListener('click',(e) => {
    if(e.target.classList.contains('Seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        updateSelectedCount();
        
    }
})
//calculate initial number of seats and to price 

 updateSelectedCount();