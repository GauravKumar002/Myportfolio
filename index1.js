//=============================toggle icon navbar===============================//

let menuIcon =document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() => {
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}

//cv Download

// function downloadcv(){
//   const link=document.createElement("a");
//   link.href="Gaurav.pdf";
//   link.download="Gaurav.pdf";
//   link.click();
//}

//===============toggle icon navbar===============================//

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[herf*=' + id + ']').classList.add('active');
            });
        };

    });
    //===============Sticky navbar===============================//

    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);

    //===============toggle icon navbar===============================//

    menuIcon.classList.remove('fa-mark');
    navbar.classList.remove('active');
};

//==============  Scroll reveal===============================//
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,

 });
 ScrollReveal().reveal('.home-content, heading', { original: 'top'});
 ScrollReveal().reveal('home-img, .services-container, .portfolio-box, .contact from', { origin: 'buttom'})
 ScrollReveal().reveal('.home-contact h1, .about-img',{origin: 'left'});
 ScrollReveal().reveal('.home-contact p, .about-content',{origin: 'right'});

 //============================typed js=======================//

 const typed = new Typed('.multiple-text', {
    strings: ['Full-Stack Devloper','Web Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
 });

 //============================Contact====================//


 (function () {
    emailjs.init("https://formspree.io/f/xeelqgab");
  })();
  
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_h3xrahe",
          "TEMPLATE_ID_YAHAN",
          this
        )
        .then(
          function () {
            alert("Message sent successfully!");
          },
          function (error) {
            alert("Failed to send message");
            console.log(error);
          }
        );
    });

  var form = document.getElementById("my-form");
  
  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form"
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "Oops! There was a problem submitting your form"
    });
  }
  form.addEventListener("submit", handleSubmit)
