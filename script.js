document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    pt: {
      section_profile: "Perfil de Engenharia",
      profile_role_label: "Função Principal",
      profile_base_label: "Base Operacional",
      profile_base_val: "Brasil / Remoto",
      profile_status_label: "Status de Contratos",
      status_active: "Ativo & Disponível",
      lang_label: "Idioma / Language",
      sidebar_contact_btn: "Fale Comigo",
      download_cv: "Download CV",
      workspace_title: "RAHIAN@WORKSPACE:~$",
      
      timeline_title: "Experiência & Formação",
      timeline_count: "Registros: 5 / 5",
      badge_gsoc: "GSoC '26",
      badge_oss: "Open Source",
      badge_freelance: "Freelance",
      badge_edu: "Universidade",
      badge_tech: "Formação Tech",

      timeline_gsoc_date: "Abril 2026 - Presente",
      timeline_rc_date: "Janeiro 2026 - Presente",
      timeline_rs_date: "Janeiro 2025 - Janeiro 2026",
      timeline_cs_date: "Agosto 2025 - Junho 2029",
      timeline_backend_date: "Fevereiro 2026 - Dezembro 2026",

      gsoc_role: "Contribuidor Google Summer of Code",
      gsoc_details: "Desenvolvimento do projeto 'Room Header Buttons Ordering' utilizando TypeScript, React, Fuselage, Jest e Playwright, com foco em acessibilidade (a11y) e testes.",
      rc_role: "Contribuidor Open Source",
      rc_details: "Melhoria do core do Apps-Engine da Rocket.Chat, refatorando código legado para TypeScript com JsonValue recursivo, compatibilidade Node.js/Deno e Yarn/Turbo.",
      rs_role: "Especialista em Tecnologia e Design",
      rs_details: "Engenharia de assistente de atendimento automatizado integrado com GPT-4o mini e Evolution API na RS Advocacia, reduzindo em 30% o tempo de triagem manual.",
      edu_cs_role: "Ciência da Computação (Bacharelado)",
      edu_cs_details: "Cruzeiro do Sul Virtual. Foco em Engenharia de Software, Algoritmos, UX Design e Engenharia de Sistemas.",
      edu_backend_role: "Desenvolvimento de Software Backend",
      edu_backend_details: "SENAI/SC (Programa SCTEC). Formação prática voltada a APIs em Node.js, Cloud Computing e práticas de DevOps.",

      tab_skills: "Habilidades",
      tab_projects: "Projetos",
      tab_dossier: "Dossiê de Carreira",
      tab_contact: "Contato",

      skills_cat_core: "Linguagens Core",
      skills_cat_libs: "Frameworks & Libs",
      skills_cat_testing: "Testes & Ferramentas",
      skills_cat_method: "Metodologias & UX",

      project_gsoc_title: "Room Header Buttons (GSoC)",
      project_gsoc_desc: "Desenvolvimento de um sistema de UI modular e customizável para cabeçalhos de chat no Rocket.Chat usando React, TypeScript, Jest e Playwright.",
      project_rc_core_title: "Rocket.Chat Apps-Engine",
      project_rc_core_desc: "Contribuições no core do Rocket.Chat Apps-Engine, refatorando código para TypeScript, garantindo compatibilidade cross-runtime (Node.js/Deno) e tipagem segura.",
      project_date_editor_title: "GitHub Date Editor",
      project_date_editor_desc: "Ferramenta CLI interativa em TypeScript para gerenciar históricos de commits, normalizar datas e criar ou emendar commits de forma simples.",
      project_intake_title: "Assistente de Triagem com IA",
      project_intake_desc: "Desenvolvimento de assistente automatizado integrando GPT-4o mini e Evolution API para triagem inteligente de leads, reduzindo o tempo de atendimento em 30%.",

      contact_subtitle: "Tem uma ideia ou um projeto em mente? Vamos conversar. Preencha os parâmetros abaixo para instanciar o contato.",
      contact_name: "Seu Nome",
      contact_email: "Seu Email",
      contact_message: "Sua Mensagem",
      contact_submit: "Enviar Mensagem",

      copy_dossier_btn: "Copiar Dossiê",
      copy_dossier_copied: "Copiado!",

      typewriter: ["Desenvolvedor Full-Stack", "Contribuidor GSoC '26", "Especialista TypeScript"]
    },
    en: {
      section_profile: "Engineering Profile",
      profile_role_label: "Primary Role",
      profile_base_label: "Operational Base",
      profile_base_val: "Brazil / Remote",
      profile_status_label: "Contract Status",
      status_active: "Active & Available",
      lang_label: "Language / Idioma",
      sidebar_contact_btn: "Contact Me",
      download_cv: "Download CV",
      workspace_title: "RAHIAN@WORKSPACE:~$",
      
      timeline_title: "Experience & Education",
      timeline_count: "Logs: 5 / 5",
      badge_gsoc: "GSoC '26",
      badge_oss: "Open Source",
      badge_freelance: "Freelance",
      badge_edu: "University",
      badge_tech: "Tech Training",

      timeline_gsoc_date: "April 2026 - Present",
      timeline_rc_date: "January 2026 - Present",
      timeline_rs_date: "January 2025 - January 2026",
      timeline_cs_date: "August 2025 - June 2029",
      timeline_backend_date: "February 2026 - December 2026",

      gsoc_role: "Google Summer of Code Contributor",
      gsoc_details: "Developing the 'Room Header Buttons Ordering' project using TypeScript, React, Fuselage, Jest, and Playwright, focusing on accessibility (a11y) and comprehensive testing.",
      rc_role: "Open Source Contributor",
      rc_details: "Enhancing Rocket.Chat's Apps-Engine core, refactoring legacy code to TypeScript using recursive types, Node.js/Deno compatibility, and Turbo workspaces.",
      rs_role: "Technology & Design Specialist",
      rs_details: "Engineered an automated client intake assistant integrating GPT-4o mini and Evolution API at RS Advocacia, reducing manual case handling time by 30%.",
      edu_cs_role: "Computer Science (Bachelor's)",
      edu_cs_details: "Cruzeiro do Sul Virtual. Specialized software engineering, algorithms, data structures, and UX design foundation.",
      edu_backend_role: "Backend Software Development",
      edu_backend_details: "SENAI/SC (SCTEC Program). Specialized backend development, Node.js APIs, cloud environments, and DevOps practices.",

      tab_skills: "Skills",
      tab_projects: "Projects",
      tab_dossier: "Career Dossier",
      tab_contact: "Contact",

      skills_cat_core: "Core Languages",
      skills_cat_libs: "Frameworks & Libs",
      skills_cat_testing: "Testing & Tools",
      skills_cat_method: "Methodology & UX",

      project_gsoc_title: "Room Header Buttons (GSoC)",
      project_gsoc_desc: "Developing a modular and customizable UI system for room header buttons in Rocket.Chat using React, TypeScript, Jest, and Playwright.",
      project_rc_core_title: "Rocket.Chat Apps-Engine",
      project_rc_core_desc: "Contributions to the core of Rocket.Chat Apps-Engine, refactoring code to TypeScript, ensuring Node.js/Deno cross-compatibility and strict type safety.",
      project_date_editor_title: "GitHub Date Editor",
      project_date_editor_desc: "An interactive CLI tool written in TypeScript to manage commit histories, normalize dates, and create or amend commits.",
      project_intake_title: "AI Intake Assistant",
      project_intake_desc: "Engineered an automated intake assistant integrating GPT-4o mini and Evolution API at RS Advocacia, reducing manual case handling time for agents by 30%.",

      contact_subtitle: "Have an idea or a project in mind? Let's talk. Fill out the parameters below to instantiate the contact.",
      contact_name: "Your Name",
      contact_email: "Your Email",
      contact_message: "Your Message",
      contact_submit: "Send Message",

      copy_dossier_btn: "Copy Dossier",
      copy_dossier_copied: "Copied!",

      typewriter: ["Full-Stack Developer", "GSoC '26 Contributor", "TypeScript Specialist"]
    }
  };

  let currentLang = localStorage.getItem("portfolio_lang") || "pt";
  if (currentLang !== "pt" && currentLang !== "en") {
    currentLang = "pt";
  }

  const dom = {
    typewriterText: document.querySelector(".typewriter-text"),
    langBtns: {
      pt: document.getElementById("lang-pt"),
      en: document.getElementById("lang-en")
    },
    tabBtns: document.querySelectorAll(".tab-btn"),
    tabViews: document.querySelectorAll(".tab-view"),
    sidebarContactBtn: document.getElementById("sidebarContactBtn"),
    dossierContent: document.getElementById("dossierContentText"),
    copyDossierBtn: document.getElementById("copyDossierBtn")
  };

  function updateDossierContent() {
    if (!dom.dossierContent) return;

    let text = "";
    if (currentLang === "pt") {
      text = `=====================================================
RAHIAN SANTOS - DOSSIÊ DE CARREIRA (2026)
=====================================================
Função Principal: Desenvolvedor Full-Stack JavaScript
Base Operacional: Brasil / Remoto
Status: Ativo & Disponível

EXPERIÊNCIAS PROFISSIONAIS:
-----------------------------------------------------
- Contribuidor Google Summer of Code @ Rocket.Chat
  Período: Abril 2026 - Presente
  Foco: TypeScript, React, Fuselage, Jest, Playwright

- Contribuidor Open Source @ Rocket.Chat Apps-Engine
  Período: Janeiro 2026 - Presente
  Foco: Tipagem em TS, compatibilidade Node.js/Deno, monorepos

- Especialista em Tecnologia e Design @ RS Advocacia
  Período: Janeiro 2025 - Janeiro 2026
  Foco: Automação com IA (GPT-4o mini, Evolution API)

EDUCAÇÃO:
-----------------------------------------------------
- Bacharelado em Ciência da Computação
  Instituição: Cruzeiro do Sul Virtual (2025 - 2029)
- Desenvolvimento de Software Backend
  Instituição: SENAI/SC (Programa SCTEC, 2026)

PRINCIPAIS COMPETÊNCIAS:
-----------------------------------------------------
TypeScript, JavaScript (ES6+), React.js, Node.js, Deno,
REST APIs, Jest, Playwright, WCAG Accessibility.
=====================================================`;
    } else {
      text = `=====================================================
RAHIAN SANTOS - CAREER DOSSIER (2026)
=====================================================
Primary Role: Full-Stack JavaScript Developer
Operational Base: Brazil / Remote
Status: Active & Available

PROFESSIONAL EXPERIENCE:
-----------------------------------------------------
- Google Summer of Code Contributor @ Rocket.Chat
  Period: April 2026 - Present
  Focus: TypeScript, React, Fuselage, Jest, Playwright

- Open Source Contributor @ Rocket.Chat Apps-Engine
  Period: January 2026 - Present
  Focus: TypeScript typing, Node.js/Deno compatibility, monorepos

- Technology & Design Specialist @ RS Advocacia
  Period: January 2025 - January 2026
  Focus: AI Automation (GPT-4o mini, Evolution API)

EDUCATION:
-----------------------------------------------------
- Bachelor's Degree in Computer Science
  Institution: Cruzeiro do Sul Virtual (2025 - 2029)
- Backend Software Development
  Institution: SENAI/SC (SCTEC Program, 2026)

CORE SKILLS:
-----------------------------------------------------
TypeScript, JavaScript (ES6+), React.js, Node.js, Deno,
REST APIs, Jest, Playwright, WCAG Accessibility.
=====================================================`;
    }
    dom.dossierContent.textContent = text;
  }

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
        elem.textContent = translation;
      }
    });

    updateDossierContent();

    charIndex = 0;
    isDeleting = false;
  }

  // Language selectors click handlers
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

  // Tab switching logic matching Nexus Agent
  dom.tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");
      
      dom.tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      dom.tabViews.forEach(view => {
        view.classList.remove("active");
        if (view.id === `tab-${targetTab}`) {
          view.classList.add("active");
        }
      });
    });
  });

  // Sidebar contact button triggers switching to Contact tab
  if (dom.sidebarContactBtn) {
    dom.sidebarContactBtn.addEventListener("click", () => {
      const contactTabBtn = document.querySelector('.tab-btn[data-tab="contact"]');
      if (contactTabBtn) {
        contactTabBtn.click();
        const mainPanel = document.querySelector(".results-content");
        if (mainPanel) {
          mainPanel.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  }

  // Dossier Copy functionality
  if (dom.copyDossierBtn && dom.dossierContent) {
    dom.copyDossierBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(dom.dossierContent.textContent).then(() => {
        const originalText = translations[currentLang].copy_dossier_btn;
        dom.copyDossierBtn.textContent = translations[currentLang].copy_dossier_copied;
        setTimeout(() => {
          dom.copyDossierBtn.textContent = originalText;
        }, 1500);
      });
    });
  }

  // Typewriter effect in the profile panel
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

  updateTranslations();
});
