// Google Maps
// -----------------------
let map;


function initMap(){

    const defaultLocation = {
        lat:14.5995,
        lng:120.9842
    };

    map = new google.maps.Map(document.getElementById("map"),{

        zoom:13,
        center:defaultLocation,

        mapTypeControl:true,
        fullscreenControl:true,
        streetViewControl:true,
        zoomControl:true

    });

    marker = new google.maps.Marker({

        position:defaultLocation,
        map:map

    });

    geocoder = new google.maps.Geocoder();

}




const yearButtons = document.querySelectorAll(".year");
const galleryCards = document.querySelectorAll(".gallery-card");

yearButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class from all buttons
        yearButtons.forEach(btn => btn.classList.remove("active"));

        // Add active class to clicked button
        button.classList.add("active");

        const selectedYear = button.textContent.trim();

        // Show only matching cards
        galleryCards.forEach(card => {

            if (card.dataset.year === selectedYear) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});

// Show 2024 by default
window.addEventListener("load", () => {

    yearButtons[0].click();

});


// ===============================
// MORE DETAILS BUTTON
// ===============================

const detailButtons = document.querySelectorAll(".gallery-card button");

detailButtons.forEach(button => {

    button.addEventListener("click", () => {

        const title = button.parentElement.querySelector("h3").innerText;

        alert("You clicked:\n\n" + title);

        // Later you can replace this with:
        // window.location.href = "event-details.html";

    });

});

// ===============================
// SMOOTH SCROLL (Optional)
// ===============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e) {

        const href = this.getAttribute("href");

        if (href.startsWith("#")) {

            e.preventDefault();

            document.querySelector(href).scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


const monthElement = document.getElementById("month");
const yearElement = document.getElementById("year");
const calendarDays = document.getElementById("calendarDays");

const prevBtn = document.getElementById("prevMonth");
const nextBtn = document.getElementById("nextMonth");

let today = new Date();

let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const months = [

"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"

];

function renderCalendar(){

calendarDays.innerHTML="";

monthElement.textContent=months[currentMonth];

yearElement.textContent=currentYear;

const firstDay=new Date(currentYear,currentMonth,1).getDay();

const lastDate=new Date(currentYear,currentMonth+1,0).getDate();

for(let i=0;i<firstDay;i++){

const empty=document.createElement("div");

empty.classList.add("day","empty");

calendarDays.appendChild(empty);

}

for(let day=1;day<=lastDate;day++){

const dayBox=document.createElement("div");

dayBox.classList.add("day");

dayBox.innerHTML=day;

if(

day===today.getDate() &&

currentMonth===today.getMonth() &&

currentYear===today.getFullYear()

){

dayBox.classList.add("today");

}

calendarDays.appendChild(dayBox);

}

}

prevBtn.addEventListener("click",()=>{

currentMonth--;

if(currentMonth<0){

currentMonth=11;

currentYear--;

}

renderCalendar();

});

nextBtn.addEventListener("click",()=>{

currentMonth++;

if(currentMonth>11){

currentMonth=0;

currentYear++;

}

renderCalendar();

});

renderCalendar();