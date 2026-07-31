// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});




// Booking WhatsApp Integration

const bookingForm = document.querySelector("form");


bookingForm.addEventListener("submit", function(e){

    e.preventDefault();


    const name = document.querySelector('input[type="text"]').value;

    const phone = document.querySelector('input[type="tel"]').value;

    const email = document.querySelector('input[type="email"]').value;

    const room = document.querySelector("select").value;

    const message = document.querySelector("textarea").value;



    const whatsappMessage = 
`Hello Lekaya Guest House,

I would like to make a booking inquiry.

Name: ${name}

Phone: ${phone}

Email: ${email}

Room: ${room}

Message: ${message}

Thank you.`;


    const whatsappURL = 
    "https://wa.me/27781177581?text=" 
    + encodeURIComponent(whatsappMessage);



    window.open(whatsappURL,"_blank");


});




// Scroll Reveal Animation


const revealElements = document.querySelectorAll(
".room-card, .features div, .gallery img"
);



function reveal(){

    revealElements.forEach(element=>{


        const position =
        element.getBoundingClientRect().top;


        const screenHeight =
        window.innerHeight;


        if(position < screenHeight - 100){

            element.style.opacity="1";

            element.style.transform="translateY(0)";

        }


    });


}



revealElements.forEach(element=>{

    element.style.opacity="0";

    element.style.transform="translateY(50px)";

    element.style.transition="0.8s";

});



window.addEventListener(
"scroll",
reveal
);
// Mobile Menu Toggle


const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");


if(menuToggle){

menuToggle.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}
