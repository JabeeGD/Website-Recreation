// Highlight active navigation

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link=>{

link.addEventListener("click",function(){

navLinks.forEach(item=>item.classList.remove("active"));

this.classList.add("active");

});

});

// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

const items = document.querySelectorAll(".timeline-item");
const cards = document.querySelectorAll(".history-card");

items.forEach((item,index)=>{

    item.addEventListener("click",()=>{

        items.forEach(i=>i.classList.remove("active"));
        cards.forEach(c=>c.classList.remove("active"));

        item.classList.add("active");
        cards[index].classList.add("active");

    });

});