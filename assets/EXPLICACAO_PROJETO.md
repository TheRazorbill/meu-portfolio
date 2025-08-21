# Explicação do Projeto de Portfólio Web

Este documento detalha a estrutura e o funcionamento do projeto de portfólio web, que foi desenvolvido utilizando HTML, CSS e JavaScript. O objetivo principal é criar uma página de portfólio responsiva e interativa para exibir habilidades e projetos.

## Estrutura de Arquivos

O projeto é composto pelos seguintes arquivos principais:

- [`index.html`](index.html): O arquivo HTML principal que define a estrutura e o conteúdo da página.
- [`style.css`](style.css): O arquivo CSS que contém todos os estilos visuais da página, garantindo um design responsivo e moderno.
- [`script.js`](script.js): O arquivo JavaScript que adiciona interatividade e dinamismo à página, como o efeito de máquina de escrever e o carrossel de projetos.
- `img.png`: Imagem principal do perfil.
- `Acessibilidade.png`: Imagem de preview para o projeto de acessibilidade.
- `Pagina de login.png`: Imagem de preview para o projeto de página de login.

## Tecnologias Utilizadas

- **HTML5**: Para a estrutura semântica da página.
- **CSS3**: Para estilização, incluindo variáveis CSS, flexbox, grid e media queries para responsividade.
- **JavaScript (ES6+)**: Para interatividade, manipulação do DOM, efeitos visuais e lógica do carrossel.
- **Boxicons**: Biblioteca de ícones externos.
- **Google Fonts (Inter)**: Fonte utilizada para o texto.

## Visão Geral do `index.html`

O arquivo `index.html` é a espinha dorsal do projeto. Ele está dividido em seções principais, cada uma com um propósito específico:

- **`<head>`**: Contém metadados da página, como `charset`, `viewport`, descrição, título e links para os arquivos CSS e bibliotecas externas (Boxicons).
- **`<header>`**: O cabeçalho fixo da página, que inclui o logo "Razor", a navegação principal (`<nav>`) e um botão de contato. Possui um efeito de "scrolled" que altera seu estilo ao rolar a página.
- **`<div class="overlay"></div>`**: Um elemento `div` que atua como um overlay para o menu mobile, escurecendo o fundo quando o menu é aberto.
- **`<main id="main-content">`**: O conteúdo principal da página, que agrupa todas as seções do portfólio.
    - **`<section class="home" id="home">`**: A seção inicial (hero section) que dá as boas-vindas, apresenta o nome do desenvolvedor com um efeito de máquina de escrever, uma breve descrição, botões de ação (Contrate-me, Download CV) e links para redes sociais.
    - **`<section id="habilidades" class="skills portfolio-section">`**: Seção dedicada às habilidades do desenvolvedor, apresentadas em um grid responsivo.
    - **`<section id="projetos" class="projects portfolio-section">`**: Seção que exibe os projetos em um carrossel interativo, com imagens, títulos, descrições e links para o projeto ao vivo e o repositório GitHub.
    - **`<section id="contato" class="contact portfolio-section">`**: Seção de contato com um formulário para envio de mensagens e links adicionais para redes sociais.
- **`<footer>`**: O rodapé da página, contendo informações de direitos autorais.
- **`<script src="script.js" defer></script>`**: Link para o arquivo JavaScript, com o atributo `defer` para garantir que o script seja executado após o HTML ser completamente carregado.

## Visão Geral do `style.css`

O arquivo `style.css` é responsável por toda a parte visual do portfólio. Ele utiliza uma abordagem moderna de CSS:

- **`@import`**: Importa a fonte 'Inter' do Google Fonts.
- **`:root` (Variáveis CSS)**: Define variáveis globais para cores, facilitando a manutenção e a consistência do tema.
- **Reset Básico (`*`)**: Remove margens e preenchimentos padrão dos navegadores e define `box-sizing: border-box` para um controle de layout mais previsível.
- **Estilos Globais (`html`, `body`, `.container`)**: Define o comportamento de rolagem suave, cores de fundo e texto, e a largura e centralização do contêiner principal.
- **Componentes Reutilizáveis (`.btn`)**: Estilos para botões, incluindo efeitos de hover e variações (ex: `d-CV`).
- **Estilos de Layout (`header`, `.home`, `.portfolio-section`)**: Define o posicionamento do cabeçalho (fixo, com efeito de blur ao rolar), o layout da seção inicial (flexbox) e o preenchimento comum para todas as seções do portfólio.
- **Navegação (`.navlist`, `.logo`)**: Estilos para o logo, links de navegação, incluindo o indicador de link ativo e a responsividade do menu mobile.
- **Seções Específicas (`.skills`, `.projects`, `.contact`)**:
    - **Habilidades**: Grid responsivo para os itens de habilidade, com efeitos de hover.
    - **Projetos**: Layout de carrossel com flexbox, estilos para os itens de projeto (imagens, legendas, links) e botões de navegação do carrossel.
    - **Contato**: Estilos para o formulário (inputs, textarea, botão de envio) e links sociais.
- **Rodapé (`footer`)**: Estilos para o rodapé da página.
- **Media Queries (`@media`)**: Regras de CSS que ajustam o layout e os estilos para diferentes tamanhos de tela (responsividade), garantindo que o portfólio seja visualmente agradável em desktops, tablets e celulares.

## Visão Geral do `script.js`

O arquivo `script.js` adiciona a interatividade e o dinamismo à página:

- **`DOMContentLoaded`**: Garante que o script só seja executado após o carregamento completo do HTML, evitando erros de elementos não encontrados.
- **`dom` Object**: Um objeto que centraliza todas as referências a elementos do DOM, tornando o código mais limpo e fácil de gerenciar.
- **`toggleMenu()`**: Função responsável por abrir e fechar o menu mobile, adicionando/removendo classes CSS para controlar a visibilidade do menu, do ícone e do overlay.
- **Efeito de Máquina de Escrever (`typeEffect()`)**:
    - Define uma lista de textos (`textsToType`) que serão exibidos sequencialmente.
    - Simula a digitação e o apagamento de caracteres, criando um efeito visual dinâmico no título da seção "Home".
    - Utiliza `setTimeout` para controlar a velocidade de digitação, apagamento e os atrasos entre os textos.
- **Efeito de Rolagem do Cabeçalho**: Adiciona um listener de evento de `scroll` à janela para detectar a posição de rolagem. Se a página for rolada mais de 50px, adiciona a classe `scrolled` ao cabeçalho, ativando os estilos definidos no CSS (fundo semi-transparente e blur).
- **Rolagem Suave dos Links de Navegação**:
    - Itera sobre todos os links de navegação.
    - Ao clicar em um link, previne o comportamento padrão (salto instantâneo) e usa `scrollIntoView({ behavior: "smooth" })` para rolar suavemente até a seção correspondente.
    - Fecha o menu mobile se estiver aberto após a navegação.
- **`IntersectionObserver` para Seções Visíveis**:
    - **`sectionObserver`**: Observa todas as seções com a classe `portfolio-section`. Quando uma seção entra na viewport (com 20% de visibilidade), adiciona a classe `is-visible` a ela. Isso pode ser usado para animações de entrada ou carregamento de conteúdo.
    - **`homeSectionObserver`**: Um observer específico para a seção `home`, que adiciona a classe `is-visible` ao seu contêiner quando visível.
    - **`navObserver`**: Observa todas as seções que possuem um `id`. Quando uma seção se torna visível na viewport (com margens ajustadas para melhor detecção), ele atualiza a classe `active` nos links de navegação, destacando o link da seção atualmente visível.
- **Lógica do Carrossel de Projetos**:
    - **`updateCarouselButtons()`**: Habilita ou desabilita os botões "anterior" e "próximo" do carrossel com base na posição atual da rolagem e na largura total do conteúdo.
    - **`scrollCarousel(direction)`**: Função que calcula a quantidade de rolagem necessária (largura do projeto + espaçamento) e a aplica ao `projectsGrid.scrollLeft`, movendo o carrossel para a esquerda ou direita.
    - Adiciona listeners de clique aos botões do carrossel e um listener de `scroll` ao `projectsGrid` para manter os botões atualizados mesmo com rolagem manual.

## Como Executar o Projeto

Para visualizar o projeto, basta abrir o arquivo `index.html` em qualquer navegador web moderno. Não é necessário nenhum servidor local ou configuração adicional, pois é um projeto puramente front-end.

1. **Baixe ou clone o repositório.**
2. **Navegue até a pasta do projeto.**
3. **Abra o arquivo `index.html` no seu navegador preferido.**

Este projeto é uma base sólida para um portfólio web, demonstrando habilidades em HTML, CSS e JavaScript, além de boas práticas de responsividade e interatividade.