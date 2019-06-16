//Select DOM items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

//Set initial State of menu
let showMenu = false;

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close'); // add close class
        menu.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //Set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close'); // remove close class
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        //Set menu state
        showMenu = false;
    }
}

var modal = document.getElementById("myModal");

// kettlebells fetch
var iconCAF = document.getElementById("iconCAF");
var iconCoachingPers = document.getElementById("iconCoachingPers");
var iconGym = document.getElementById("iconGym");
var iconMuscu = document.getElementById("iconMuscu");
var iconPrepaPhy = document.getElementById("iconPrepaPhy");
var iconRunning = document.getElementById("iconRunning");
var iconStretching = document.getElementById("iconStretching");


var modalImg = document.getElementById("imgDisplayed");
var captionText = document.getElementById("caption");

iconCAF.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "img/specialties/CAF.jpg";
  captionText.innerHTML = "WOD CAF";
}

iconCoachingPers.onclick = function(){
    modal.style.display = "block";
    modalImg.src = "img/specialties/coaching_perso.jpg";
    captionText.innerHTML = "Coachin personnalisé";
}

iconGym.onclick = function(){
    modal.style.display = "block";
    modalImg.src = "img/specialties/gymnastique.jpg";
    captionText.innerHTML = "Gymnastique";
}

iconMuscu.onclick = function(){
    modal.style.display = "block";
    modalImg.src = "img/specialties/musculation.jpg";
    captionText.innerHTML = "Musculation";
}

iconPrepaPhy.onclick = function(){
    modal.style.display = "block";
    modalImg.src = "img/specialties/prepa_physique.jpg";
    captionText.innerHTML = "Préparation physique";
}

iconRunning.onclick = function(){
    modal.style.display = "block";
    modalImg.src = "img/specialties/running.jpg";
    captionText.innerHTML = "Running";
}

iconStretching.onclick = function(){
    modal.style.display = "block";
    modalImg.src = "img/specialties/stretching.jpg";
    captionText.innerHTML = "Stretching";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 
