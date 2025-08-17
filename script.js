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


var banner = new banner(".mybanner", {
  loop: true,
  autoplay:{ delay:25000, disableOnInteraction:false },
  pagination:{ el: ".banner-pagination", clickable:true },
  navigation:{ nextEl: ".banner-button-next", prevEl: ".banner-button-prev" }
});