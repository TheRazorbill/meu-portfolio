document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    pt: {
      nav_home: "Início",
      nav_skills: "Habilidades",
      nav_projects: "Projetos",
      nav_certs: "Experiência & Educação",
      nav_contact: "Contato",
      contact_btn: "Fale Comigo",
      welcome: "Seja Bem-Vindo",
      name: "Olá, eu sou o Rahian",
      description: "Desenvolvedor Full-Stack JavaScript e graduando em Ciência da Computação. Contribuidor do Google Summer of Code 2026 na Rocket.Chat, focado em construir aplicações web robustas, performáticas e acessíveis.",
      hire_me: "Contrate-me!",
      download_cv: "Download CV",
      skills_title: "Minhas Habilidades",
      skills_toggle_more: "Saiba Mais",
      skills_toggle_less: "Ver Menos",
      projects_title: "Meus Projetos",
      certs_title: "Experiência & Formação",
      certs_toggle_more: "Saiba Mais",
      certs_toggle_less: "Ver Menos",
      contact_title: "Entre em Contato",
      contact_subtitle: "Tem uma ideia ou um projeto em mente? Vamos conversar. Preencha o formulário ou me encontre nas redes sociais.",
      contact_name: "Seu Nome",
      contact_email: "Seu Email",
      contact_message: "Sua Mensagem",
      contact_submit: "Enviar Mensagem",
      footer_text: "Desenvolvedor Full-Stack JavaScript focado em criar soluções digitais sólidas e eficientes.",
      footer_links: "Links Úteis",
      footer_connect: "Conecte-se Comigo",
      footer_copy: "&copy; 2026 Rahian Santos. Todos os direitos reservados.",
      
      skill_html: "Estruturas semânticas e acessíveis para a web moderna.",
      skill_css: "Estilização responsiva com Flexbox, Grid e variáveis.",
      skill_js: "Comportamentos assíncronos, closures, escopo e manipulação de DOM.",
      skill_ts: "Tipagem estática, interfaces e refatoração de código legado com segurança.",
      skill_react: "Componentização, hooks, gerenciamento de estado e arquiteturas modernas.",
      skill_node: "Backend escalável, APIs RESTful e integração com bancos de dados.",
      skill_api: "Design de APIs seguindo padrões REST, rotas e tratamento de erros.",
      skill_git: "Versionamento semântico, branching, rebase e boas práticas de commits.",
      skill_testing: "Testes unitários e de integração utilizando Jest e testes E2E com Playwright.",
      skill_a11y: "Implementação de padrões de acessibilidade (WCAG) e leitores de tela.",
      skill_ux: "Interfaces intuitivas seguindo guias de design (Design System, Figma).",

      project_gsoc_title: "Room Header Buttons (GSoC)",
      project_gsoc_desc: "Desenvolvimento de um sistema de UI modular e customizável para cabeçalhos de chat no Rocket.Chat usando React, TypeScript, Jest e Playwright.",
      project_rc_core_title: "Rocket.Chat Apps-Engine",
      project_rc_core_desc: "Contribuições no core do Rocket.Chat Apps-Engine, refatorando código para TypeScript, garantindo compatibilidade cross-runtime (Node.js/Deno) e tipagem segura.",
      project_date_editor_title: "GitHub Date Editor",
      project_date_editor_desc: "Ferramenta CLI interativa em TypeScript para gerenciar históricos de commits, normalizar datas e criar ou emendar commits de forma simples.",
      project_intake_title: "Assistente de Triagem com IA",
      project_intake_desc: "Desenvolvimento de assistente automatizado integrando GPT-4o mini e Evolution API para triagem inteligente de leads, reduzindo o tempo de atendimento em 30%.",
      
      gsoc_role: "Contribuidor Google Summer of Code",
      gsoc_details: "Desenvolvimento do projeto 'Room Header Buttons Ordering' utilizando TypeScript, React, Fuselage, Jest e Playwright, com foco em acessibilidade (a11y) e testes automatizados.",
      rc_role: "Contribuidor Open Source",
      rc_details: "Melhoria do core do Apps-Engine da Rocket.Chat, refatoração de código legado para TypeScript com JsonValue recursivo, compatibilidade Node.js/Deno e Yarn Workspaces/Turbo.",
      rs_role: "Especialista em Tecnologia e Design",
      rs_details: "Engenharia de assistente de atendimento automatizado integrado com GPT-4o mini e Evolution API na RS Advocacia, reduzindo em 30% o tempo de triagem manual.",
      edu_cs_role: "Ciência da Computação (Bacharelado)",
      edu_cs_details: "Cruzeiro do Sul Virtual. Foco em Engenharia de Software, Algoritmos, UX Design e Engenharia de Sistemas.",
      edu_backend_role: "Desenvolvimento de Software Backend",
      edu_backend_details: "SENAI/SC (Programa SCTEC). Formação prática voltada a APIs em Node.js, Cloud Computing e práticas de DevOps.",
      timeline_gsoc_date: "Abril 2026 - Presente",
      timeline_rc_date: "Janeiro 2026 - Presente",
      timeline_rs_date: "Janeiro 2025 - Janeiro 2026",
      timeline_cs_date: "Agosto 2025 - Junho 2029",
      timeline_backend_date: "Fevereiro 2026 - Dezembro 2026",

      typewriter: ["DESENVOLVEDOR FULL-STACK", "CONTRIBUIDOR GSOC", "ESPECIALISTA TYPESCRIPT"]
    },
    en: {
      nav_home: "Home",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_certs: "Experience & Education",
      nav_contact: "Contact",
      contact_btn: "Contact Me",
      welcome: "Welcome",
      name: "Hello, I am Rahian",
      description: "Full-Stack JavaScript Developer and Computer Science student. Google Summer of Code 2026 Contributor at Rocket.Chat, focused on building robust, high-performance, and accessible web applications.",
      hire_me: "Hire Me!",
      download_cv: "Download CV",
      skills_title: "My Skills",
      skills_toggle_more: "Show More",
      skills_toggle_less: "Show Less",
      projects_title: "My Projects",
      certs_title: "Experience & Education",
      certs_toggle_more: "Show More",
      certs_toggle_less: "Show Less",
      contact_title: "Get in Touch",
      contact_subtitle: "Have an idea or a project in mind? Let's talk. Fill out the form or find me on social media.",
      contact_name: "Your Name",
      contact_email: "Your Email",
      contact_message: "Your Message",
      contact_submit: "Send Message",
      footer_text: "Full-Stack JavaScript Developer focused on building solid and efficient digital solutions.",
      footer_links: "Useful Links",
      footer_connect: "Connect with Me",
      footer_copy: "&copy; 2026 Rahian Santos. All rights reserved.",
      
      skill_html: "Semantic and accessible structures for the modern web.",
      skill_css: "Responsive styling using Flexbox, Grid, and CSS variables.",
      skill_js: "Asynchronous behavior, closures, scope, and DOM manipulation.",
      skill_ts: "Static typing, interfaces, and safe refactoring of legacy code.",
      skill_react: "Componentization, hooks, state management, and modern patterns.",
      skill_node: "Scalable backend, RESTful APIs, and database integration.",
      skill_api: "API design following REST patterns, routing, and error handling.",
      skill_git: "Semantic versioning, branching, rebasing, and clean commit workflows.",
      skill_testing: "Unit and integration tests with Jest, and E2E testing with Playwright.",
      skill_a11y: "Implementing web accessibility guidelines (WCAG) and screen reader support.",
      skill_ux: "Intuitive interface design matching Figma designs and design systems.",

      project_gsoc_title: "Room Header Buttons (GSoC)",
      project_gsoc_desc: "Developing a modular and customizable UI system for room header buttons in Rocket.Chat using React, TypeScript, Jest, and Playwright.",
      project_rc_core_title: "Rocket.Chat Apps-Engine",
      project_rc_core_desc: "Contributions to the core of Rocket.Chat Apps-Engine, refactoring code to TypeScript, ensuring Node.js/Deno cross-compatibility and strict type safety.",
      project_date_editor_title: "GitHub Date Editor",
      project_date_editor_desc: "An interactive CLI tool written in TypeScript to manage commit histories, normalize dates, and create or amend commits.",
      project_intake_title: "AI Intake Assistant",
      project_intake_desc: "Engineered an automated intake assistant integrating GPT-4o mini and Evolution API at RS Advocacia, reducing manual case handling time for agents by 30%.",
      
      gsoc_role: "Google Summer of Code Contributor",
      gsoc_details: "Developing the 'Room Header Buttons Ordering' project using TypeScript, React, Fuselage, Jest, and Playwright, with a strong focus on accessibility (a11y) and comprehensive testing.",
      rc_role: "Open Source Contributor",
      rc_details: "Enhancing Rocket.Chat's Apps-Engine core, refactoring legacy code to TypeScript using recursive types, Node.js/Deno compatibility, and Turbo monorepo.",
      rs_role: "Technology & Design Specialist",
      rs_details: "Engineered an automated intake assistant integrating GPT-4o mini and Evolution API at RS Advocacia, reducing manual case handling time by 30%.",
      edu_cs_role: "Computer Science (Bachelor's)",
      edu_cs_details: "Cruzeiro do Sul Virtual. Strong foundation in Software Engineering, Algorithms, UX Design, and System Architecture.",
      edu_backend_role: "Backend Software Development",
      edu_backend_details: "SENAI/SC (SCTEC Program). Specialized hands-on training in Node.js APIs, Cloud Infrastructure, and DevOps.",
      timeline_gsoc_date: "April 2026 - Present",
      timeline_rc_date: "January 2026 - Present",
      timeline_rs_date: "January 2025 - January 2026",
      timeline_cs_date: "August 2025 - June 2029",
      timeline_backend_date: "February 2026 - December 2026",

      typewriter: ["FULL-STACK DEVELOPER", "GSOC CONTRIBUTOR", "TYPESCRIPT SPECIALIST"]
    }
  };

  let currentLang = localStorage.getItem("portfolio_lang") || "pt";

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
    skillsToggle: document.getElementById("skills-toggle"),
    certificationsToggle: document.getElementById("certifications-toggle"),
    langBtns: {
      pt: document.getElementById("lang-pt"),
      en: document.getElementById("lang-en")
    }
  };

  function updateTranslations() {
    localStorage.setItem("portfolio_lang", currentLang);

    Object.keys(dom.langBtns).forEach(lang => {
      if (dom.langBtns[lang]) {
        dom.langBtns[lang].classList.toggle("active", lang === currentLang);
      }
    });

    document.documentElement.setAttribute("lang", currentLang === "pt" ? "pt-BR" : "en");

    document.querySelectorAll("[data-i18n]").forEach(elem => {
      const key = elem.getAttribute("data-i18n");
      const translation = translations[currentLang][key];
      if (translation) {
        const icon = elem.querySelector("i");
        if (icon) {
          elem.innerHTML = translation + " " + icon.outerHTML;
        } else {
          elem.textContent = translation;
        }
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(elem => {
      const key = elem.getAttribute("data-i18n-placeholder");
      const translation = translations[currentLang][key];
      if (translation) {
        elem.setAttribute("placeholder", translation);
      }
    });

    if (dom.skillsToggle) {
      const isExpanded = dom.skillsToggle.dataset.expanded === "true";
      dom.skillsToggle.textContent = isExpanded 
        ? translations[currentLang].skills_toggle_less 
        : translations[currentLang].skills_toggle_more;
    }
    if (dom.certificationsToggle) {
      const isExpanded = dom.certificationsToggle.dataset.expanded === "true";
      dom.certificationsToggle.textContent = isExpanded 
        ? translations[currentLang].certs_toggle_less 
        : translations[currentLang].certs_toggle_more;
    }

    charIndex = 0;
    isDeleting = false;
  }

  if (dom.langBtns.pt && dom.langBtns.en) {
    dom.langBtns.pt.addEventListener("click", () => {
      if (currentLang !== "pt") {
        currentLang = "pt";
        updateTranslations();
      }
    });
    dom.langBtns.en.addEventListener("click", () => {
      if (currentLang !== "en") {
        currentLang = "en";
        updateTranslations();
      }
    });
  }

  function toggleMenu() {
    dom.navlist.classList.toggle("open");
    dom.menuIcon.classList.toggle("active");
    dom.overlay.classList.toggle("open");
  }

  if (dom.menuIcon && dom.navlist && dom.overlay) {
    dom.menuIcon.addEventListener("click", toggleMenu);
    dom.overlay.addEventListener("click", toggleMenu);
  }

  const typingSpeed = 100;
  const erasingSpeed = 60;
  const delayBeforeErase = 2000;
  const delayBeforeTypingNext = 600;

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    if (!dom.typewriterText) return;

    const textsToType = translations[currentLang].typewriter;
    const currentText = textsToType[textIndex % textsToType.length];
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
    { root: null, threshold: 0.1 }
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
    { root: null, threshold: 0.1 }
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

      if (dom.prevButton && dom.nextButton) {
        dom.prevButton.disabled = scrollLeft <= 0;
        dom.nextButton.disabled = scrollLeft + clientWidth >= scrollWidth - 1;
      }
    };

    const scrollCarousel = (direction) => {
      const firstProject = dom.projectsGrid.querySelector(".project-item");
      if (!firstProject) return;

      const projectWidth = firstProject.offsetWidth;
      const gap = parseInt(window.getComputedStyle(dom.projectsGrid).gap) || 30;
      
      dom.projectsGrid.scrollLeft += (projectWidth + gap) * direction;
    };

    if (dom.nextButton && dom.prevButton) {
      dom.nextButton.addEventListener("click", () => scrollCarousel(1));
      dom.prevButton.addEventListener("click", () => scrollCarousel(-1));
      dom.projectsGrid.addEventListener("scroll", updateCarouselButtons);
      updateCarouselButtons();
      window.addEventListener("resize", updateCarouselButtons);
    }
  }

  if (dom.skillsToggle) {
    dom.skillsToggle.addEventListener("click", () => {
      const hiddenSkills = document.querySelectorAll(".skill-item-hidden");
      const isExpanded = dom.skillsToggle.dataset.expanded === "true";
      
      hiddenSkills.forEach(skill => {
        skill.classList.toggle("visible", !isExpanded);
      });
      
      dom.skillsToggle.dataset.expanded = !isExpanded;
      dom.skillsToggle.textContent = isExpanded 
        ? translations[currentLang].skills_toggle_more 
        : translations[currentLang].skills_toggle_less;
    });
  }

  if (dom.certificationsToggle) {
    dom.certificationsToggle.addEventListener("click", () => {
      const hiddenCerts = document.querySelectorAll(".timeline-item-hidden");
      const isExpanded = dom.certificationsToggle.dataset.expanded === "true";
      
      hiddenCerts.forEach(cert => {
        cert.classList.toggle("visible", !isExpanded);
      });
      
      dom.certificationsToggle.dataset.expanded = !isExpanded;
      dom.certificationsToggle.textContent = isExpanded 
        ? translations[currentLang].certs_toggle_more 
        : translations[currentLang].certs_toggle_less;
    });
  }

  updateTranslations();
});
