
let header_burger = document.querySelector('.header_burger');


let menu = document.querySelector('.header_menu');


header_burger.addEventListener('click', function(){
 

    if(menu.classList.contains('active')) {
        menu.classList.remove('active');
        header_burger.classList.remove('clicked');
    }
    else {
        menu.classList.add('active');
        header_burger.classList.add('clicked');
    }
})


window.addEventListener('resize', function() {
    if(this.window.screen.width > 767) {
        menu.classList.remove('active');
        header_burger.classList.remove('clicked');
    }
})