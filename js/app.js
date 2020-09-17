const toggleOpen = document.querySelector('[data-open]');
const showIcons = document.querySelector('.social-icons');
const toggleClose = document.querySelector('[data-close]');


toggleOpen.addEventListener('click',()=>{
      console.log('open');
      showIcons.classList.toggle('fromBottom')
})

toggleClose.addEventListener('click',()=>{
      console.log('close');

      showIcons.classList.toggle('fromBottom')
})
