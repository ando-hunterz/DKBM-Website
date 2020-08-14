function showMenu(){
    let mobileNav =  document.getElementsByClassName("nav-mobile-links")[0];
        console.log("clicked");
        mobileNav.classList.toggle('nav-links-active')
        mobileNav.classList.toggle('nav-links-closed')

}

function showDrop(){
    let menuDrop = document.getElementsByClassName("menu-drop")[0];
    menuDrop.style.display="flex"
    menuDrop.style.position = "absolute"
}

function closeDrop(){
    let menuDrop = document.getElementsByClassName("menu-drop")[0];
    menuDrop.style.display="none"
    menuDrop.style.position = "relative"
}