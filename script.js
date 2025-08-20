document.querySelectorAll(".dropdown-btn").forEach(button => {
  button.addEventListener("click", () => {
    const dropdown = button.nextElementSibling;

    // Close all other dropdowns
    document.querySelectorAll(".dropdown").forEach(d => {
      if (d !== dropdown) d.classList.add("hidden");
    });

    // Toggle current dropdown
    dropdown.classList.toggle("hidden");
  });
});

// Optional: close dropdown if click outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".relative")) {
    document.querySelectorAll(".dropdown").forEach(d => d.classList.add("hidden"));
  }
});


const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Dropdown toggle inside mobile menu
  document.querySelectorAll(".dropdown-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const submenu = btn.nextElementSibling;
      submenu.classList.toggle("hidden");
    });
  });



var swiper = new Swiper(".myswiper", {
  loop: true,
  autoplay: { delay: 2500, disableOnInteraction: false },
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});



  $(document).ready(function(){
    $('.slick-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      prevArrow: $('.slick-prev'),
      nextArrow: $('.slick-next'),
      responsive: [
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } }
      ]
    });
  });



