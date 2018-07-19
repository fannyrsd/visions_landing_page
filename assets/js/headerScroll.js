const ppm = document.querySelector('.ppm_header')
const ttu = document.querySelector('.ttu_header')
const tap = document.querySelector('.tap_header')
const cdw = document.querySelector('.cdw_header')

ppm.addEventListener('click', () =>  {
    TweenLite.to(window, 2, {scrollTo:"#ppm"});
})

ttu.addEventListener('click', () => {
    TweenLite.to(window, 2, {scrollTo:"#ttu"});
})

tap.addEventListener('click', () => {
    TweenLite.to(window, 2, {scrollTo:"#tap"});
})

cdw.addEventListener('click', () => {
    TweenLite.to(window, 2, {scrollTo:"#cdw"});
})