window.addEventListener('scroll', function(){
    const header = document.querySelector(".header__cont");
    let logo = document.querySelector(".header__logo");
    let mover_menu = document.querySelector(".header__cont");


    if (window.scrollY > 80) {
        header.classList.add('header_outline');
        logo.style.display = 'flex';
        mover_menu.style.justifyContent = "space-between"
    }

    else {
        header.classList.remove('header_outline');
        logo.style.display = 'none';
        mover_menu.style.justifyContent = "flex-end"

    }
})

console.log("JS Listo")