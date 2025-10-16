# 🚀 Bootcamp Completo de Desenvolvimento Web: Do Zero ao Next.js

<div align="center">
  ![Progresso](https://progress-bar.dev/70/?title=Progresso&width=600)
  
  [![Abrir no GitHub](https://img.shields.io/badge/⭐-Estrela%20no%20GitHub-black?style=for-the-badge&logo=github)](https://github.com/seu-usuario/bootcamp-fullstack)
  [![Licença](https://img.shields.io/badge/Licença-MIT-blue.svg?style=for-the-badge)](LICENSE)
</div>

## 📚 Sumário

### 🏁 Começando
- [📋 Visão Geral](#-visão-geral)
- [🎯 Objetivos de Aprendizado](#-objetivos-de-aprendizado)
- [🛠️ Pré-requisitos](#️-pré-requisitos)
- [📦 Instalação](#-instalação)

### 📋 Módulos
1. [🌐 Fundamentos da Web](#-módulo-1-fundamentos-da-web)
   - [Como a Internet Funciona](#111-como-a-internet-funciona)
   - [Configuração do Ambiente](#12-configuração-do-ambiente-de-desenvolvimento)
2. [🎨 Frontend Essencial](#-módulo-2-frontend-essencial)
   - [HTML5 Semântico](#21-html5-semântico)
   - [CSS Moderno](#22-css-moderno)
3. [⚡ JavaScript Avançado](#-módulo-3-javascript-avançado)
   - [ES6+](#31-es6)
   - [Assincronicidade](#32-assincronicidade)
4. [⚛️ React do Zero](#️-módulo-4-react-do-zero)
   - [Fundamentos do React](#41-fundamentos-do-react)
   - [Gerenciamento de Estado](#42-gerenciamento-de-estado)
5. [🚀 Next.js Profissional](#-módulo-5-nextjs-profissional)
   - [Roteamento](#51-roteamento)
   - [API Routes](#52-api-routes)
6. [🔒 Segurança e Autenticação](#-módulo-6-segurança-e-autenticação)
   - [NextAuth.js](#61-nextauthjs)
   - [Proteção de Rotas](#62-proteção-de-rotas)

### 🔍 Recursos Adicionais
- [📖 Glossário](#-glossário)
- [🔧 Ferramentas Recomendadas](#-ferramentas-recomendadas)
- [🎓 Canais de Aprendizado](#-canais-de-aprendizado)
- [📚 Bibliografia](#-bibliografia)

### 🔄 Navegação Rápida
| Seção Anterior | Próxima Seção |
|----------------|---------------|
| [⬅️ Módulo Anterior](#) | [Próximo Módulo ➡️](#) |

<div align="center">
  <a href="#módulo-1-fundamentos-da-web">
    <img src="https://img.icons8.com/3d-fluency/50/000000/down-squared.png" alt="Iniciar Curso" width="40" height="40"/>
    <p>Iniciar Curso</p>
  </a>
</div>

## 🎯 Objetivos de Aprendizado

Ao final deste bootcamp, você será capaz de:

✅ Desenvolver aplicações web completas com React e Next.js  
✅ Implementar autenticação segura com NextAuth.js  
✅ Criar APIs RESTful com Node.js e Express  
✅ Gerenciar estado global com Context API e Redux  
✅ Implementar boas práticas de segurança e performance

## 🛠️ Pré-requisitos

- Conhecimento básico de HTML, CSS e JavaScript
- Node.js 14+ instalado
- Editor de código (recomendado: VS Code)
- Conta no GitHub

## 📦 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/bootcamp-fullstack.git
   cd bootcamp-fullstack
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

## 📋 Módulo 1: Fundamentos da Web

### 🔍 Visão Geral
Neste módulo, você aprenderá os conceitos fundamentais da web moderna, desde como a internet funciona até a configuração do ambiente de desenvolvimento.

### 📚 Tópicos Abordados
- Arquitetura cliente-servidor
- Protocolos web (HTTP/HTTPS)
- Ferramentas de desenvolvimento
- Versionamento com Git

### ✅ Checklist de Progresso
- [ ] Compreender o modelo cliente-servidor
- [ ] Configurar ambiente de desenvolvimento
- [ ] Criar primeiro repositório Git
- [ ] Publicar projeto no GitHub

### 📌 Dica Rápida
> Use as ferramentas de desenvolvedor do navegador (F12) para inspecionar elementos e depurar seu código em tempo real!

### 1.1 Como a Internet Funciona

#### 1.1.1 Modelo Cliente-Servidor
- **Fluxo de Requisição/Resposta**
  - Cliente faz uma requisição
  - Servidor processa e envia resposta
  - Navegador renderiza a resposta
- **Frontend vs Backend**
  - Frontend: Interface do usuário (HTML, CSS, JS)
  - Backend: Lógica do servidor (Node.js, Python, PHP, etc.)
- **Protocolos Web**
  - HTTP/HTTPS
  - WebSockets
  - RESTful APIs
- **Códigos de Status HTTP**
  - 2xx: Sucesso (200 OK, 201 Criado)
  - 3xx: Redirecionamentos
  - 4xx: Erros do cliente (404 Não Encontrado)
  - 5xx: Erros do servidor

#### 1.1.2 Navegadores e Motores de Renderização
- **Processamento de Páginas**
  - Análise HTML → Árvore DOM
  - Processamento CSS → Árvore de Renderização
  - Execução JavaScript
  - Layout e Pintura
- **Motores de Renderização**
  - Blink (Chrome, Edge, Opera)
  - Gecko (Firefox)
  - WebKit (Safari)
- **Ferramentas de Desenvolvedor**
  - Inspecionar Elemento
  - Console
  - Network Monitor
  - Performance

### 1.2 Configuração do Ambiente de Desenvolvimento

#### 1.2.1 Editores de Código
- **VS Code**
  - [Download e Instalação](https://code.visualstudio.com/)
  - Configuração Básica
  - Extensões Essenciais:
    - Live Server
    - Prettier - Code formatter
    - ESLint
    - IntelliSense for CSS, HTML, etc.
    - GitLens
  - Atalhos Úteis:
    - `Ctrl + P`: Abrir arquivo rápido
    - `Ctrl + Shift + P`: Paleta de comandos
    - `Alt + ↑/↓`: Mover linha
    - `Shift + Alt + F`: Formatar código

#### 1.2.2 Controle de Versão com Git
- **Instalação**
  - [Download Git](https://git-scm.com/)
  - Configuração inicial:
    ```bash
    git config --global user.name "Seu Nome"
    git config --global user.email "seu@email.com"
    ```
- **Comandos Básicos**
  ```bash
  # Iniciar repositório
  git init
  
  # Adicionar arquivos
  git add .
  
  # Fazer commit
  git commit -m "Mensagem descritiva"
  
  # Conectar ao repositório remoto
  git remote add origin URL_DO_REPOSITORIO
  
  # Enviar alterações
  git push -u origin main
  ```
- **Plataformas**
  - [GitHub](https://github.com/)
  - [GitLab](https://about.gitlab.com/)
  - [Bitbucket](https://bitbucket.org/)

### 1.3 Primeiros Passos com HTML

#### 1.3.1 Estrutura Básica
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Descrição do site">
    <title>Meu Primeiro Site</title>
</head>
<body>
    <!-- Conteúdo vai aqui -->
</body>
</html>
```

#### 1.3.2 Elementos Semânticos
- **Estrutura Básica**
  ```html
  <header>Cabeçalho</header>
  <nav>Menu de navegação</nav>
  <main>
      <section>
          <article>Conteúdo principal</article>
          <aside>Conteúdo relacionado</aside>
      </section>
  </main>
  <footer>Rodapé</footer>
  ```
- **Elementos de Mídia**
  ```html
  <figure>
      <img src="imagem.jpg" alt="Descrição">
      <figcaption>Legenda da imagem</figcaption>
  </figure>
  ```
- **Elementos de Texto**
  ```html
  <p>Texto com <mark>destaque</mark> e <time datetime="2025-10-15">data</time>.</p>
  <progress value="70" max="100">70%</progress>
  ```

#### 1.3.3 Formulários Avançados
```html
<form>
    <label for="email">E-mail:</label>
    <input type="email" id="email" required 
           placeholder="seu@email.com"
           aria-describedby="emailHelp">
    <small id="emailHelp">Nunca compartilharemos seu e-mail.</small>
    
    <label for="senha">Senha:</label>
    <input type="password" id="senha" required
           minlength="8"
           aria-describedby="senhaHelp">
    <small id="senhaHelp">Mínimo de 8 caracteres.</small>
    
    <button type="submit">Entrar</button>
</form>
```

### 🏆 Projeto 1: Página de Perfil Completa

#### Objetivo
Criar uma página de perfil profissional responsiva que mostre suas habilidades e projetos.

#### Estrutura Básica
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Portfólio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Conteúdo vai aqui -->
</body>
</html>
```

#### 1. Cabeçalho com Navegação
```html
<header class="cabecalho">
    <nav class="menu">
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
    </nav>
</header>
```

#### 2. Seção de Apresentação
```html
<section id="sobre" class="sobre">
    <div class="perfil">
        <img src="foto-perfil.jpg" alt="Minha Foto" class="foto-perfil">
        <h1>Seu Nome</h1>
        <p class="titulo">Desenvolvedor Web</p>
    </div>
    <div class="biografia">
        <h2>Sobre Mim</h2>
        <p>Uma breve descrição sobre você, suas habilidades e objetivos profissionais.</p>
        <div class="habilidades">
            <span class="tag">HTML5</span>
            <span class="tag">CSS3</span>
            <span class="tag">JavaScript</span>
        </div>
    </div>
</section>
```

#### 3. Portfólio de Projetos
```html
<section id="projetos" class="projetos">
    <h2>Meus Projetos</h2>
    <div class="grid-projetos">
        <article class="projeto">
            <img src="projeto1.jpg" alt="Projeto 1">
            <h3>Projeto 1</h3>
            <p>Descrição breve do projeto e tecnologias utilizadas.</p>
            <a href="#" class="botao">Ver Projeto</a>
        </article>
        <!-- Mais projetos aqui -->
    </div>
</section>
```

#### 4. Formulário de Contato
```html
<section id="contato" class="contato">
    <h2>Entre em Contato</h2>
    <form class="form-contato">
        <div class="campo">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" required>
        </div>
        <div class="campo">
            <label for="email">E-mail:</label>
            <input type="email" id="email" required>
        </div>
        <div class="campo">
            <label for="mensagem">Mensagem:</label>
            <textarea id="mensagem" rows="5" required></textarea>
        </div>
        <button type="submit" class="botao">Enviar Mensagem</button>
    </form>
</section>
```

#### 5. Rodapé com Links Sociais
```html
<footer class="rodape">
    <div class="redes-sociais">
        <a href="#" aria-label="GitHub">
            <i class="fab fa-github"></i>
        </a>
        <a href="#" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
        </a>
        <a href="#" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
        </a>
    </div>
    <p>&copy; 2025 Seu Nome. Todos os direitos reservados.</p>
</footer>
```

#### 6. Estilos Básicos (styles.css)
```css
/* Reset e Variáveis */
:root {
    --cor-primaria: #2563eb;
    --cor-secundaria: #1e40af;
    --cor-texto: #1f2937;
    --cor-fundo: #ffffff;
    --espacamento: 2rem;
}

/* Estilos Gerais */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--cor-texto);
    margin: 0;
    padding: 0;
}

/* Menu de Navegação */
.cabecalho {
    background-color: var(--cor-primaria);
    padding: 1rem;
    position: fixed;
    width: 100%;
    top: 0;
}

.menu {
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.menu a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.3s;
}

.menu a:hover {
    opacity: 0.8;
}

/* Seções */
section {
    padding: 5rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

/* Estilos para telas pequenas */
@media (max-width: 768px) {
    .menu {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
    
    section {
        padding: 3rem 1rem;
    }
}
```

#### 7. Instruções de Implementação

1. **Estrutura de Pastas**
   ```
   meu-portfolio/
   ├── index.html
   ├── styles.css
   ├── assets/
   │   ├── images/
   │   │   ├── foto-perfil.jpg
   │   │   └── projeto1.jpg
   │   └── icons/
   └── README.md
   ```

2. **Recursos Necessários**
   - [Font Awesome](https://fontawesome.com/) para ícones
   - Google Fonts para tipografia
   - Imens para imagens de placeholder

3. **Checklist de Recursos**
   - [ ] Layout responsivo
   - [ ] Navegação suave
   - [ ] Formulário funcional
   - [ ] Animações suaves
   - [ ] Otimização para SEO

#### 8. Desafios Extras
- Adicione um tema escuro/claro
- Implemente validação de formulário com JavaScript
- Adicione um botão de "Voltar ao topo"
- Crie um menu mobile
- Adicione um currículo para download

#### 9. Dicas
- Use o DevTools para testar responsividade
- Valide seu HTML em [W3C Validator](https://validator.w3.org/)
- Teste em diferentes navegadores
- Peça feedback a outros desenvolvedores

#### 10. Próximos Passos
1. Hospede seu portfólio no GitHub Pages
2. Adicione mais projetos conforme for desenvolvendo
3. Atualize regularmente suas informações
4. Compartilhe nas redes sociais

> **Dica:** Use o [Netlify](https://www.netlify.com/) para fazer deploy contínuo diretamente do seu repositório Git.

---

## 🎨 Módulo 2: CSS Avançado

### 2.1 Fundamentos do CSS
```css
/* Reset e Normalização */
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --cor-primaria: #2563eb;
    --cor-secundaria: #1e40af;
    --cor-texto: #1f2937;
    --cor-fundo: #ffffff;
    --fonte-principal: 'Inter', system-ui, -apple-system, sans-serif;
    --borda-arredondada: 8px;
    --sombra: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

body {
    font-family: var(--fonte-principal);
    line-height: 1.6;
    color: var(--cor-texto);
    background-color: var(--cor-fundo);
}
```
## 🎨 Módulo 2: CSS Avançado

### 2.1 Fundamentos do CSS Avançado

#### 2.1.1 Reset e Normalização
```css
/* Reset Básico */
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Normalização entre navegadores */
html {
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
}

/* Remover estilos padrão de listas */
ul[class],
ol[class] {
    list-style: none;
}

/* Elementos que não têm fonte herdam a fonte do body */
input,
button,
textarea,
select {
    font: inherit;
}

/* Remover animações para quem prefere não vê-las */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}
```

#### 2.1.2 Variáveis CSS e Custom Properties
```css
:root {
    /* Cores */
    --cor-primaria: #2563eb;
    --cor-secundaria: #1e40af;
    --cor-sucesso: #10b981;
    --cor-erro: #ef4444;
    --cor-aviso: #f59e0b;
    
    /* Tipografia */
    --fonte-principal: 'Inter', system-ui, -apple-system, sans-serif;
    --fonte-secundaria: 'Roboto', sans-serif;
    --tamanho-fonte-base: 16px;
    
    /* Espaçamentos */
    --espacamento-pequeno: 0.5rem;
    --espacamento-medio: 1rem;
    --espacamento-grande: 2rem;
    
    /* Bordas */
    --borda-arredondada: 0.5rem;
    --borda-fina: 1px solid #e5e7eb;
    
    /* Sombras */
    --sombra-padrao: 0 1px 3px rgba(0, 0, 0, 0.1);
    --sombra-elevada: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    
    /* Transições */
    --transicao-rapida: 150ms ease-in-out;
    --transicao-padrao: 300ms ease-in-out;
}

/* Exemplo de uso */
.botao {
    background-color: var(--cor-primaria);
    color: white;
    padding: var(--espacamento-pequeno) var(--espacamento-medio);
    border-radius: var(--borda-arredondada);
    border: none;
    font-family: var(--fonte-principal);
    cursor: pointer;
    transition: background-color var(--transicao-rapida);
}

.botao:hover {
    background-color: var(--cor-secundaria);
}
```

### 2.2 Layouts Modernos com Flexbox e Grid

#### 2.2.1 Flexbox em Profundidade
```css
/* Container Flex */
.container-flex {
    display: flex;
    flex-direction: row; /* Padrão: row | row-reverse | column | column-reverse */
    flex-wrap: nowrap; /* Padrão: nowrap | wrap | wrap-reverse */
    justify-content: flex-start; /* Alinhamento no eixo principal */
    align-items: stretch; /* Alinhamento no eixo transversal */
    align-content: stretch; /* Alinhamento de múltiplas linhas */
    gap: 1rem; /* Espaçamento entre itens */
}

/* Itens Flex */
.item-flex {
    order: 0; /* Ordem dos itens */
    flex-grow: 0; /* Capacidade de crescimento */
    flex-shrink: 1; /* Capacidade de redução */
    flex-basis: auto; /* Tamanho base */
    align-self: auto; /* Alinhamento individual */
}

/* Exemplo Prático: Barra de Navegação */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #fff;
    box-shadow: var(--sombra-padrao);
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links {
    display: flex;
    gap: 2rem;
}

/* Menu responsivo */
@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        gap: 1rem;
    }
    
    .nav-links {
        width: 100%;
        justify-content: space-around;
    }
}
```

#### 2.2.2 Grid Layout Avançado
```css
/* Container Grid */
.container-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr); /* 12 colunas */
    grid-template-rows: auto;
    gap: 1.5rem;
    padding: 1rem;
}

/* Exemplo de Layout Completo */
.layout {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar main aside"
        "footer footer footer";
    grid-template-columns: 250px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }

/* Grid Responsivo */
@media (max-width: 1024px) {
    .layout {
        grid-template-areas:
            "header header header"
            "main main main"
            "sidebar sidebar aside"
            "footer footer footer";
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media (max-width: 768px) {
    .layout {
        grid-template-areas:
            "header"
            "main"
            "sidebar"
            "aside"
            "footer";
        grid-template-columns: 1fr;
    }
}

/* Galeria com Grid */
.galeria {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    padding: 1rem;
}

.galeria img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: var(--borda-arredondada);
    transition: transform 0.3s ease;
}

.galeria img:hover {
    transform: scale(1.03);
}
```

### 2.3 Animações e Transições

#### 2.3.1 Transições Suaves
```css
/* Transição Básica */
.botao {
    transition: all 0.3s ease-in-out;
}

/* Múltiplas Propriedades */
.card {
    transition: 
        transform 0.3s ease,
        box-shadow 0.3s ease,
        background-color 0.2s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    background-color: #f8fafc;
}
```

#### 2.3.2 Animações com @keyframes
```css
/* Definição da Animação */
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Aplicando a Animação */
.elemento {
    animation: slideIn 0.5s ease-out forwards;
}

/* Animação de Loading */
@keyframes spin {
    to { transform: rotate(360deg); }
}

.loading {
    width: 40px;
    height: 40px;
    border: 4px solid #e5e7eb;
    border-top-color: #2563eb;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}
```

### 2.4 Design Responsivo

#### 2.4.1 Media Queries
```css
/* Mobile First Approach */
.container {
    padding: 1rem;
    width: 100%;
}

/* Tablets */
@media (min-width: 640px) {
    .container {
        max-width: 640px;
        margin: 0 auto;
    }
}

/* Laptops */
@media (min-width: 1024px) {
    .container {
        max-width: 1024px;
    }
}

/* Desktops Grandes */
@media (min-width: 1280px) {
    .container {
        max-width: 1280px;
    }
}

/* Modo Escuro */
@media (prefers-color-scheme: dark) {
    :root {
        --cor-texto: #f3f4f6;
        --cor-fundo: #111827;
    }
}

/* Impressão */
@media print {
    .no-print {
        display: none;
    }
    
    body {
        font-size: 12pt;
        line-height: 1.3;
    }
}
```

### 🏆 Projeto 2: Card de Produto Interativo

#### Objetivo
Criar um card de produto responsivo com interações suaves e design moderno.

#### Estrutura HTML
```html
<article class="card-produto">
    <div class="card-imagem">
        <span class="desconto">-20%</span>
        <button class="favorito" aria-label="Adicionar aos favoritos">
            <i class="fas fa-heart"></i>
        </button>
        <img src="produto.jpg" alt="Nome do Produto">
    </div>
    <div class="card-conteudo">
        <span class="categoria">Eletrônicos</span>
        <h3>Smartphone XYZ Pro</h3>
        <div class="avaliacao">
            <div class="estrelas">★★★★★</div>
            <span class="contagem">(128 avaliações)</span>
        </div>
        <p class="descricao">O mais recente smartphone com câmera de 108MP e tela de 120Hz.</p>
        <div class="preco">
            <span class="preco-atual">R$ 3.499,90</span>
            <span class="preco-antigo">R$ 4.199,90</span>
        </div>
        <button class="botao-adicionar">
            <i class="fas fa-shopping-cart"></i>
            Adicionar ao Carrinho
        </button>
    </div>
</article>
```

#### Estilos CSS
```css
/* Variáveis */
:root {
    --cor-primaria: #2563eb;
    --cor-erro: #ef4444;
    --cor-texto: #1f2937;
    --cor-texto-secundario: #6b7280;
    --cor-borda: #e5e7eb;
    --sombra: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --transicao: all 0.3s ease;
}

/* Estilos do Card */
.card-produto {
    max-width: 350px;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--sombra);
    transition: var(--transicao);
    font-family: 'Inter', sans-serif;
}

.card-produto:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Imagem do Produto */
.card-imagem {
    position: relative;
    padding-top: 100%;
    overflow: hidden;
}

.card-imagem img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transicao);
}

.card-produto:hover .card-imagem img {
    transform: scale(1.05);
}

/* Conteúdo do Card */
.card-conteudo {
    padding: 1.5rem;
}

.categoria {
    display: inline-block;
    color: var(--cor-primaria);
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

h3 {
    font-size: 1.25rem;
    margin: 0 0 0.75rem;
    color: var(--cor-texto);
}

.avaliacao {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.estrelas {
    color: #fbbf24;
    margin-right: 0.5rem;
}

.contagem {
    font-size: 0.875rem;
    color: var(--cor-texto-secundario);
}

.descricao {
    color: var(--cor-texto-secundario);
    font-size: 0.9375rem;
    margin-bottom: 1.25rem;
    line-height: 1.5;
}

/* Preço */
.preco {
    margin-bottom: 1.25rem;
}

.preco-atual {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--cor-texto);
    margin-right: 0.75rem;
}

.preco-antigo {
    font-size: 1rem;
    color: var(--cor-texto-secundario);
    text-decoration: line-through;
}

/* Botão */
.botao-adicionar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.75rem 1.5rem;
    background-color: var(--cor-primaria);
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transicao);
}

.botao-adicionar i {
    margin-right: 0.5rem;
}

.botao-adicionar:hover {
    background-color: #1d4ed8;
    transform: translateY(-2px);
}

/* Badge de Desconto */
.desconto {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background-color: var(--cor-erro);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    z-index: 1;
}

/* Botão de Favorito */
.favorito {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1;
    transition: var(--transicao);
}

.favorito:hover {
    background-color: #f3f4f6;
    transform: scale(1.1);
}

.favorito.ativo {
    color: var(--cor-erro);
}

/* Responsividade */
@media (max-width: 640px) {
    .card-produto {
        max-width: 100%;
    }
}
```

#### Recursos Adicionais
1. **Ícones**: Usando Font Awesome
   ```html
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
   ```

2. **Fonte**: Google Fonts (Inter)
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   ```

#### Desafios Extras
1. Adicione um contador de itens no carrinho
2. Implemente um lightbox para a imagem do produto
3. Adicione um seletor de cores/tamanhos
4. Crie uma animação de "adicionado ao carrinho"
5. Implemente um sistema de avaliações com estrelas clicáveis

#### Dicas de Acessibilidade
- Use `aria-label` para ícones sem texto
- Garanta contraste adequado
- Adicione `:focus` styles para navegação por teclado
- Use `prefers-reduced-motion` para animações

---

### 2.5 Tópicos Avançados de CSS

#### 2.5.1 CSS Custom Properties Avançadas

##### 2.5.1.1 Temas Dinâmicos
```css
:root[data-theme="light"] {
    --cor-fundo: #ffffff;
    --cor-texto: #1f2937;
    --cor-borda: #e5e7eb;
}

:root[data-theme="dark"] {
    --cor-fundo: #111827;
    --cor-texto: #f3f4f6;
    --cor-borda: #374151;
}

/* Alternar tema com JavaScript */
document.documentElement.setAttribute('data-theme', 'dark');
```

##### 2.5.1.2 Cálculos com Variáveis
```css
:root {
    --espacamento: 1rem;
    --largura-container: 1200px;
    --largura-coluna: calc((var(--largura-container) - (var(--espacamento) * 11)) / 12);
}

.coluna {
    width: var(--largura-coluna);
    margin-right: var(--espacamento);
}

.coluna:last-child {
    margin-right: 0;
}
```

#### 2.5.2 CSS Grid Avançado

##### 2.5.2.1 Subgrid
```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.card {
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 1rem;
}

/* Apenas navegadores que suportam subgrid */
@supports (grid-template-rows: subgrid) {
    .card {
        grid-template-rows: subgrid;
        grid-row: span 3;
    }
}
```

##### 2.5.2.2 Masonry Layout
```css
.masonry {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 10px;
    gap: 1rem;
}

.item {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Alturas variadas para os itens */
.item:nth-child(3n) { grid-row-end: span 45; }
.item:nth-child(2n) { grid-row-end: span 30; }
.item:nth-child(4n) { grid-row-end: span 25; }
```

#### 2.5.3 Animações Performáticas

##### 2.5.3.1 Otimização com will-change
```css
.elemento-otimizado {
    will-change: transform, opacity;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.elemento-otimizado:hover {
    transform: scale(1.05);
    opacity: 0.9;
}
```

##### 2.5.3.2 Animações com Hardware Acceleration
```css
.animate {
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
    will-change: transform;
    transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}
```

#### 2.5.4 Arquitetura CSS

##### 2.5.4.1 Metodologia BEM
```css
/* Bloco */
.card {}

/* Elemento */
.card__imagem {}
.card__titulo {}
.card__botao {}

/* Modificador */
.card--destaque {}
.card--pequeno {}
```

##### 2.5.4.2 Estrutura de Pastas ITCSS
```
src/
├── settings/       # Variáveis globais
├── tools/          # Mixins e funções
├── generic/        # Reset e normalização
├── elements/       # Estilos base para elementos HTML
├── objects/        # Padrões de layout
├── components/     # Componentes da interface
├── utilities/      # Classes utilitárias
└── vendor/         # Estilos de terceiros
```

#### 2.5.5 Ferramentas Modernas

##### 2.5.5.1 PostCSS com Autoprefixer
```json
// package.json
{
  "browserslist": [
    "last 2 versions",
    "> 1%",
    "not dead"
  ]
}
```

##### 2.5.5.2 CSS Modules
```jsx
// Button.module.css
.button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
}

.primary {
    background: #2563eb;
    color: white;
}

// Componente React
import styles from './Button.module.css';

function Button({ children, primary }) {
    return (
        <button 
            className={`${styles.button} ${primary ? styles.primary : ''}`}
        >
            {children}
        </button>
    );
}
```

### 🏆 Projeto 3: Dashboard Responsivo

#### Objetivo
Criar um painel administrativo responsivo com múltiplos componentes reutilizáveis.

#### Estrutura de Componentes
```html
<div class="dashboard">
    <aside class="sidebar">
        <!-- Menu de navegação -->
    </aside>
    <main class="conteudo">
        <header class="topbar">
            <!-- Barra superior com busca e perfil -->
        </header>
        <div class="metricas">
            <!-- Cards de métricas -->
        </div>
        <div class="graficos">
            <!-- Gráficos e visualizações -->
        </div>
        <div class="tabela-dados">
            <!-- Tabela de dados -->
        </div>
    </main>
</div>
```

#### Recursos Avançados
1. **Temas Dinâmicos**
   - Alternância entre tema claro/escuro
   - Preferência do usuário salva em localStorage

2. **Layout Responsivo**
   - Sidebar recolhível
   - Grid adaptativo
   - Tabelas roláveis em mobile

3. **Componentes Reutilizáveis**
   - Cards de métricas
   - Gráficos interativos
   - Formulários validados
   - Modais e tooltips

4. **Otimizações**
   - Carregamento preguiçoso de imagens
   - CSS crítico inline
   - Pré-carregamento de recursos

#### Desafios Técnicos
1. Implementar um sistema de notificações em tempo real
2. Criar um gráfico interativo com Chart.js
3. Adicionar busca e filtros avançados
4. Implementar exportação de dados (CSV/PDF)
5. Criar um tema personalizável

---

## ⚙️ Módulo 3: JavaScript Essencial

### 3.1 Fundamentos do JavaScript Moderno

#### 3.1.1 Novos Recursos do ES6+
```javascript
// Arrow Functions
const soma = (a, b) => a + b;

// Template Literals
const nome = "João";
console.log(`Olá, ${nome}!`);

// Desestruturação
const usuario = { nome: 'Maria', idade: 25 };
const { nome, idade } = usuario;

// Parâmetros Padrão
function saudacao(nome = 'Visitante') {
    return `Olá, ${nome}!`;
}

// Rest/Spread
const numeros = [1, 2, 3];
const novosNumeros = [...numeros, 4, 5];

// Async/Await
async function buscarDados() {
    try {
        const resposta = await fetch('https://api.exemplo.com/dados');
        const dados = await resposta.json();
        console.log(dados);
    } catch (erro) {
        console.error('Erro ao buscar dados:', erro);
    }
}
```

#### 3.1.2 Módulos JavaScript
```javascript
// math.js
export const soma = (a, b) => a + b;
export const subtracao = (a, b) => a - b;

export default function multiplicacao(a, b) {
    return a * b;
}

// app.js
import multiplicacao, { soma, subtracao } from './math.js';

console.log(soma(2, 3)); // 5
console.log(multiplicacao(2, 3)); // 6
```

#### 3.1.3 Trabalhando com o DOM
```javascript
// Seletores modernos
const $ = (seletor, el = document) => el.querySelector(seletor);
const $$ = (seletor, el = document) => [...el.querySelectorAll(seletor)];

// Event delegation
document.addEventListener('click', (event) => {
    if (event.target.matches('.botao-remover')) {
        event.target.closest('.item').remove();
    }
});

// Intersection Observer para lazy loading
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    observer.observe(img);
});
```

Continue praticando esses conceitos para dominar o desenvolvimento web moderno! 🚀

## ⚙️ Módulo 3: JavaScript Essencial (Continuação)

### 3.2 Estruturas de Controle e Funções

#### 3.2.1 Controle de Fluxo
```javascript
// Operador Ternário
const idade = 18;
const podeDirigir = idade >= 18 ? 'Pode dirigir' : 'Não pode dirigir';

// Switch/Case
const diaDaSemana = 1;
let dia;

switch (diaDaSemana) {
    case 0:
        dia = 'Domingo';
        break;
    case 1:
        dia = 'Segunda-feira';
        break;
    default:
        dia = 'Dia inválido';
}
```

#### 3.2.2 Funções Avançadas
```javascript
// Parâmetros com valor padrão
function criarUsuario(nome, idade = 25, habilidades = []) {
    return {
        nome,
        idade,
        habilidades: [...habilidades, 'JavaScript']
    };
}

// Funções de Alta Ordem
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(numero => numero * 2);
const pares = numeros.filter(numero => numero % 2 === 0);
const soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
```

### 3.3 Trabalhando com Objetos e Arrays

#### 3.3.1 Manipulação de Objetos
```javascript
// Propriedades computadas
const chave = 'nome';
const usuario = {
    [chave]: 'João',
    idade: 30,
    // Método abreviado
    saudacao() {
        return `Olá, meu nome é ${this.nome}`;
    }
};

// Desestruturação de objetos
const { nome, idade } = usuario;

// Spread operator para objetos
const novoUsuario = { ...usuario, email: 'joao@exemplo.com' };
```

#### 3.3.2 Métodos de Array
```javascript
const produtos = [
    { id: 1, nome: 'Notebook', preco: 2500, estoque: 5 },
    { id: 2, nome: 'Smartphone', preco: 1500, estoque: 10 },
    { id: 3, nome: 'Tablet', preco: 1200, estoque: 2 },
];

// Encontrar um produto
const produto = produtos.find(p => p.id === 2);

// Filtrar produtos com estoque baixo
const estoqueBaixo = produtos.filter(p => p.estoque < 5);

// Mapear para um novo array
const precos = produtos.map(p => p.preco);

// Reduzir para um único valor
const totalEstoque = produtos.reduce((total, p) => total + p.estoque, 0);
```

### 3.4 Assincronicidade e Promises

#### 3.4.1 Callbacks vs Promises vs Async/Await
```javascript
// Callback Hell (Evitar)
function buscarDados(callback) {
    buscarUsuario((erro, usuario) => {
        if (erro) return callback(erro);
        buscarPedidos(usuario.id, (erro, pedidos) => {
            if (erro) return callback(erro);
            // Mais callbacks...
        });
    });
}

// Com Promises
function buscarDados() {
    return buscarUsuario()
        .then(usuario => buscarPedidos(usuario.id))
        .then(pedidos => processarPedidos(pedidos))
        .catch(erro => console.error('Erro:', erro));
}

// Com Async/Await (Recomendado)
async function buscarDados() {
    try {
        const usuario = await buscarUsuario();
        const pedidos = await buscarPedidos(usuario.id);
        return processarPedidos(pedidos);
    } catch (erro) {
        console.error('Erro:', erro);
        throw erro;
    }
}
```

#### 3.4.2 Fetch API e Tratamento de Erros
```javascript
// Exemplo completo com tratamento de erros
async function buscarDadosDaAPI() {
    try {
        const resposta = await fetch('https://api.exemplo.com/dados');
        
        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }
        
        const dados = await resposta.json();
        return dados;
    } catch (erro) {
        console.error('Falha ao buscar dados:', erro);
        // Retornar um valor padrão ou relançar o erro
        return { dados: [], erro: erro.message };
    }
}
```

### 3.5 Armazenamento no Navegador

#### 3.5.1 localStorage e sessionStorage
```javascript
// Salvar dados
localStorage.setItem('usuario', JSON.stringify({ nome: 'João', tema: 'escuro' }));

// Recuperar dados
const usuario = JSON.parse(localStorage.getItem('usuario')) || {};

// Atualizar tema
function alternarTema() {
    const temaAtual = usuario.tema === 'escuro' ? 'claro' : 'escuro';
    const usuarioAtualizado = { ...usuario, tema: temaAtual };
    localStorage.setItem('usuario', JSON.stringify(usuarioAtualizado));
    aplicarTema(temaAtual);
}

// Remover item
localStorage.removeItem('usuario');

// Limpar tudo
localStorage.clear();
```

### 🏆 Projeto 4: Lista de Tarefas Interativa

#### Objetivo
Criar uma aplicação de lista de tarefas (To-Do List) com funcionalidades completas.

#### Funcionalidades Principais
1. **CRUD de Tarefas**
   - Adicionar nova tarefa
   - Marcar como concluída
   - Editar tarefa existente
   - Remover tarefa
   - Filtrar tarefas (todas/ativas/concluídas)

2. **Persistência Local**
   - Salvar tarefas no localStorage
   - Manter estado ao atualizar a página

3. **Interface Responsiva**
   - Funcional em dispositivos móveis
   - Feedback visual para ações do usuário

#### Estrutura do Código
```javascript
// app.js
class TodoApp {
    constructor() {
        this.tarefas = this.carregarTarefas();
        this.filtroAtual = 'todas';
        this.inicializarElementos();
        this.renderizarTarefas();
        this.configurarEventos();
    }

    inicializarElementos() {
        this.formulario = document.getElementById('form-tarefa');
        this.inputTarefa = document.getElementById('nova-tarefa');
        this.listaTarefas = document.getElementById('lista-tarefas');
        this.contador = document.getElementById('contador');
        this.filtros = document.querySelectorAll('.filtro');
    }

    // ... outros métodos
}

// Iniciar a aplicação
document.addEventListener('DOMContentLoaded', () => {
    const app = new TodoApp();
});
```

#### Desafios Bônus
1. Adicionar arrastar e soltar para reordenar tarefas
2. Implementar busca em tempo real
3. Adicionar categorias ou etiquetas
4. Criar notificações para lembretes
5. Adicionar suporte a temas claro/escuro

### 3.6 Próximos Passos

#### 3.6.1 Boas Práticas de Código
- ESLint e Prettier para formatação consistente
- Nomes descritivos para variáveis e funções
- Funções pequenas e com responsabilidade única
- Comentários explicativos apenas quando necessário
- Testes unitários

#### 3.6.2 Ferramentas Recomendadas
- **Bundlers**: Webpack, Vite, Parcel
- **Linters**: ESLint
- **Formatadores**: Prettier
- **Testes**: Jest, Vitest
- **Versionamento**: Git e GitHub

#### 3.6.3 Recursos para Aprender Mais
- [JavaScript.info](https://javascript.info/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [You Don't Know JS (book series)](https://github.com/getify/You-Dont-Know-JS)
- [JavaScript30](https://javascript30.com/)

Continue praticando construindo projetos reais e explorando os recursos avançados do JavaScript! 🚀

---

## 🎨 Módulo 4: React Básico

### 4.1 Introdução ao React

#### 4.1.1 O que é React?
- Biblioteca JavaScript para construir interfaces de usuário
- Baseado em componentes reutilizáveis
- Virtual DOM para atualizações eficientes
- Ecossistema rico (React Router, Redux, etc.)

#### 4.1.2 Configuração do Ambiente
```bash
# Criar novo projeto com Vite
npm create vite@latest meu-app-react -- --template react
cd meu-app-react
npm install
npm run dev
```

#### 4.1.3 Primeiro Componente
```jsx
// src/components/Saudacao.jsx
function Saudacao({ nome }) {
    return <h1>Olá, {nome}!</h1>;
}

export default Saudacao;

// src/App.jsx
import Saudacao from './components/Saudacao';

function App() {
    return (
        <div className="app">
            <Saudacao nome="João" />
        </div>
    );
}

export default App;
```

### 4.2 Componentes e Props

#### 4.2.1 Criando Componentes Reutilizáveis
```jsx
// src/components/Button.jsx
function Button({ children, variant = 'primary', size = 'medium', ...props }) {
    const baseStyles = 'rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    };

    const sizes = {
        small: 'px-3 py-1.5 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;

// Uso do componente
<Button variant="primary" size="large">
    Clique aqui
</Button>
```

#### 4.2.2 Renderização de Listas
```jsx
function ListaDeTarefas() {
    const [tarefas, setTarefas] = useState([
        { id: 1, texto: 'Aprender React', concluida: false },
        { id: 2, texto: 'Praticar componentes', concluida: true },
        { id: 3, texto: 'Criar um projeto', concluida: false },
    ]);

    const toggleConcluida = (id) => {
        setTarefas(tarefas.map(tarefa =>
            tarefa.id === id 
                ? { ...tarefa, concluida: !tarefa.concluida }
                : tarefa
        ));
    };

    return (
        <ul className="space-y-2">
            {tarefas.map(tarefa => (
                <li 
                    key={tarefa.id}
                    className={`p-4 rounded-lg ${
                        tarefa.concluida ? 'bg-green-50' : 'bg-white'
                    }`}
                >
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={tarefa.concluida}
                            onChange={() => toggleConcluida(tarefa.id)}
                            className="h-5 w-5 text-blue-600 rounded"
                        />
                        <span 
                            className={`ml-3 ${
                                tarefa.concluida ? 'line-through text-gray-500' : 'text-gray-900'
                            }`}
                        >
                            {tarefa.texto}
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    );
}
```

### 4.3 Gerenciamento de Estado com Hooks

#### 4.3.1 useState e useEffect
```jsx
function Contador() {
    const [contador, setContador] = useState(0);
    const [estaAtivo, setEstaAtivo] = useState(false);

    // Efeito para atualizar o título da página
    useEffect(() => {
        document.title = `Contador: ${contador}`;
        
        // Limpeza do efeito
        return () => {
            document.title = 'Aplicativo React';
        };
    }, [contador]); // Apenas executa quando contador mudar

    // Efeito para o intervalo
    useEffect(() => {
        let intervalo;
        
        if (estaAtivo) {
            intervalo = setInterval(() => {
                setContador(prev => prev + 1);
            }, 1000);
        }
        
        return () => clearInterval(intervalo);
    }, [estaAtivo]);

    return (
        <div className="text-center p-6">
            <h2 className="text-2xl font-bold mb-4">Contador: {contador}</h2>
            <div className="space-x-4">
                <Button 
                    onClick={() => setContador(c => c + 1)}
                    variant="primary"
                >
                    Incrementar
                </Button>
                <Button 
                    onClick={() => setEstaAtivo(!estaAtivo)}
                    variant={estaAtivo ? 'danger' : 'secondary'}
                >
                    {estaAtivo ? 'Parar' : 'Iniciar'}
                </Button>
                <Button 
                    onClick={() => setContador(0)}
                    variant="secondary"
                >
                    Reiniciar
                </Button>
            </div>
        </div>
    );
}
```

### 4.4 Formulários Controlados

#### 4.4.1 Formulário de Cadastro
```jsx
function FormularioCadastro() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        termos: false,
    });
    const [erros, setErros] = useState({});
    const [estaEnviando, setEstaEnviando] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const validarFormulario = () => {
        const novosErros = {};
        
        if (!formData.nome.trim()) {
            novosErros.nome = 'Nome é obrigatório';
        }
        
        if (!formData.email) {
            novosErros.email = 'E-mail é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            novosErros.email = 'E-mail inválido';
        }
        
        if (formData.senha.length < 6) {
            novosErros.senha = 'Senha deve ter pelo menos 6 caracteres';
        }
        
        if (!formData.termos) {
            novosErros.termos = 'Você deve aceitar os termos';
        }
        
        setErros(novosErros);
        return Object.keys(novosErros).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validarFormulario()) {
            return;
        }
        
        try {
            setEstaEnviando(true);
            // Simulação de chamada à API
            await new Promise(resolve => setTimeout(resolve, 1500));
            alert('Cadastro realizado com sucesso!');
            // Limpar formulário
            setFormData({
                nome: '',
                email: '',
                senha: '',
                termos: false,
            });
        } catch (erro) {
            console.error('Erro ao cadastrar:', erro);
            alert('Ocorreu um erro ao cadastrar. Tente novamente.');
        } finally {
            setEstaEnviando(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Criar Conta</h2>
            
            <div className="mb-4">
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo
                </label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md ${
                        erros.nome ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {erros.nome && (
                    <p className="mt-1 text-sm text-red-600">{erros.nome}</p>
                )}
            </div>
            
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md ${
                        erros.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {erros.email && (
                    <p className="mt-1 text-sm text-red-600">{erros.email}</p>
                )}
            </div>
            
            <div className="mb-4">
                <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1">
                    Senha
                </label>
                <input
                    type="password"
                    id="senha"
                    name="senha"
                    value={formData.senha}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md ${
                        erros.senha ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {erros.senha && (
                    <p className="mt-1 text-sm text-red-600">{erros.senha}</p>
                )}
            </div>
            
            <div className="mb-4">
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="termos"
                        name="termos"
                        checked={formData.termos}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 rounded"
                    />
                    <label htmlFor="termos" className="ml-2 block text-sm text-gray-700">
                        Concordo com os Termos de Serviço
                    </label>
                </div>
                {erros.termos && (
                    <p className="mt-1 text-sm text-red-600">{erros.termos}</p>
                )}
            </div>
            
            <Button 
                type="submit" 
                variant="primary" 
                className="w-full justify-center"
                disabled={estaEnviando}
            >
                {estaEnviando ? 'Cadastrando...' : 'Cadastrar'}
            </Button>
        </form>
    );
}
```

### 4.5 Próximos Passos

#### 4.5.1 Gerenciamento de Estado Global
- Context API
- Redux Toolkit
- Zustand
- Jotai

#### 4.5.2 Roteamento
- React Router
- Next.js (para roteamento baseado em arquivos)

#### 4.5.3 Requisições HTTP
- Fetch API
- Axios
- React Query
- SWR

#### 4.5.4 Testes
- Jest
- React Testing Library
- Cypress (testes E2E)

### 🏆 Projeto 5: Blog Pessoal com React

#### Objetivo
Criar um blog pessoal com React que permita listar, visualizar e pesquisar postagens.

#### Funcionalidades Principais
1. **Listagem de Posts**
   - Card para cada post com título, resumo e data
   - Paginação ou scroll infinito
   - Filtros por categoria/tag

2. **Página de Detalhes**
   - Conteúdo completo do post
   - Seção de comentários
   - Compartilhamento em redes sociais

3. **Barra de Pesquisa**
   - Busca em tempo real
   - Filtros avançados

4. **Layout Responsivo**
   - Design mobile-first
   - Menu de navegação responsivo
   - Carregamento otimizado de imagens

#### Estrutura de Pastas Recomendada
```
src/
├── assets/           # Imagens, ícones, etc.
├── components/       # Componentes reutilizáveis
│   ├── ui/          # Componentes de UI (Button, Card, etc.)
│   ├── layout/      # Componentes de layout (Header, Footer, etc.)
│   └── blog/        # Componentes específicos do blog
├── pages/           # Componentes de página
├── hooks/           # Custom hooks
├── context/         # Contextos React
├── utils/           # Funções utilitárias
├── services/        # Chamadas à API
└── styles/          # Estilos globais
```

#### Desafios Bônus
1. Adicionar sistema de autenticação
2. Implementar um painel administrativo
3. Adicionar suporte a Markdown para os posts
4. Criar um tema escuro/claro
5. Adicionar testes unitários e de integração

Continue praticando e construindo projetos para solidificar seu conhecimento em React! 🚀

---

## 🚀 Módulo 5: React Avançado

### 5.1 Gerenciamento de Estado Global com Context API

#### 5.1.1 Criando um Contexto de Autenticação
```jsx
// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(null);
    const [carregando, setCarregando] = useState(true);

    // Verificar autenticação ao carregar
    useEffect(() => {
        const usuarioSalvo = localStorage.getItem('usuario');
        if (usuarioSalvo) {
            setUsuario(JSON.parse(usuarioSalvo));
        }
        setCarregando(false);
    }, []);

    const login = async (email, senha) => {
        // Simulação de chamada à API
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Em um app real, isso viria da sua API
        const usuarioFake = { 
            id: '123', 
            nome: 'Usuário Teste', 
            email,
            token: 'token-fake-123'
        };
        
        setUsuario(usuarioFake);
        localStorage.setItem('usuario', JSON.stringify(usuarioFake));
        return usuarioFake;
    };

    const logout = () => {
        setUsuario(null);
        localStorage.removeItem('usuario');
    };

    const valor = {
        usuario,
        carregando,
        login,
        logout,
        estaAutenticado: !!usuario
    };

    return (
        <AuthContext.Provider value={valor}>
            {!carregando && children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
};
```

#### 5.1.2 Usando o Contexto na Aplicação
```jsx
// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// Componente de rota protegida
function RotaProtegida({ children }) {
    const { estaAutenticado, carregando } = useAuth();
    
    if (carregando) {
        return <div>Carregando...</div>;
    }
    
    if (!estaAutenticado) {
        return <Navigate to="/login" />;
    }
    
    return children;
}

// Páginas
function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, senha);
            navigate('/dashboard');
        } catch (erro) {
            setErro('Falha no login. Verifique suas credenciais.');
        }
    };
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
                <h2 className="text-3xl font-bold text-center">Login</h2>
                {erro && <div className="text-red-500 text-center">{erro}</div>}
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            E-mail
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
                            Senha
                        </label>
                        <input
                            id="senha"
                            name="senha"
                            type="password"
                            required
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                        >
                            Entrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

function Dashboard() {
    const { usuario, logout } = useAuth();
    const navigate = useNavigate();
    
    const handleLogout = () => {
        logout();
        navigate('/login');
    };
    
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-xl font-bold text-gray-800">Meu App</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-700">
                                Olá, {usuario?.nome}
                            </span>
                            <button
                                onClick={handleLogout}
                                className="px-3 py-1 text-sm text-red-600 hover:text-red-800"
                            >
                                Sair
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="border-4 border-dashed border-gray-200 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Bem-vindo ao Dashboard</h2>
                        <p className="text-gray-600">
                            Você está autenticado como {usuario?.email}
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}

// Componente principal da aplicação
function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/dashboard"
                        element={
                            <RotaProtegida>
                                <Dashboard />
                            </RotaProtegida>
                        }
                    />
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
```

### 5.2 Gerenciamento de Estado com Redux Toolkit

#### 5.2.1 Configuração da Store
```jsx
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import tarefasReducer from '../features/tarefas/tarefasSlice';

const store = configureStore({
    reducer: {
        tarefas: tarefasReducer,
    },
});

export default store;

// Configuração do Provider no index.js
import { Provider } from 'react-redux';
import store from './app/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
```

#### 5.2.2 Criando um Slice de Tarefas
```jsx
// src/features/tarefas/tarefasSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunks assíncronos
export const buscarTarefas = createAsyncThunk(
    'tarefas/buscarTodas',
    async () => {
        // Simulação de chamada à API
        await new Promise(resolve => setTimeout(resolve, 1000));
        return [
            { id: 1, texto: 'Aprender Redux', concluida: false },
            { id: 2, texto: 'Praticar Redux Toolkit', concluida: true },
        ];
    }
);

const tarefasSlice = createSlice({
    name: 'tarefas',
    initialState: {
        itens: [],
        status: 'idle', // 'idle' | 'carregando' | 'sucesso' | 'falha'
        erro: null
    },
    reducers: {
        adicionarTarefa: (state, action) => {
            const novaTarefa = {
                id: Date.now(),
                texto: action.payload,
                concluida: false
            };
            state.itens.push(novaTarefa);
        },
        alternarTarefa: (state, action) => {
            const tarefa = state.itens.find(t => t.id === action.payload);
            if (tarefa) {
                tarefa.concluida = !tarefa.concluida;
            }
        },
        removerTarefa: (state, action) => {
            state.itens = state.itens.filter(t => t.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(buscarTarefas.pending, (state) => {
                state.status = 'carregando';
            })
            .addCase(buscarTarefas.fulfilled, (state, action) => {
                state.status = 'sucesso';
                state.itens = action.payload;
            })
            .addCase(buscarTarefas.rejected, (state, action) => {
                state.status = 'falha';
                state.erro = action.error.message;
            });
    }
});

export const { adicionarTarefa, alternarTarefa, removerTarefa } = tarefasSlice.actions;
export default tarefasSlice.reducer;
```

#### 5.2.3 Usando o Redux em Componentes
```jsx
// src/features/tarefas/ListaTarefas.jsx
import { useSelector, useDispatch } from 'react-redux';
import { 
    adicionarTarefa, 
    alternarTarefa, 
    removerTarefa,
    buscarTarefas
} from './tarefasSlice';
import { useEffect, useState } from 'react';

export function ListaTarefas() {
    const [novaTarefa, setNovaTarefa] = useState('');
    const { itens, status, erro } = useSelector(state => state.tarefas);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (status === 'idle') {
            dispatch(buscarTarefas());
        }
    }, [status, dispatch]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (novaTarefa.trim()) {
            dispatch(adicionarTarefa(novaTarefa));
            setNovaTarefa('');
        }
    };
    
    if (status === 'carregando') {
        return <div>Carregando tarefas...</div>;
    }
    
    if (status === 'falha') {
        return <div>Erro ao carregar tarefas: {erro}</div>;
    }
    
    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Lista de Tarefas</h2>
            
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="flex">
                    <input
                        type="text"
                        value={novaTarefa}
                        onChange={(e) => setNovaTarefa(e.target.value)}
                        placeholder="Nova tarefa"
                        className="flex-1 px-3 py-2 border rounded-l-md"
                    />
                    <button 
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
                    >
                        Adicionar
                    </button>
                </div>
            </form>
            
            <ul className="space-y-2">
                {itens.map(tarefa => (
                    <li 
                        key={tarefa.id}
                        className="flex items-center justify-between p-3 bg-white rounded-md shadow"
                    >
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={tarefa.concluida}
                                onChange={() => dispatch(alternarTarefa(tarefa.id))}
                                className="h-5 w-5 text-blue-600 rounded"
                            />
                            <span 
                                className={`ml-3 ${
                                    tarefa.concluida ? 'line-through text-gray-500' : 'text-gray-900'
                                }`}
                            >
                                {tarefa.texto}
                            </span>
                        </div>
                        <button
                            onClick={() => dispatch(removerTarefa(tarefa.id))}
                            className="text-red-600 hover:text-red-800"
                        >
                            Remover
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
```

### 5.3 Roteamento com React Router v6

#### 5.3.1 Configuração de Rotas Aninhadas
```jsx
// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex space-x-8">
                            <Link to="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                                Início
                            </Link>
                            <Link to="/sobre" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700">
                                Sobre
                            </Link>
                            <Link to="/produtos" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700">
                                Produtos
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

function Home() {
    return <h2 className="text-2xl font-bold">Bem-vindo à Página Inicial</h2>;
}

function Sobre() {
    return <h2 className="text-2xl font-bold">Sobre Nós</h2>;
}

function Produtos() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Nossos Produtos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link 
                    to="1" 
                    className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                    <h3 className="font-semibold">Produto 1</h3>
                    <p className="text-sm text-gray-600">Descrição do produto 1</p>
                </Link>
                <Link 
                    to="2" 
                    className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                    <h3 className="font-semibold">Produto 2</h3>
                    <p className="text-sm text-gray-600">Descrição do produto 2</p>
                </Link>
                <Link 
                    to="3" 
                    className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                    <h3 className="font-semibold">Produto 3</h3>
                    <p className="text-sm text-gray-600">Descrição do produto 3</p>
                </Link>
            </div>
        </div>
    );
}

function DetalheProduto() {
    const { id } = useParams();
    
    // Em uma aplicação real, você buscaria os dados do produto por ID
    const produto = {
        1: { nome: 'Produto 1', preco: 'R$ 99,90', descricao: 'Descrição detalhada do produto 1' },
        2: { nome: 'Produto 2', preco: 'R$ 149,90', descricao: 'Descrição detalhada do produto 2' },
        3: { nome: 'Produto 3', preco: 'R$ 199,90', descricao: 'Descrição detalhada do produto 3' },
    }[id] || { nome: 'Produto não encontrado', preco: '', descricao: '' };
    
    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
            <Link 
                to="/produtos" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
            >
                ← Voltar para produtos
            </Link>
            <h1 className="text-3xl font-bold mb-4">{produto.nome}</h1>
            <p className="text-2xl text-gray-800 font-semibold mb-4">{produto.preco}</p>
            <p className="text-gray-700">{produto.descricao}</p>
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Adicionar ao Carrinho
            </button>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="sobre" element={<Sobre />} />
                    <Route path="produtos" element={<Produtos />} />
                    <Route path="produtos/:id" element={<DetalheProduto />} />
                    <Route path="*" element={<div>Página não encontrada</div>} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
```

### 5.4 Próximos Passos

#### 5.4.1 Testes em React
- Testes unitários com Jest e React Testing Library
- Testes de integração
- Testes E2E com Cypress
- Mocks e testes assíncronos

#### 5.4.2 Otimização de Performance
- React.memo
- useMemo e useCallback
- Code Splitting e Lazy Loading
- Virtualização de listas

#### 5.4.3 Padrões Avançados
- Render Props
- Higher-Order Components (HOC)
- Hooks Customizados
- Compound Components

### 🏆 Projeto 6: E-commerce Completo

#### Objetivo
Desenvolver uma loja virtual completa com carrinho de compras, autenticação e pagamento.

#### Funcionalidades Principais
1. **Catálogo de Produtos**
   - Listagem com filtros e ordenação
   - Páginas de detalhes
   - Busca avançada

2. **Carrinho de Compras**
   - Adicionar/remover itens
   - Atualizar quantidades
   - Cálculo de totais
   - Cupons de desconto

3. **Checkout**
   - Fluxo de compra em etapas
   - Formulário de entrega
   - Integração com gateway de pagamento
   - Confirmação de pedido

4. **Área do Cliente**
   - Cadastro e login
   - Histórico de pedidos
   - Lista de desejos
   - Endereços salvos

#### Tecnologias Recomendadas
- **UI:** Tailwind CSS, Headless UI
- **Gerenciamento de Estado:** Redux Toolkit, React Query
- **Roteamento:** React Router v6
- **Formulários:** React Hook Form
- **Validação:** Yup/Zod
- **Testes:** Jest, React Testing Library, Cypress

#### Desafios Bônus
1. Implementar avaliações de produtos
2. Criar um sistema de recomendações
3. Adicionar suporte a múltiplos idiomas (i18n)
4. Implementar um painel administrativo
5. Adicionar suporte a PWA

Continue explorando e aprofundando seus conhecimentos em React para se tornar um desenvolvedor front-end ainda mais completo! 🚀

## 🖥️ Módulo 6: Backend com Node.js e Express

### 6.1 Introdução ao Node.js

#### 6.1.1 O que é Node.js?
- **JavaScript no servidor**
  - **Node.js** permite executar JavaScript fora do navegador, no lado do servidor
  - **V8 Engine**: O mesmo motor que executa JavaScript no Chrome, otimizado para alta performance
  - **Event Loop**: Arquitetura assíncrona que permite lidar com múltiplas operações sem bloquear a thread principal
  - **Módulos nativos**:
    - `fs`: Manipulação de arquivos do sistema
    - `http`: Criação de servidores web
    - `path`: Trabalhar com caminhos de arquivos
    - `crypto`: Funções de criptografia
    - `events`: Implementação do padrão Observer

#### 6.1.2 Configuração do Ambiente
```bash
# Verificar instalação
node --version  # Exibe a versão do Node.js instalada
npm --version   # Exibe a versão do NPM (Node Package Manager)

# Iniciar um projeto Node.js
npm init -y     # Cria um package.json com configurações padrão
```

#### 6.1.3 Módulos e NPM
- **Sistema de Módulos**
  - **CommonJS (require/module.exports)**:
    ```javascript
    // Exportando
    module.exports = { chave: 'valor' };
    // Importando
    const modulo = require('./caminho/do/modulo');
    ```
  - **ES Modules (import/export)**:
    ```javascript
    // Exportando
    export const chave = 'valor';
    // Importando
    import { chave } from './caminho/do/modulo.js';
    ```
  - **package.json**:
    - `dependencies`: Pacotes necessários em produção
    - `devDependencies`: Pacotes apenas para desenvolvimento
    - `scripts`: Comandos personalizados
  - **node_modules/**: Diretório onde os pacotes instalados são armazenados
  - **Gerenciamento de versões**:
    - `^`: Atualizações menores (não quebram compatibilidade)
    - `~`: Apenas correções de bugs
    - Sem prefixo: Versão exata

### 6.2 Fundamentos do Express.js

#### 6.2.1 Configuração Básica
```javascript
// Importa o framework Express
const express = require('express');
// Cria uma instância do aplicativo Express
const app = express();

// Middleware para processar JSON no corpo das requisições
// Permite que o servidor entenda dados JSON enviados no corpo das requisições
app.use(express.json());

// Define uma rota GET para o caminho raiz ('/')
// req: objeto que contém informações da requisição
// res: objeto usado para enviar a resposta ao cliente
app.get('/', (req, res) => {
  // Envia uma resposta em formato JSON
  res.json({ 
    message: 'API funcionando!',
    status: 'online',
    timestamp: new Date().toISOString()
  });
});

// Define a porta em que o servidor irá rodar
// process.env.PORT permite que o servidor use a porta definida
// no ambiente (útil em produção) ou 3000 como padrão
const PORT = process.env.PORT || 3000;

// Inicia o servidor e fica "escutando" na porta especificada
app.listen(PORT, () => {
  console.log(`🟢 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📡 Modo: ${process.env.NODE_ENV || 'development'}`);
});
```

#### 6.2.2 Rotas e Controladores
```javascript
// routes/users.js
const express = require('express');
// Cria um novo roteador para agrupar rotas relacionadas
const router = express.Router();

/**
 * Rota: GET /api/users
 * Descrição: Retorna uma lista de usuários
 * Acesso: Público
 */
router.get('/', (req, res) => {
  // Em uma aplicação real, isso viria de um banco de dados
  const users = [
    { id: 1, name: 'Usuário 1', email: 'user1@example.com' },
    { id: 2, name: 'Usuário 2', email: 'user2@example.com' }
  ];
  
  // Envia a resposta com status 200 (OK) e os dados em JSON
  res.status(200).json({
    success: true,
    count: users.length,
    data: users
  });
});

/**
 * Rota: POST /api/users
 * Descrição: Cria um novo usuário
 * Acesso: Público
 * Corpo da requisição (JSON):
 * {
 *   "name": "Novo Usuário",
 *   "email": "novo@email.com"
 * }
 */
router.post('/', (req, res) => {
  // Extrai dados do corpo da requisição
  const { name, email } = req.body;
  
  // Validação básica
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      error: 'Por favor, forneça nome e email'
    });
  }
  
  // Em uma aplicação real, aqui você salvaria no banco de dados
  const newUser = {
    id: Date.now(), // Gera um ID único baseado no timestamp
    name,
    email,
    createdAt: new Date().toISOString()
  };
  
  // Resposta de sucesso com status 201 (Created)
  res.status(201).json({
    success: true,
    data: newUser
  });
});

// Exporta o roteador para ser usado em outros arquivos
module.exports = router;
```

#### 6.2.3 Middleware no Express
```javascript
// Middleware de exemplo para log de requisições
const requestLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next(); // Chama a próxima função de middleware na pilha
};

// Aplica o middleware globalmente para todas as rotas
app.use(requestLogger);

// Middleware de tratamento de erros
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Algo deu errado no servidor!',
    // Em desenvolvimento, podemos mostrar o erro completo
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

// O middleware de erro deve ser o último a ser adicionado
app.use(errorHandler);
```

### 6.3 Banco de Dados com MongoDB e Mongoose

#### 6.3.1 Configuração do Mongoose
```javascript
// config/database.js
const mongoose = require('mongoose');

/**
 * Conecta ao banco de dados MongoDB
 * A URL de conexão deve estar em uma variável de ambiente (MONGO_URI)
 * Exemplo: mongodb+srv://usuario:senha@cluster0.mongodb.net/nome-do-banco?retryWrites=true&w=majority
 */
const connectDB = async () => {
  try {
    // Conecta ao MongoDB usando a URL fornecida
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,        // Usa o novo parser de URL do MongoDB
      useUnifiedTopology: true,    // Usa o novo mecanismo de descoberta e monitoramento de servidor
      useCreateIndex: true,        // Habilita o createIndex() em vez de ensureIndex()
      useFindAndModify: false      // Desabilita os métodos obsoletos
    });
    
    console.log(`✅ MongoDB Conectado: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`❌ Erro ao conectar ao MongoDB: ${error.message}`.red.bold);
    process.exit(1); // Encerra o processo com falha
  }
};

// Exporta a função de conexão para ser usada no arquivo principal
module.exports = connectDB;
```

#### 6.3.2 Modelos e Schemas
```javascript
// models/User.js
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

// Define o esquema do usuário
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Por favor, informe seu nome'],
      trim: true,
      maxlength: [50, 'O nome não pode ter mais que 50 caracteres'],
      minlength: [3, 'O nome deve ter pelo menos 3 caracteres']
    },
    email: {
      type: String,
      required: [true, 'Por favor, informe seu email'],
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, 'Por favor, informe um email válido']
    },
    password: {
      type: String,
      required: [true, 'Por favor, informe uma senha'],
      minlength: [6, 'A senha deve ter pelo menos 6 caracteres'],
      select: false // Não retorna a senha nas consultas por padrão
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    emailVerificationToken: String,
    isEmailVerified: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true, // Adiciona campos createdAt e updatedAt automaticamente
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Criptografa a senha antes de salvar
userSchema.pre('save', async function(next) {
  // Só executa se a senha foi modificada
  if (!this.isModified('password')) return next();
  
  // Gera o salt e faz o hash da senha
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  
  next();
});

// Método para comparar senhas
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Cria um índice para melhorar a performance de consultas por email
userSchema.index({ email: 1 });

// Exporta o modelo para ser usado em outros arquivos
module.exports = mongoose.model('User', userSchema);
```

#### 6.3.3 Operações Básicas com Mongoose
```javascript
// Exemplo de operações CRUD com o modelo User
const User = require('./models/User');

// Criar usuário
const createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    return { success: true, data: user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Buscar usuário por ID
const getUserById = async (id) => {
  return await User.findById(id).select('-password');
};

// Atualizar usuário
const updateUser = async (id, updateData) => {
  return await User.findByIdAndUpdate(
    id,
    { $set: updateData },
    { new: true, runValidators: true }
  ).select('-password');
};

// Deletar usuário (soft delete)
const deleteUser = async (id) => {
  return await User.findByIdAndUpdate(
    id,
    { isActive: false },
    { new: true }
  );
};

// Listar usuários com paginação
const getUsers = async (page = 1, limit = 10) => {
  const startIndex = (page - 1) * limit;
  
  const [total, users] = await Promise.all([
    User.countDocuments({ isActive: true }),
    User.find({ isActive: true })
      .select('-password')
      .limit(limit)
      .skip(startIndex)
      .sort({ createdAt: -1 })
  ]);
  
  const totalPages = Math.ceil(total / limit);
  
  return {
    success: true,
    count: users.length,
    total,
    totalPages,
    currentPage: page,
    data: users
  };
};
```

### 6.4 Autenticação e Segurança

#### 6.4.1 JWT (JSON Web Tokens)
```javascript
// middleware/auth.js
const jwt = require('jsonwebtoken');

const protect = async (req, res, next) => {
  let token;
  
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Obter o token do header
      token = req.headers.authorization.split(' ')[1];
      
      // Verificar token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Obter usuário do token
      req.user = await User.findById(decoded.id).select('-password');
      
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Não autorizado' });
    }
  }
  
  if (!token) {
    res.status(401).json({ message: 'Não autorizado, sem token' });
  }
};

module.exports = { protect };
```

### 6.5 Deploy e Boas Práticas

#### 6.5.1 Variáveis de Ambiente
```env
# .env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
JWT_SECRET=seu_segredo_aqui
```

#### 6.5.2 Configuração para Produção
```javascript
// server.js (adição para produção)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
  });
}
```

### 🏆 Projeto 7: API RESTful para Rede Social

#### Objetivos
- Criar uma API completa para uma rede social
- Implementar autenticação JWT
- Criar CRUD para posts e comentários
- Adicionar funcionalidades de seguir/curtir

#### Tecnologias Recomendadas
- Node.js e Express
- MongoDB e Mongoose
- JWT para autenticação
- Bcrypt para hashing de senhas
- Helmet e CORS para segurança
- Joi para validação

#### Estrutura de Pastas
```
backend/
├── config/
│   └── database.js
├── controllers/
│   ├── authController.js
│   ├── postController.js
│   └── userController.js
├── middleware/
│   ├── auth.js
│   └── error.js
├── models/
│   ├── Post.js
│   └── User.js
├── routes/
│   ├── auth.js
│   ├── posts.js
│   └── users.js
├── .env
├── .gitignore
├── package.json
└── server.js
```

#### Desafios Bônus
1. **Upload de Imagens**
   - Configurar upload de imagens para perfil e posts
   - Usar Cloudinary ou AWS S3 para armazenamento

2. **Notificações em Tempo Real**
   - Implementar WebSockets com Socket.io
   - Notificar usuários sobre novos seguidores e interações

3. **Documentação da API**
   - Criar documentação com Swagger
   - Incluir exemplos de requisições e respostas

4. **Testes Automatizados**
   - Escrever testes unitários com Jest
   - Implementar testes de integração com Supertest

5. **Rate Limiting e Cache**
   - Adicionar limitação de requisições
   - Implementar cache com Redis para melhor desempenho

### Próximos Passos
- Aprender sobre microsserviços
- Explorar GraphQL como alternativa ao REST
- Aprofundar-se em segurança de APIs
- Estudar arquitetura de software para backend

Continue expandindo suas habilidades de backend para se tornar um desenvolvedor full-stack completo! 🚀

## 🚀 Módulo 7: Desenvolvimento Full-Stack com Next.js

### 7.1 Introdução ao Next.js

#### 7.1.1 O que é Next.js?
Next.js é um framework React de código aberto criado pela Vercel que permite desenvolver aplicações web rápidas e otimizadas para produção. Ele resolve vários desafios comuns no desenvolvimento web moderno:

- **Renderização Híbrida**:
  - **SSR (Server-Side Rendering)**: Páginas são renderizadas no servidor a cada requisição, ideal para conteúdo dinâmico
  - **SSG (Static Site Generation)**: Páginas são geradas no build, perfeitas para conteúdo estático
  - **ISR (Incremental Static Regeneration)**: Páginas estáticas que podem ser atualizadas periodicamente

- **Roteamento Intuitivo**:
  - Sistema baseado em pastas (não é necessário instalar bibliotecas adicionais)
  - Rotas dinâmicas com parâmetros (ex: `[id].js`)
  - Navegação client-side sem recarregamento da página

- **Otimizações Automáticas**:
  - Code splitting automático
  - Otimização de imagens
  - Pré-busca de rotas
  - Suporte a TypeScript nativo

#### 7.1.2 Configuração Inicial
Vamos configurar um projeto Next.js do zero:

```bash
# Cria um novo projeto Next.js
# O comando fará algumas perguntas sobre configurações
npx create-next-app@latest meu-app

# Alternativa com TypeScript pré-configurado
npx create-next-app@latest meu-app --typescript

# Navegue até a pasta do projeto
cd meu-app

# Inicia o servidor de desenvolvimento
# Disponível em http://localhost:3000
npm run dev

# Gera os arquivos otimizados para produção
npm run build

# Inicia o servidor de produção (após o build)
npm start
```

**Estrutura Inicial do Projeto:**
```
meu-app/
├── pages/           # Rotas da aplicação
│   ├── api/        # API Routes
│   ├── _app.js     # Configurações globais
│   └── index.js    # Página inicial (/)
├── public/         # Arquivos estáticos
├── styles/         # Estilos globais
└── package.json    # Dependências e scripts
```

**Principais Comandos:**
- `npm run dev`: Inicia o servidor de desenvolvimento com hot-reload
- `npm run build`: Cria uma versão otimizada para produção
- `npm start`: Inicia o servidor de produção (após o build)
- `npm run lint`: Executa o ESLint para verificar erros de código

**Dicas de Configuração Inicial:**
1. Edite `_app.js` para adicionar estilos globais ou providers
2. Use `_document.js` para personalizar o HTML base
3. Configure o `jsconfig.json` para aliases de importação
4. Adicione suporte a Sass ou CSS Modules conforme necessário

**Exemplo de `_app.js` básico:**
```jsx
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Meu Aplicativo Next.js</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
```

### 7.2 Rotas e Navegação no Next.js

O Next.js utiliza um sistema de roteamento baseado em pastas, tornando a criação de rotas intuitiva e sem a necessidade de bibliotecas adicionais.

#### 7.2.1 Sistema de Rotas Baseado em Arquivos

**Como funciona:**
- Cada arquivo dentro da pasta `pages/` se torna automaticamente uma rota
- Pastas criam caminhos na URL
- Nomes de arquivos especiais têm funções específicas

**Exemplos de Mapeamento:**
```
pages/
├── index.js           →  /
├── sobre.js           →  /sobre
├── blog/
│   ├── index.js       →  /blog
│   └── [slug].js      →  /blog/qualquer-coisa
└── user/
    └── [id].js        →  /user/qualquer-id
```

**Tipos de Rotas:**
1. **Rotas Estáticas**: Caminhos fixos como `/sobre` ou `/contato`
2. **Rotas Dinâmicas**: Usam colchetes para parâmetros (ex: `[id].js`)
3. **Rotas Aninhadas**: Criadas através de subpastas
4. **Rotas de API**: Qualquer arquivo em `pages/api/` vira um endpoint de API

#### 7.2.2 Navegação entre Páginas

**Usando o Componente `Link`:**
O Next.js fornece um componente `Link` para navegação client-side, que:
- Evita recarregamentos completos da página
- Pré-carrega automaticamente as rotas no hover
- Oferece transições suaves entre páginas

```jsx
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" passHref>
            <a className="nav-link">Início</a>
          </Link>
        </li>
        <li>
          <Link href="/sobre">
            <a className="nav-link">Sobre Nós</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/primeiro-post">
            <a className="nav-link">Primeiro Post</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
```

**Navegação Programática:**
Para navegação via código (como após um login):

```jsx
import { useRouter } from 'next/router';

function LoginButton() {
  const router = useRouter();

  const handleLogin = async () => {
    // Lógica de autenticação...
    await loginUser();
    
    // Redireciona após login
    router.push('/dashboard');
  };

  return <button onClick={handleLogin}>Entrar</button>;
}
```

#### 7.2.3 Rotas Dinâmicas e Parâmetros

**Capturando Parâmetros:**
```jsx
// pages/blog/[slug].js
import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query; // Acessa o parâmetro da URL

  // Exemplo de uso com dados dinâmicos
  return <h1>Post: {slug}</h1>;
}
```

**Rotas Aninhadas com Múltiplos Parâmetros:**
```
pages/
└── shop/
    └── [category]/
        └── [productId].js  → /shop/eletronicos/123
```

```jsx
// pages/shop/[category]/[productId].js
export default function ProductPage() {
  const router = useRouter();
  const { category, productId } = router.query;
  
  return (
    <div>
      <h1>Produto: {productId}</h1>
      <p>Categoria: {category}</p>
    </div>
  );
}
```

**Dicas de Navegação:**
1. Use `prefetch={false}` em `Link` para desativar o pré-carregamento em links pouco acessados
2. Utilize o hook `useRouter` para acessar informações da rota atual
3. Para links externos, use a tag `<a>` normalmente
4. Use `router.events` para detectar mudanças de rota

**Exemplo de Loading entre Páginas:**
```jsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Carregando: ${url}`);
      // Mostrar loading aqui
    };

    const handleStop = () => {
      // Esconder loading aqui
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return <div>Conteúdo da Página</div>;
}
```

### 7.3 Geração de Páginas

#### 7.3.1 Geração Estática (SSG)
```javascript
// pages/posts/[id].js
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false, // Retorna 404 para páginas não geradas
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <article>
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
```

### 7.4 API Routes

#### 7.4.1 Criando uma API
```javascript
// pages/api/hello.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Olá, mundo!' });
  } else if (req.method === 'POST') {
    const { name } = req.body;
    res.status(200).json({ message: `Olá, ${name}!` });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
```

### 7.5 Autenticação com NextAuth.js

O NextAuth.js é uma biblioteca completa para autenticação no ecossistema Next.js, suportando múltiplos provedores (Google, GitHub, Credenciais, etc.) e estratégias de sessão.

#### 7.5.1 Configuração Básica

**1. Instalação:**
```bash
npm install next-auth@beta
# ou
yarn add next-auth@beta
```

**2. Configuração Inicial**
Crie o arquivo de configuração em `pages/api/auth/[...nextauth].js`:

```javascript
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import { connectToDatabase } from '../../../lib/db';

export default NextAuth({
  // Configuração da sessão
  session: {
    strategy: 'jwt', // Usa JWT para sessão
    maxAge: 30 * 24 * 60 * 60, // 30 dias
  },
  
  // Provedores de autenticação
  providers: [
    // Autenticação por email/senha
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { 
          label: "Email", 
          type: "email",
          placeholder: "seu@email.com"
        },
        password: { 
          label: "Senha", 
          type: "password" 
        }
      },
      async authorize(credentials) {
        // 1. Conecta ao banco de dados
        const client = await connectToDatabase();
        const db = client.db();
        
        // 2. Busca o usuário pelo email
        const user = await db.collection('users').findOne({
          email: credentials.email
        });
        
        // 3. Verifica se o usuário existe
        if (!user) {
          client.close();
          throw new Error('Nenhum usuário encontrado com este email!');
        }
        
        // 4. Verifica a senha
        const isValid = await compare(credentials.password, user.password);
        
        if (!isValid) {
          client.close();
          throw new Error('Senha incorreta!');
        }
        
        // 5. Retorna os dados do usuário (sem a senha)
        client.close();
        return { 
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role || 'user'
        };
      }
    }),
    
    // Exemplo de provedor OAuth (Google)
    // Providers.Google({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // })
  ],
  
  // Callbacks para personalizar o comportamento
  callbacks: {
    // Chamado quando um JWT é criado/atualizado
    async jwt({ token, user, account }) {
      // Adiciona informações do usuário ao token
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      
      // Adiciona access_token do provedor OAuth
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      
      return token;
    },
    
    // Chamado quando uma sessão é verificada
    async session({ session, token }) {
      // Envia as propriedades do token para a sessão do cliente
      if (session?.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      
      return session;
    },
    
    // Chamado quando um usuário faz login
    async signIn({ user, account, profile, email, credentials }) {
      // Lógica personalizada para permitir/negar login
      return true; // Retorna true para permitir o login
    },
    
    // Chamado quando ocorre um erro
    async error(error) {
      console.error('Erro de autenticação:', error);
      return error;
    }
  },
  
  // Páginas personalizadas
  pages: {
    signIn: '/auth/login',    // Página de login personalizada
    error: '/auth/error',     // Página de erro
    signOut: '/auth/logout'   // Página de logout
  },
  
  // Configurações adicionais
  debug: process.env.NODE_ENV === 'development', // Habilita logs no console
  secret: process.env.NEXTAUTH_SECRET, // Chave secreta para criptografia
  useSecureCookies: process.env.NODE_ENV === 'production' // Usa cookies seguros em produção
});
```

#### 7.5.2 Protegendo Rotas

**1. Proteção no Lado do Servidor (SSR):**
```jsx
// pages/dashboard.js
import { getSession } from 'next-auth/react';

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  
  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }
  
  return {
    props: { session },
  };
}

export default function Dashboard({ session }) {
  return (
    <div>
      <h1>Bem-vindo, {session.user.name}!</h1>
      {/* Conteúdo protegido */}
    </div>
  );
}
```

**2. Hook useSession (Client-side):**
```jsx
// components/ProtectedRoute.js
import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProtectedRoute({ children, requiredRole }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if (status === 'loading') return; // Aguarda carregamento
    
    if (!session) {
      // Redireciona para login se não autenticado
      router.push(`/auth/login?callbackUrl=${encodeURIComponent(router.asPath)}`);
    } else if (requiredRole && session.user.role !== requiredRole) {
      // Redireciona se não tiver a role necessária
      router.push('/unauthorized');
    }
  }, [session, status, router, requiredRole]);
  
  if (status === 'loading' || !session) {
    return <div>Carregando...</div>;
  }
  
  if (requiredRole && session.user.role !== requiredRole) {
    return <div>Acesso não autorizado</div>;
  }
  
  return children;
}
```

#### 7.5.3 Páginas de Autenticação

**Login (pages/auth/login.js):**
```jsx
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    
    if (result.error) {
      setError(result.error);
    } else {
      // Redireciona para a página de origem ou para a home
      const callbackUrl = router.query.callbackUrl || '/';
      router.push(callbackUrl);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <h2 className="text-3xl font-extrabold text-center">Entrar na Conta</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Entrar
            </button>
          </div>
        </form>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Não tem uma conta?{' '}
            <a href="/auth/register" className="font-medium text-blue-600 hover:text-blue-500">
              Cadastre-se
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
```

#### 7.5.4 Próximos Passos em Autenticação

##### 1. Proteção de API
Proteja suas rotas de API com middlewares personalizados:

```javascript
// middlewares/auth.js
export const requireAuth = (handler) => async (req, res) => {
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  
  if (!session) {
    return res.status(401).json({ error: 'Não autorizado' });
  }
  
  // Adiciona o ID do usuário à requisição
  req.userId = session.id;
  
  return handler(req, res);
};

// pages/api/dados-sensiveis.js
import { requireAuth } from '../../middlewares/auth';

async function handler(req, res) {
  // Apenas usuários autenticados chegam aqui
  res.status(200).json({ dados: 'Informações confidenciais' });
}

export default requireAuth(handler);
```

##### 2. Refresh Tokens
Implemente renovação automática de tokens:

```javascript
// [...nextauth].js
callbacks: {
  async jwt({ token, user, account }) {
    if (account && user) {
      return {
        ...token,
        accessToken: account.access_token,
        refreshToken: account.refresh_token,
        accessTokenExpires: Date.now() + account.expires_in * 1000,
      };
    }

    // Renova o token se estiver expirando em 5 minutos
    if (Date.now() < token.accessTokenExpires - 300000) {
      return token;
    }

    return refreshAccessToken(token);
  },
  // ... outros callbacks
}

async function refreshAccessToken(token) {
  try {
    const response = await fetch('https://sua-api.com/refresh-token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        refreshToken: token.refreshToken
      })
    });

    const refreshedTokens = await response.json();

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
    };
  } catch (error) {
    return { ...token, error: 'RefreshAccessTokenError' };
  }
}
```

##### 3. Autenticação em Duas Etapas (2FA)

**Backend - Geração de Código 2FA**
```javascript
// lib/2fa.js
import { authenticator } from 'otplib';
import QRCode from 'qrcode';

export async function generate2FASecret(user) {
  const secret = authenticator.generateSecret();
  const otpauth = authenticator.keyuri(user.email, 'SuaAplicação', secret);
  const qrCodeUrl = await QRCode.toDataURL(otpauth);
  
  return { secret, qrCodeUrl };
}

export function verify2FACode(secret, token) {
  return authenticator.verify({ token, secret });
}

// Rota para ativar 2FA
// pages/api/auth/enable-2fa.js
```

**Frontend - Verificação 2FA**
```jsx
// components/TwoFactorAuthSetup.js
import { useState } from 'react';
import Image from 'next/image';

export default function TwoFactorAuthSetup({ qrCodeUrl, secret, onVerify }) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/verify-2fa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, secret })
      });
      
      const data = await response.json();
      if (data.success) {
        onVerify();
      } else {
        setError('Código inválido');
      }
    } catch (err) {
      setError('Erro ao verificar o código');
    }
  };

  return (
    <div className="space-y-4">
      <h3>Configurar Autenticação em Duas Etapas</h3>
      <p>Escaneie o QR Code com seu aplicativo de autenticação:</p>
      <Image 
        src={qrCodeUrl} 
        alt="QR Code para autenticação" 
        width={200} 
        height={200} 
      />
      <p>Ou insira manualmente: <code>{secret}</code></p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="code">Código de Verificação</label>
          <input
            id="code"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="123456"
            required
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Verificar Código</button>
      </form>
    </div>
  );
}
```

##### 4. Login Social com Provedores OAuth

**Configuração no NextAuth**
```javascript
// [...nextauth].js
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: 'offline',
          response_type: 'code',
          scope: 'openid email profile https://www.googleapis.com/auth/calendar'
        }
      }
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'read:user user:email'
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Personalize o processo de login
      if (account.provider === 'google') {
        // Lógica específica para Google
      }
      return true;
    },
    async jwt({ token, account, user }) {
      // Adiciona tokens de acesso à sessão
      if (account) {
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
      }
      return token;
    }
  }
});
```

##### 5. Rate Limiting
Proteja contra ataques de força bruta e abuso de API:

```javascript
// lib/rate-limit.js
import { LRUCache } from 'lru-cache';

const tokenCache = new LRUCache({
  max: 500, // Máximo de itens
  ttl: 1000 * 60 * 5, // 5 minutos
});

export const rateLimit = (options) => {
  return async (req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const token = req.headers.authorization || req.query.token || ip;
    
    // Incrementa a contagem de requisições
    const limit = options.uniqueTokenPerInterval || 500;
    const tokenCounts = tokenCache.get(token) || [0];
    
    if (tokenCounts[0] === 0) {
      tokenCache.set(token, [1]);
    } else {
      tokenCounts[0] += 1;
      tokenCache.set(token, tokenCounts, 1000 * 60 * options.interval);
    }
    
    const currentUsage = tokenCounts[0];
    const isRateLimited = currentUsage >= limit;
    
    // Define os headers de rate limit
    res.setHeader('X-RateLimit-Limit', limit);
    res.setHeader('X-RateLimit-Remaining', isRateLimited ? 0 : limit - currentUsage);
    
    if (isRateLimited) {
      return res.status(429).json({
        error: 'Muitas requisições. Tente novamente mais tarde.'
      });
    }
    
    next();
  };
};

// Uso em uma rota de login
// pages/api/login.js
import { rateLimit } from '../../lib/rate-limit';

const limiter = rateLimit({
  interval: 60 * 1000, // 1 minuto
  uniqueTokenPerInterval: 5, // 5 requisições por token por minuto
});

export default async function handler(req, res) {
  try {
    await limiter(req, res, () => {});
    
    // Lógica de autenticação...
    res.status(200).json({ success: true });
    
  } catch (error) {
    res.status(429).json({ error: 'Muitas requisições. Tente novamente mais tarde.' });
  }
}
```

### Configurações de Segurança Adicionais

#### Headers de Segurança
Adicione headers de segurança no `next.config.js`:

```javascript
// next.config.js
const securityHeaders = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline';
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https:;
      font-src 'self';
      connect-src 'self' https://sua-api.com;
    `.replace(/\s+/g, ' ').trim(),
  },
];

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};
```

#### Monitoramento de Segurança
- **Logs de Segurança**: Registre tentativas de login, alterações de senha e atividades suspeitas
- **Proteção contra Bots**: Implemente reCAPTCHA ou hCaptcha
- **Análise de Segurança**: Use ferramentas como Snyk ou Dependabot para verificar vulnerabilidades
- **Backup e Recuperação**: Tenha um plano de backup e recuperação de desastres

Com essas implementações, seu sistema de autenticação estará muito mais seguro e robusto, pronto para lidar com os desafios de segurança modernos em aplicações web.

Lembre-se de sempre manter suas dependências atualizadas e realizar testes de segurança regularmente para identificar e corrigir possíveis vulnerabilidades.

### 🏆 Projeto 8: E-commerce Full-Stack

#### Objetivos
- Criar um e-commerce completo com Next.js
- Implementar autenticação com NextAuth
- Gerenciar estado global com Context API ou Redux
- Integrar com API de pagamentos (ex: Stripe)
- Criar painel administrativo

#### Tecnologias Recomendadas
- Next.js para frontend e API
- NextAuth para autenticação
- MongoDB/Mongoose para banco de dados
- Tailwind CSS para estilização
- Stripe para pagamentos
- Vercel para deploy

#### Estrutura de Pastas
```
my-ecommerce/
├── components/         # Componentes reutilizáveis
├── context/           # Contextos React
├── lib/               # Utilitários e configurações
├── models/            # Modelos do MongoDB
├── pages/
│   ├── api/          # Rotas da API
│   ├── admin/        # Painel administrativo
│   ├── auth/         # Páginas de autenticação
│   └── ...           # Outras páginas
├── public/           # Arquivos estáticos
├── styles/           # Estilos globais
└── utils/            # Funções utilitárias
```

#### Funcionalidades Principais
1. **Catálogo de Produtos**
   - Listagem com filtros
   - Páginas de detalhes
   - Busca e categorização

2. **Carrinho de Compras**
   - Adicionar/remover itens
   - Atualizar quantidades
   - Cálculo de frete

3. **Checkout**
   - Formulário de entrega
   - Integração com pagamento
   - Confirmação de pedido

4. **Área do Cliente**
   - Histórico de pedidos
   - Gerenciamento de perfil
   - Lista de desejos

5. **Painel Administrativo**
   - Gerenciar produtos
   - Visualizar pedidos
   - Relatórios de vendas

#### Desafios Bônus
1. **Otimização de Performance**
   - Implementar lazy loading de imagens
   - Adicionar PWA capabilities
   - Otimizar bundle size

2. **Testes**
   - Testes unitários com Jest
   - Testes de integração
   - Testes E2E com Cypress

3. **Internacionalização**
   - Suporte a múltiplos idiomas
   - Formatação de moedas
   - Tradução de conteúdo

4. **Segurança Avançada**
   - Rate limiting
   - Proteção contra CSRF
   - Sanitização de inputs

### Próximos Passos
- Aprofundar em arquitetura de software
- Aprender sobre microsserviços
- Explorar GraphQL com Apollo
- Estudar Docker e Kubernetes

Continue sua jornada no desenvolvimento full-stack com Next.js e construa aplicações modernas e de alto desempenho! 🚀

---

## 📖 Glossário

### Termos Técnicos
- **API (Application Programming Interface)**: Conjunto de definições e protocolos para criar e integrar aplicações.
- **SSR (Server-Side Rendering)**: Técnica de renderização de páginas no servidor.
- **JWT (JSON Web Token)**: Padrão para criação de tokens de acesso.
- **CORS (Cross-Origin Resource Sharing)**: Mecanismo que permite recursos restritos em uma página web.
- **HMR (Hot Module Replacement)**: Substituição de módulos em tempo real durante o desenvolvimento.

## 🔧 Ferramentas Recomendadas

### Editores de Código
- [VS Code](https://code.visualstudio.com/) - Editor leve e poderoso
- [WebStorm](https://www.jetbrains.com/webstorm/) - IDE completa para JavaScript
- [Sublime Text](https://www.sublimetext.com/) - Editor rápido e personalizável

### Extensões Úteis
- **VS Code**
  - ESLint
  - Prettier
  - Live Server
  - GitLens
  - Docker
  - Thunder Client (para testar APIs)

## 🎓 Canais de Aprendizado

### YouTube
- [Rocketseat](https://www.youtube.com/rocketseat)
- [Alura](https://www.youtube.com/user/aluracursosonline)
- [Filipe Deschamps](https://www.youtube.com/channel/UCU5JicSrEM5A63jkJ2QvGYw)
- [Willian Justen](https://www.youtube.com/user/willgmbr)

### Cursos Recomendados
- [Rocketseat Ignite](https://www.rocketseat.com.br/ignite)
- [Alura Cursos Online](https://www.alura.com.br/)
- [Udemy - Web Moderno](https://www.udemy.com/course/curso-web/)

## 📚 Bibliografia

### Livros
- "Não Me Faça Pensar" - Steve Krug
- "Código Limpo" - Robert C. Martin
- "Padrões de Projeto" - Erich Gamma
- "O Programador Pragmático" - Andrew Hunt

### Documentações
- [MDN Web Docs](https://developer.mozilla.org/)
- [React Documentation](https://reactjs.org/)
- [Next.js Documentation](https://nextjs.org/)
- [Node.js Documentation](https://nodejs.org/)

## 🔄 Navegação

[⬆️ Voltar para o topo](#-bootcamp-completo-de-desenvolvimento-web-do-zero-ao-nextjs) |
[📋 Ver Sumário](#-sumário) |
[📚 Próximo Módulo](#-módulo-2-frontend-essencial)

---

<div align="center">
  <p>Feito com ❤️ por [Seu Nome]</p>
  <p>
    <a href="https://github.com/seu-usuario" target="_blank">GitHub</a> • 
    <a href="https://linkedin.com/in/seu-usuario" target="_blank">LinkedIn</a> • 
    <a href="https://twitter.com/seu-usuario" target="_blank">Twitter</a>
  </p>
  <p>📅 Última atualização: Outubro de 2023</p>
</div>

<details>
  <summary>📝 Notas de Atualização</summary>
  
  ### Versão 1.0.0 (15/10/2023)
  - Adicionado módulo de autenticação
  - Melhorias na documentação
  - Correções de bugs
  
  ### Versão 0.9.0 (01/10/2023)
  - Versão inicial do bootcamp
  - Módulos básicos adicionados
  - Exemplos práticos incluídos
</details>