window.addEventListener('scroll', function(){
    const header = document.getElementById("header");
    
    if (window.scrollY > 74) {
        header.classList.add('header_outline');
    }

    else {
        header.classList.remove('header_outline')
    }
})

console.log("JS Listo")