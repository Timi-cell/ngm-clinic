// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("testimonial");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("testimonial");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

window.addEventListener("scroll", () => {
  document
    .querySelector("header")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

let form = document.getElementById("form");
let formElements = form.elements;
let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstName = formElements.firstname.value.trim();
  const lastName = formElements.lastname.value.trim();
  const email = formElements.email.value.trim();
  const phone = formElements.phone.value.trim();
  const date = formElements.date.value.trim();
  const time = formElements.time.value.trim();
  const reason = formElements.reason.value.trim();

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !date ||
    !time ||
    !reason
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill in all fields to ensure your appointment gets booked!",
      confirmButtonText: "OK",
    });
    return;
  }

  if (regex.test(email)) {
    // If validation passes:
    Swal.fire({
      icon: "success",
      title: "Appointment Booked!",
      html: `Thanks for booking an appointment with us, ${firstName} ${lastName}.<br><br>We'll reach out to you soon!`,
      confirmButtonText: "OK",
    });
    form.reset();
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill in a valid email address!",
      confirmButtonText: "OK",
    });
    return;
  }
});

const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show/hide button on scroll
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// Scroll to top when button clicked
scrollTopBtn.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, Opera
});

const menu = document.getElementById("menu");

/* Open */
let openBtn = document.getElementById("openBtn");
openBtn.addEventListener("click", () => {
  menu.style.height = "100%";
  menu.style.display = "block";
});

/* Close */
let closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", () => {
  menu.style.height = "0%";
  menu.style.display = "none";
});

// Close Mobile Nav after pressing a link
const links = document.querySelectorAll("#menu a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.style.height = "0%";
    menu.style.display = "none";
  });
});

menu.addEventListener("click", () => {
  menu.style.height = "0%";
  menu.style.display = "none";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    menu.style.height = "";
    menu.style.display = "";
  }
});

// // Conditional Statements
// if (temp > 30) {
//   console.log("Hot");
// } else if (temp > 20) {
//   console.log("Warm");
// } else {
//   console.log("Cool");
// }

// // Ternary Operator
// let status = age >= 18 ? "Adult" : "Minor";
