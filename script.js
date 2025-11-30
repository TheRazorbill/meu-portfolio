// Garante que o script só seja executado após o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {
  // Objeto que armazena referências a elementos do DOM para fácil acesso
  const dom = {
    header: document.querySelector("header"), // Cabeçalho da página
    navLinks: document.querySelectorAll(".navlist a"), // Todos os links de navegação
    allSections: document.querySelectorAll("section.portfolio-section"), // Todas as seções do portfólio
    menuIcon: document.querySelector(".menu-icon"), // Ícone do menu (hambúrguer)
    navlist: document.querySelector(".navlist"), // Lista de navegação (menu mobile)
    overlay: document.querySelector(".overlay"), // Overlay que escurece a tela no menu mobile
    typewriterText: document.querySelector(".typewriter-text"), // Elemento para o efeito de máquina de escrever
    projectsGrid: document.querySelector(".projects-grid"), // Grid de projetos para o carrossel
    prevButton: document.getElementById("prev-project"), // Botão "anterior" do carrossel de projetos
    nextButton: document.getElementById("next-project"), // Botão "próximo" do carrossel de projetos
  };

  // Função para alternar a visibilidade do menu mobile e do overlay
  function toggleMenu() {
    dom.navlist.classList.toggle("open"); // Adiciona/remove a classe 'open' na lista de navegação
    dom.menuIcon.classList.toggle("active"); // Adiciona/remove a classe 'active' no ícone do menu
    dom.overlay.classList.toggle("open"); // Adiciona/remove a classe 'open' no overlay
  }

  // Adiciona listeners de evento para o ícone do menu e o overlay
  if (dom.menuIcon && dom.navlist && dom.overlay) {
    dom.menuIcon.addEventListener("click", toggleMenu); // Ao clicar no ícone, chama toggleMenu
    dom.overlay.addEventListener("click", toggleMenu); // Ao clicar no overlay, chama toggleMenu
  }

  // Configurações para o efeito de máquina de escrever
  const textsToType = ["DEVELOPER", "DESIGNER", "PROGRAMMER"]; // Textos a serem digitados
  const typingSpeed = 150; // Velocidade de digitação (ms por caractere)
  const erasingSpeed = 100; // Velocidade de apagamento (ms por caractere)
  const delayBeforeErase = 1500; // Atraso antes de apagar o texto (ms)
  const delayBeforeTypingNext = 500; // Atraso antes de digitar o próximo texto (ms)

  let textIndex = 0; // Índice do texto atual na array textsToType
  let charIndex = 0; // Índice do caractere atual no texto
  let isDeleting = false; // Flag para indicar se está apagando ou digitando

  // Função principal do efeito de máquina de escrever
  function typeEffect() {
    if (!dom.typewriterText) return; // Sai se o elemento não existir

    const currentText = textsToType[textIndex]; // Texto atual a ser processado
    const textElement = dom.typewriterText; // Elemento onde o texto será exibido

    if (isDeleting) {
      // Se estiver apagando
      textElement.innerHTML = currentText.substring(0, charIndex - 1); // Remove um caractere
      charIndex--; // Decrementa o índice do caractere
      if (charIndex > 0) {
        setTimeout(typeEffect, erasingSpeed); // Continua apagando
      } else {
        isDeleting = false; // Terminou de apagar
        textIndex = (textIndex + 1) % textsToType.length; // Vai para o próximo texto (loop)
        setTimeout(typeEffect, delayBeforeTypingNext); // Atraso antes de digitar o próximo
      }
    } else {
      // Se estiver digitando
      textElement.innerHTML = currentText.substring(0, charIndex + 1); // Adiciona um caractere
      charIndex++; // Incrementa o índice do caractere
      if (charIndex < currentText.length) {
        setTimeout(typeEffect, typingSpeed); // Continua digitando
      } else {
        isDeleting = true; // Terminou de digitar
        setTimeout(typeEffect, delayBeforeErase); // Atraso antes de apagar
      }
    }
  }

  // Inicia o efeito de máquina de escrever se o elemento existir
  if (dom.typewriterText) {
    setTimeout(typeEffect, delayBeforeTypingNext);
  }

  // Adiciona/remove a classe 'scrolled' no cabeçalho ao rolar a página
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      dom.header.classList.add("scrolled"); // Adiciona a classe se a rolagem for maior que 50px
    } else {
      dom.header.classList.remove("scrolled"); // Remove a classe se a rolagem for menor ou igual a 50px
    }
  });

  // Adiciona funcionalidade de rolagem suave e fechamento do menu mobile ao clicar nos links de navegação
  dom.navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Previne o comportamento padrão do link (navegação instantânea)
      const targetId = this.getAttribute("href"); // Obtém o ID da seção de destino
      const targetSection = document.querySelector(targetId); // Seleciona a seção de destino

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" }); // Rola suavemente até a seção
      }

      // Se o menu mobile estiver aberto, fecha-o
      if (dom.navlist.classList.contains("open")) {
        toggleMenu();
      }
    });
  });

  // Observer para adicionar a classe 'is-visible' quando uma seção entra na viewport
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible"); // Adiciona a classe se a seção estiver visível
        }
      });
    },
    { root: null, threshold: 0.2 } // Observa a viewport inteira, com 20% de visibilidade para disparar
  );

  // Observa todas as seções do portfólio
  dom.allSections.forEach((section) => {
    sectionObserver.observe(section);
  });
  
  // Observer específico para a seção 'home' para adicionar 'is-visible' ao seu contêiner
  const homeSectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelector('.container').classList.add("is-visible"); // Adiciona a classe ao contêiner da seção home
        }
      });
    },
    { root: null, threshold: 0.2 } // Observa a viewport inteira, com 20% de visibilidade para disparar
  );
  
  const homeSection = document.querySelector('.home'); // Seleciona a seção home
  if (homeSection) {
    homeSectionObserver.observe(homeSection); // Observa a seção home
  }


  // Observer para atualizar o link de navegação ativo com base na seção visível
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id'); // Obtém o ID da seção visível
            dom.navLinks.forEach(link => {
                link.classList.remove('active'); // Remove a classe 'active' de todos os links
                if (link.getAttribute('href').includes(currentId)) {
                    link.classList.add('active'); // Adiciona a classe 'active' ao link correspondente à seção visível
                }
            });
        }
    });
  }, {
      root: null, // Observa a viewport inteira
      rootMargin: '-40% 0px -60% 0px', // Margem para ajustar quando a seção é considerada "visível"
      threshold: 0 // Dispara assim que a seção entra na viewport
  });

  // Observa todas as seções que possuem um ID
  document.querySelectorAll('section[id]').forEach(section => {
      navObserver.observe(section);
  });

  // Lógica para o carrossel de projetos
  if (dom.projectsGrid) {
    // Função para atualizar o estado dos botões de navegação do carrossel (habilitado/desabilitado)
    const updateCarouselButtons = () => {
      const scrollLeft = dom.projectsGrid.scrollLeft; // Posição atual da rolagem horizontal
      const scrollWidth = dom.projectsGrid.scrollWidth; // Largura total do conteúdo rolável
      const clientWidth = dom.projectsGrid.clientWidth; // Largura visível do contêiner

      dom.prevButton.disabled = scrollLeft <= 0; // Desabilita o botão "anterior" se estiver no início
      dom.nextButton.disabled = scrollLeft + clientWidth >= scrollWidth - 1; // Desabilita o botão "próximo" se estiver no final
    };

    // Função para rolar o carrossel em uma direção específica
    const scrollCarousel = (direction) => {
      const firstProject = dom.projectsGrid.querySelector(".project-item"); // Pega o primeiro item do projeto
      if (!firstProject) return; // Sai se não houver itens

      const projectWidth = firstProject.offsetWidth; // Largura de um item de projeto
      const gap = parseInt(window.getComputedStyle(dom.projectsGrid).gap) || 30; // Espaçamento entre os itens
      
      dom.projectsGrid.scrollLeft += (projectWidth + gap) * direction; // Rola o carrossel
    };

    // Adiciona listeners de evento para os botões de navegação do carrossel
    dom.nextButton.addEventListener("click", () => scrollCarousel(1)); // Rola para a direita
    dom.prevButton.addEventListener("click", () => scrollCarousel(-1)); // Rola para a esquerda
    dom.projectsGrid.addEventListener("scroll", updateCarouselButtons); // Atualiza os botões ao rolar manualmente

    updateCarouselButtons(); // Chama a função uma vez para definir o estado inicial dos botões
  }
});