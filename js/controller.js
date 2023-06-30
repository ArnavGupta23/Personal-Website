function createBinaryDigit() {
    const digit = document.createElement('span');
    digit.className = 'binary-digit';
    digit.textContent = Math.round(Math.random());
    digit.style.left = Math.random() * 100 + '%';
    digit.style.top = Math.random() * 97 + '%';
    document.getElementById('binary-background').appendChild(digit);
    setTimeout(() => {
        digit.remove();
    }, 20000);
}
function createBinaryDigitMouse(event) {
    const digit = document.createElement('span');
    digit.style.color = "#54b3d6"
    digit.className = 'binary-digit';
    digit.textContent = Math.round(Math.random());
    digit.style.left = event.clientX + 'px';
    digit.style.top = event.clientY + 'px';
    document.getElementById('binary-background').appendChild(digit);
    setTimeout(() => {
        digit.remove();
    }, 400);
}

function startBinaryBackground(start) {
    if(start){
    setInterval(createBinaryDigit, 20);
    }
    //document.addEventListener('mousemove', createBinaryDigitMouse);
}

startBinaryBackground(true);


//use when wanting to scroll to different parts of page
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Function to launch the toast
function launchToast() {
    // Select the toast element and create a new Bootstrap Toast instance
    var toastElement = document.getElementById('liveToast');
    var toast = new bootstrap.Toast(toastElement);

    // Show the toast
    toast.show();
}
// Set a timeout of 1 minute (60000 milliseconds) to launch the toast
setTimeout(launchToast, 60000);


//navbar scroll support
// Get the navbar element
//var navbar = document.getElementById('main-nav');


// Function to add the "scrolled" class to the navbar when scrolling down
function addScrolledClass() {
    var navbar = document.querySelector('.navbar');
var nav = document.getElementById('main-nav');
  if (window.scrollY > 5) {
    nav.classList.add('scrolled');

  } else {
   navbar.classList.remove('scrolled')
  }
}

function addScrolledClass2() {
    navbar.classList.add('scrolled');
}

// Add the event listener for the scroll event
window.addEventListener('scroll', addScrolledClass);



const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container ul li');

window.addEventListener('scroll', ()=>{
    let current = '';

    sections.forEach(section =>{
        const sectionTop = section.offsetTop;
        console.log("hh3llo");
        console.log(sectionTop);
    })
})
