function changeBg(){
    var navbar = document.getElementById('Navbar');
    var scrollValue = window.scrollY;
    if(scrollValue < 100){
        navbar.classList.remove('nav-bg-color');

    }else{
        navbar.classList.add('nav-bg-color');
    }
}

window.addEventListener('scroll', changeBg)



let typed = new Typed('.auto-input',{
    strings: ['Apps', 'Games', 'Mods', 'APKs', 'Softwares'],
    typeSpeed: 50,
    backSpeed: 10,
    backDelay: 2000,
    loop: true,
})