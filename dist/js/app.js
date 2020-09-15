const toggleOpen = document.querySelector('.icon-container');
const showIcons = document.querySelector('.social-icons');
const toggleClose = document.querySelector('.closeBtn');


toggleOpen.addEventListener('click',()=>{
      showIcons.classList.toggle('fromBottom')
})

toggleClose.addEventListener('click',()=>{
      showIcons.classList.toggle('fromBottom')
})
