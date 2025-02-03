window.addEventListener('scroll', function(){
    const header = document.querySelector(".header__cont");
    let logo = document.querySelector(".header__logo");
    let mover_menu = document.querySelector(".header__cont");
    let padingE = this.document.querySelector(".header__cont");


    if (window.scrollY > 80) {
        header.classList.add('header_outline');
        logo.style.display = 'flex';
        mover_menu.style.justifyContent = "space-between"
        padingE.style.padding = '3px';
    }

    else {
        header.classList.remove('header_outline');
        logo.style.display = 'none';
        mover_menu.style.justifyContent = "flex-end"
        padingE.style.padding = '24px 3px';

    }
})

console.log("JS Listo")