const ppm = document.querySelector('.ppm_header')
const ttu = document.querySelector('.ttu_header')
const tap = document.querySelector('.tap_header')
const cdw = document.querySelector('.cdw_header')
const fleche = document.querySelector('.scroll_indicator')
const burger = document.querySelector('.burger')
const links = document.querySelector('.links')

ppm.addEventListener('click', () => {
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

fleche.addEventListener('click', () => {
    TweenLite.to(window, 2, {scrollTo:"#cv"});
})

burger.addEventListener('click', () => {
    burger.classList.toggle('change')

})





x = document.getElementsByClassName('menu-icon');
x[0].addEventListener('click', function() {
    toggleMenu();
    toggleMenuLink();
    toggleX();
});

function toggleMenu () {
    document.getElementById('upper-slide').classList.toggle('upper-slide-right');
    document.getElementById('slide').classList.toggle('slide-right');		
}

function toggleMenuLink() {
    document.getElementById("links").classList.toggle('slide-in');
}

function toggleX () {
    x[0].classList.toggle('hover');
}