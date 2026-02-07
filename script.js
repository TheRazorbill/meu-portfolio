document.addEventListener("DOMContentLoaded", () => {
  const dom = {
    header: document.querySelector("header"),
    navLinks: document.querySelectorAll(".navlist a"),
    allSections: document.querySelectorAll("section.portfolio-section"),
    menuIcon: document.querySelector(".menu-icon"),
    navlist: document.querySelector(".navlist"),
    overlay: document.querySelector(".overlay"),
    typewriterText: document.querySelector(".typewriter-text"),
    logo: document.querySelector(".logo"),
    projectsGrid: document.querySelector(".projects-grid"),
    prevButton: document.getElementById("prev-project"),
    nextButton: document.getElementById("next-project"),
  };

  function toggleMenu() {
    dom.navlist.classList.toggle("open");
    dom.menuIcon.classList.toggle("active");
    dom.overlay.classList.toggle("open");
  }

  if (dom.menuIcon && dom.navlist && dom.overlay) {
    dom.menuIcon.addEventListener("click", toggleMenu);
    dom.overlay.addEventListener("click", toggleMenu);
  }

  const textsToType = ["DEVELOPER", "DESIGNER", "PROGRAMMER"];
  const typingSpeed = 150;
  const erasingSpeed = 100;
  const delayBeforeErase = 1500;
  const delayBeforeTypingNext = 500;

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    if (!dom.typewriterText) return;

    const currentText = textsToType[textIndex];
    const textElement = dom.typewriterText;

    if (isDeleting) {
      textElement.innerHTML = currentText.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex > 0) {
        setTimeout(typeEffect, erasingSpeed);
      } else {
        isDeleting = false;
        textIndex = (textIndex + 1) % textsToType.length;
        setTimeout(typeEffect, delayBeforeTypingNext);
      }
    } else {
      textElement.innerHTML = currentText.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex < currentText.length) {
        setTimeout(typeEffect, typingSpeed);
      } else {
        isDeleting = true;
        setTimeout(typeEffect, delayBeforeErase);
      }
    }
  }

  if (dom.typewriterText) {
    setTimeout(typeEffect, delayBeforeTypingNext);
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      dom.header.classList.add("scrolled");
    } else {
      dom.header.classList.remove("scrolled");
    }
  });

  dom.navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }

      if (dom.navlist.classList.contains("open")) {
        toggleMenu();
      }
    });
  });

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { root: null, threshold: 0.2 }
  );

  dom.allSections.forEach((section) => {
    sectionObserver.observe(section);
  });
  
  const homeSectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelector('.container').classList.add("is-visible");
        }
      });
    },
    { root: null, threshold: 0.2 }
  );
  
  const homeSection = document.querySelector('.home');
  if (homeSection) {
    homeSectionObserver.observe(homeSection);
  }

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            dom.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(currentId)) {
                    link.classList.add('active');
                }
            });
        }
    });
  }, {
      root: null,
      rootMargin: '-40% 0px -60% 0px',
      threshold: 0
  });

  document.querySelectorAll('section[id]').forEach(section => {
      navObserver.observe(section);
  });

  if (dom.logo) {
    dom.logo.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  if (dom.projectsGrid) {
    const updateCarouselButtons = () => {
      const scrollLeft = dom.projectsGrid.scrollLeft;
      const scrollWidth = dom.projectsGrid.scrollWidth;
      const clientWidth = dom.projectsGrid.clientWidth;

      dom.prevButton.disabled = scrollLeft <= 0;
      dom.nextButton.disabled = scrollLeft + clientWidth >= scrollWidth - 1;
    };

    const scrollCarousel = (direction) => {
      const firstProject = dom.projectsGrid.querySelector(".project-item");
      if (!firstProject) return;

      const projectWidth = firstProject.offsetWidth;
      const gap = parseInt(window.getComputedStyle(dom.projectsGrid).gap) || 30;
      
      dom.projectsGrid.scrollLeft += (projectWidth + gap) * direction;
    };

    dom.nextButton.addEventListener("click", () => scrollCarousel(1));
    dom.prevButton.addEventListener("click", () => scrollCarousel(-1));
    dom.projectsGrid.addEventListener("scroll", updateCarouselButtons);

    updateCarouselButtons();
  }

  // Skills and Certifications View More Toggle
  const skillsToggle = document.getElementById("skills-toggle");
  const certificationsToggle = document.getElementById("certifications-toggle");

  if (skillsToggle) {
    skillsToggle.addEventListener("click", () => {
      const hiddenSkills = document.querySelectorAll(".skill-item-hidden");
      const isExpanded = skillsToggle.dataset.expanded === "true";
      
      hiddenSkills.forEach(skill => {
        skill.classList.toggle("visible", !isExpanded);
      });
      
      skillsToggle.dataset.expanded = !isExpanded;
      skillsToggle.textContent = isExpanded ? "Saiba Mais" : "Ver Menos";
    });
  }

  if (certificationsToggle) {
    certificationsToggle.addEventListener("click", () => {
      const hiddenCerts = document.querySelectorAll(".timeline-item-hidden");
      const isExpanded = certificationsToggle.dataset.expanded === "true";
      
      hiddenCerts.forEach(cert => {
        cert.classList.toggle("visible", !isExpanded);
      });
      
      certificationsToggle.dataset.expanded = !isExpanded;
      certificationsToggle.textContent = isExpanded ? "Saiba Mais" : "Ver Menos";
    });
  }
});
