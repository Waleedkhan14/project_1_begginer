// Get Dom Element
const toggle =document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

// Add Event listneres 
//1. Toggle the Nav
toggle.addEventListener('click',() =>
 document.body.classList.toggle('show-nav')
);

// 2.Show The Modal
open.addEventListener('click', () =>
 modal.classList.add('show-modal')
 );

 // 3. Close The Modal

 close.addEventListener('click',() =>
 modal.classList.remove('show-modal')
 );
 