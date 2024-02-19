//using if the screen gets smaller
function SmallScreen(){
    if(window.innerWidth < 700){
        //console.log('Small Screen');
        $('#header-aboutbtn').addClass('justify-content-center');
        startBinaryBackground(false);
    }
    else{
    $('#header-aboutbtn').removeClass('justify-content-center');
    startBinaryBackground(true);
    }
}


window.addEventListener('resize', SmallScreen);

function createBinaryDigitOLD() {
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

//used to create the 0 and 1 background
//more efficient version
function createBinaryDigit() {
    const digit = document.createElement('span');
    digit.className = 'binary-digit';
    digit.textContent = Math.random() < 0.5 ? '0' : '1';
    digit.style.left = `${Math.random() * 100}%`;
    digit.style.top = `${Math.random() * 98}%`;
    document.getElementById('binary-background').appendChild(digit);
    setTimeout(() => {
        digit.remove();
    }, 10000);
}

function startBinaryBackground(start) {
    if(start){
    setInterval(createBinaryDigit, 17);
    }
    //document.addEventListener('mousemove', createBinaryDigitMouse);
}


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
setTimeout(launchToast, 45000);


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
        width: "70%",
    }, 900);
    $("#html").animate({
        width: "80%",
    }, 900);
    $("#java").animate({
        width: "90%",
    }, 900);
    $("#protocols").animate({
        width: "40%",
    }, 900);
    $("#leadership").animate({
        width: "90%",
    }, 900);
    $("#sql").animate({
        width: "65%",
    }, 900);
    $("#git").animate({
        width: "85%",
    }, 900);
    $("#js").animate({
        width: "65%",
    }, 900);
    $("#cpp").animate({
        width: "75%",
    }, 900);
    $("#googleapi").animate({
        width: "50%",
    }, 900);
    $("#vscode").animate({
        width: "75%",
    }, 900);
    $("#aws").animate({
        width: "40%",
    }, 900);
    $("#azure").animate({
        width: "55%",
    }, 900);
    $("#docker").animate({
        width: "45%",
    }, 900);
    $("#node").animate({
        width: "63%",
    }, 900);
    $("#jquery").animate({
        width: "54%",
    }, 900);
    $("#express").animate({
        width: "53%",
    }, 900);
    $("#ejs").animate({
        width: "47%",
    }, 900);
    $("#react").animate({
        width: "77%",
    }, 900);
    $("#bootstrap").animate({
        width: "75%",
    }, 900);
    $("#websockets").animate({
        width: "69%",
    }, 900);
    $("#openAI").animate({
        width: "67%",
    }, 900);
    $("#python").animate({
        width: "77%",
    }, 900);
    $("#angular").animate({
        width: "67%",
    }, 900);
}
function setProgressZero(){
    $(".progress-bar").width("0%")
}

function showSpinner(){
    msg.innerHTML = "";
    document.getElementById("spinner").style.display = "block";
    spinnerChecker();
}
function hideSpinner(){
    document.getElementById("spinner").style.display = "none";
}



// used for canceling spinner after 5 seconds
function spinnerChecker(){
    var myDiv = document.querySelector('.spinner-border');
    const msg = document.getElementById("msg")
    //console.log("inside the function");
    var timer = setTimeout(function() {
        if (myDiv.style.display === 'block') {
            msg.style.color = "#bf1d17";
            msg.innerHTML = "Problem has occurred";
          //console.log('more than 5 seconds');
            hideSpinner();
        }
    }, 5000);
}
