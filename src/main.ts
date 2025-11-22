document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      mobileBtn.classList.toggle("active");
    });
  }

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener(
      "click",
      function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const href = this.getAttribute("href");
        if (!href) return;

        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
          // Close mobile menu if open
          if (navLinks && navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
            if (mobileBtn) mobileBtn.classList.remove("active");
          }
        }
      }
    );
  });

  // Intersection Observer for Scroll Animations
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(
      ".about-card, .institution-card, .section-title, .feature-list li"
    )
    .forEach((el) => {
      el.classList.add("fade-in-scroll");
      observer.observe(el);
    });

  // Navbar Scroll Effect and Back to Top
  const navbar = document.querySelector(".navbar");
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    if (backToTopBtn) {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
