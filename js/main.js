const burgerMenu = document.querySelector('.header__lines');
if(burgerMenu){
    const burgerList = document.querySelector('.header__list');
    burgerMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('lock');
        burgerMenu.classList.toggle('active');
        burgerList.classList.toggle('active');
    })
}

