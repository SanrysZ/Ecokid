let menu = document.querySelector('.menu')
let menu1 = document.querySelector('.site-nav')

console.log(menu)
console.log(menu1)

menu.addEventListener('click',()=>{
  menu1.classList.toggle("spread")
})

window.addEventListener('click', e=>{
  if(menu1.classList.contains('spread') && e.taget != menu1 && e.target != menu  ){
    menu1.classList.toggle("spread")
  }
})
