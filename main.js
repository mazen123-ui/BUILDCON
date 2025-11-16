// Make active link
let navLinks = document.querySelectorAll(".nav-link");
let navCollapse = document.getElementById("navbarSupportedContent");
navLinks.forEach((item) => {
  item.addEventListener("click", (e) => {
    navLinks.forEach((item) => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    let bsCollapse = new bootstrap.Collapse(navCollapse, {
      toggle: false,
    });
    bsCollapse.hide();
  });
});
// Show The UP Button ON Scroll
let upBtn = document.querySelector(".btn-up");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 400) {
    upBtn.classList.add("show");
  } else {
    upBtn.classList.remove("show");
  }
});
upBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// animation for the home section
let carouselCaptions = document.querySelectorAll(".carousel-caption");
let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
carouselCaptions.forEach((caption) => observer.observe(caption));
// animation for about section
let aboutLeft = document.querySelector("#about .col-lg-4");
let aboutRight = document.querySelector("#about .col-lg-8");

let observer1 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer1.observe(aboutLeft);
observer1.observe(aboutRight);
// animation for services section
let servicesBoxes = document.querySelectorAll("#services .col-lg-4");
let observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.5,
  }
);
servicesBoxes.forEach((box) => {
  observer2.observe(box);
});
// animation for portfolio section
let portfolioBoxs = document.querySelectorAll("#portfolio .col-lg-4");
let observer3 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.5,
  }
);
portfolioBoxs.forEach((box) => {
  observer3.observe(box);
});
// animation for team section
let teamBoxs = document.querySelectorAll("#team .col-lg-3");
let observer4 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.5,
  }
);
teamBoxs.forEach((box) => {
  observer4.observe(box);
});
// animation for contact section
let contactform = document.querySelector("#contact form");
let observer5 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.5,
  }
);
observer5.observe(contactform);
