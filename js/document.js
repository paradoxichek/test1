 let about = document.querySelector('#modal') 
 let bg = document.querySelector('.bg_modal')
 let modal = document.querySelector('.modal')
 let close = document.querySelector('.close')
 let arrows = document.querySelectorAll('#arrow');
 let accord = document.querySelectorAll('.accordion-header')
  
 about.onclick = () => { 
bg.style.display = 'block'
modal.style.top = '50%'
 }
 
 bg.onclick = () => {
    modal.style.top = '-500%'
    bg.style.display = 'none'
 }
 
 close.onclick = () => {
    modal.style.top = '-500%'
    bg.style.display = 'none'
 }

accord.forEach((header, index) => {
    header.onclick = () => {
        header.parentNode.classList.toggle('active');
        arrows[index].classList.toggle('rotate');
    }
  });
  
  