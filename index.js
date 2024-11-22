document.addEventListener("DOMContentLoaded", function() {
    const backToTopBtn = document.querySelector(".back-to-top");
  
    window.addEventListener("scroll", function() {
      if (window.scrollY > 200) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });
  
    backToTopBtn.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    const ctaButtons = document.querySelectorAll(".cta-btn");
    ctaButtons.forEach(function(btn) {
      btn.addEventListener("mouseover", function() {
        btn.style.backgroundColor = "#007f6a";
      });
      btn.addEventListener("mouseout", function() {
        btn.style.backgroundColor = "#00bfae";
      });
    });
  });
  