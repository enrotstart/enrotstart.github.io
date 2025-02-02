window.addEventListener('scroll', function(){
    const header = document.querySelector(".header");
    
    if (window.scrollY > 30) {
        header.classList.add('header_outline');
    }

    else {
        header.classList.remove('header_outline')
    }
})

console.log("JS Listo")