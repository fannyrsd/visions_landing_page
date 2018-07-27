const ppm = document.querySelector('.ppm_header')
const ttu = document.querySelector('.ttu_header')
const tap = document.querySelector('.tap_header')
const cdw = document.querySelector('.cdw_header')
const ppm2 = document.querySelector('.ppm_header2')
const ttu2 = document.querySelector('.ttu_header2')
const tap2 = document.querySelector('.tap_header2')
const cdw2 = document.querySelector('.cdw_header2')
const fleche = document.querySelector('.scroll_indicator')
const links = document.querySelector('.links')
const burger = document.querySelector('.menu_burger')
const bubu = document.querySelector('.burger')
const links2 = document.querySelectorAll('.links2')
const bar1 = document.querySelector('.bar1')
const bar2 = document.querySelector('.bar2')
const bar3 = document.querySelector('.bar3')
const crystal = document.querySelector('.crystal_magique')


ppm.addEventListener('mouseup', () => {
    TweenLite.to(window, 2, {scrollTo:"#ppm"});
})

ttu.addEventListener('mouseup', () => {
    TweenLite.to(window, 2, {scrollTo:"#ttu"});
})

tap.addEventListener('mouseup', () => {
    TweenLite.to(window, 2, {scrollTo:"#tap"});
})

cdw.addEventListener('mouseup', () => {
    TweenLite.to(window, 2, {scrollTo:"#cdw"});
})

ppm2.addEventListener('mouseup', () => {
    TweenLite.to(window, 2, {scrollTo:"#ppm"});
})

ttu2.addEventListener('mouseup', () => {
    TweenLite.to(window, 2, {scrollTo:"#ttu"});
})

tap2.addEventListener('mouseup', () => {
    TweenLite.to(window, 2, {scrollTo:"#tap"});
})

cdw2.addEventListener('mouseup', () => {
    TweenLite.to(window, 2, {scrollTo:"#cdw"});
})


fleche.addEventListener('mouseup', () => {
    TweenLite.to(window, 2, {scrollTo:"#cv"});
})

burger.addEventListener('mouseup', () => {
    crystal.classList.toggle('burger')
    TweenLite.to(crystal, 2, {display:"block"})
    TweenLite.to(links2, 1, {opacity:"1"})
    // TweenLite.to(bar1, 1, {transform:"rotate(45deg)", top:"50%"})
    // TweenLite.to(bar2, 1, {opacity:"0"})
    // TweenLite.to(bar3, 1, {opacity:"0"})
})
