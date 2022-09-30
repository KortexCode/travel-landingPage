//HTML element
const html = document.querySelector("html");
//Navbar search elements
const magnifyingGlass = document.getElementById("nav-magnifying-glass");
const navSearch = document.getElementById("nav-search");
//Main - Dark mode button
const navMoonButton = document.getElementById("nav-moon-button");
navMoonButton.addEventListener("click", activedDarkMode);
//Nav - Dark mode button
const mainMoonButton = document.getElementById("main-moon-button");
mainMoonButton.addEventListener("click", activedDarkMode);


magnifyingGlass.addEventListener("mouseover", openSearch);
navSearch.addEventListener("mouseout", closeSearch);

function openSearch(){
    navSearch.classList.toggle("search--enabled");
    magnifyingGlass.classList.toggle("magnifyingGlass--disable");
}

function closeSearch(){
    navSearch.classList.toggle("search--enabled");
    magnifyingGlass.classList.toggle("magnifyingGlass--disable");
}
//Dark Mode
function activedDarkMode(){
    html.classList.toggle("dark");
    if(mainMoonButton.classList.contains("text-primary"))
        mainMoonButton.classList.replace("text-primary", "text-white");
    
    else
        mainMoonButton.classList.replace("text-white", "text-primary");
      
}