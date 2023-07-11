//used to create the 0 and 1 background
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
/* 
 * for creating a mouse effect
 * not being used
 */
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
    setInterval(createBinaryDigit, 10);
    }
    //document.addEventListener('mousemove', createBinaryDigitMouse);
}

startBinaryBackground(true);


//use when wanting to scroll to different parts of page
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


//using for portfolio
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
    if(tabname == "skills"){
        animateSkills();
    }
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


// Function to add the "scrolled" class to the navbar when scrolling down
//needed opacity changes when scrolling
function addScrolledClass() {
    var navbar = document.querySelector('.navbar');
    var nav = document.getElementById('main-nav');
    if (window.scrollY > 5) {
        nav.classList.add('scrolled');

    } else {
    navbar.classList.remove('scrolled')
    }
}

// Add the event listener for the scroll event
window.addEventListener('scroll', addScrolledClass);


//animte the progress bars for skills 
function animateSkills(){
    // Set the width to animate the progress bar
    // Along with time duration in milliseconds
     $("#css").animate({
        width: "60%",
    }, 900);
    $("#html").animate({
        width: "60%",
    }, 900);
    $("#java").animate({
        width: "80%",
    }, 900);
    $("#communication").animate({
        width: "70%",
    }, 900);
    $("#leadership").animate({
        width: "80%",
    }, 900);
    $("#sql").animate({
        width: "55%",
    }, 900);
    $("#git").animate({
        width: "85%",
    }, 900);
    $("#js").animate({
        width: "55%",
    }, 900);
    $("#cpp").animate({
        width: "75%",
    }, 900);
    $("#googleapi").animate({
        width: "45%",
    }, 900);
    $("#vscode").animate({
        width: "65%",
    }, 900);
}
function setProgressZero(){
    $(".progress-bar").width("0%")
}

function showSpinner(){
    document.getElementById("spinner").style.display = "block";
}
function hideSpinner(){
    document.getElementById("spinner").style.display = "none";
}



/* used for canceling spinner after 5 seconds

document.addEventListener('DOMContentLoaded', function() {
    var myDiv = document.querySelector('.spinner-border');
    const msg = document.getElementById("msg")

    // Show the div
    //myDiv.style.display = 'block';

    // Set a timer to check if the div is showing for more than 5 seconds
    var timer = setTimeout(function() {
      if (myDiv.style.display === 'block') {
        msg.innerHTML = "Problem has occurred";
        console.log('The div has been showing for more than 5 seconds.');
        hideSpinner();
      }
    }, 5000);
});
*/