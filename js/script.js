// Elementos do DOM
const tocContainer = document.getElementById('tocContainer');
const tocToggle = document.getElementById('tocToggle');
const mobileMenuButton = document.getElementById('mobileMenuButton');
const backToTopButton = document.getElementById('backToTop');
const contentElement = document.getElementById('content');
const tocElement = document.getElementById('toc');

// Estado do menu
let isTocCollapsed = false;
let isMobileMenuOpen = false;

// Função para alternar o menu lateral
function toggleToc() {
    isTocCollapsed = !isTocCollapsed;
    tocContainer.classList.toggle('collapsed', isTocCollapsed);
    
    // Salvar o estado no localStorage
    localStorage.setItem('tocCollapsed', isTocCollapsed);
}

// Função para alternar o menu móvel
function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    const icon = mobileMenuButton.querySelector('.icon');
    
    if (isMobileMenuOpen) {
        tocContainer.style.maxHeight = '1000px';
        mobileMenuButton.setAttribute('aria-expanded', 'true');
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        tocContainer.style.maxHeight = '60px';
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}

// Função para rolar suavemente para uma seção
function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
        const headerOffset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Fechar o menu móvel após clicar em um link (apenas em telas pequenas)
        if (window.innerWidth <= 1024) {
            toggleMobileMenu();
        }
    }
}

// Função para verificar a posição de rolagem e destacar o item ativo
function updateActiveTocItem() {
    const sections = document.querySelectorAll('h2, h3');
    const scrollPosition = window.scrollY + 150; // Offset para melhor visualização
    
    let currentSectionId = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop - 200) {
            currentSectionId = '#' + section.id;
        }
    });
    
    // Remover a classe 'active' de todos os links
    document.querySelectorAll('#toc a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Adicionar a classe 'active' ao link correspondente
    if (currentSectionId) {
        const activeLink = document.querySelector(`#toc a[href="${currentSectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
            
            // Rolagem suave para o item ativo no TOC
            activeLink.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'nearest'
            });
        }
    }
    
    // Mostrar/ocultar o botão de voltar ao topo
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
}

// Função para converter Markdown para HTML
async function convertMarkdownToHtml(markdown) {
    try {
        const response = await fetch('https://api.github.com/markdown', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.github.v3+json'
            },
            body: JSON.stringify({
                text: markdown,
                mode: 'gfm',
                context: 'github/gollum'
            })
        });

        if (!response.ok) {
            throw new Error('Erro ao converter Markdown para HTML');
        }

        return await response.text();
    } catch (error) {
        console.error('Erro ao converter Markdown:', error);
        throw error;
    }
}

// Função para extrair o TOC do Markdown
function generateTOC(markdown) {
    const lines = markdown.split('\n');
    let toc = '';
    let currentH2 = '';
    let inCodeBlock = false;

    for (const line of lines) {
        // Verificar se estamos em um bloco de código
        if (line.trim().startsWith('```')) {
            inCodeBlock = !inCodeBlock;
            continue;
        }

        if (inCodeBlock) continue;

        // Encontrar cabeçalhos
        const h1Match = line.match(/^# (.*)/);
        const h2Match = line.match(/^## (.*)/);
        const h3Match = line.match(/^### (.*)/);

        if (h1Match) {
            // Ignorar o título principal no TOC
            continue;
        } else if (h2Match) {
            const title = h2Match[1].replace(/<[^>]*>?/gm, '');
            const id = title.toLowerCase()
                .replace(/[^\w\s-]/g, '') // Remover caracteres especiais
                .replace(/\s+/g, '-')      // Substituir espaços por hífens
                .replace(/-+/g, '-')        // Remover múltiplos hífens consecutivos
                .replace(/^-|-$/g, '');     // Remover hífens no início e no fim
                
            toc += `</ul></li>`.repeat(Number(!!currentH2));
            toc += `<li><a href="#${id}" class="toc-link">${title}</a><ul class="toc-sublist">`;
            currentH2 = id;
        } else if (h3Match && currentH2) {
            const title = h3Match[1].replace(/<[^>]*>?/gm, '');
            const id = title.toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-')
                .replace(/^-|-$/g, '');
                
            toc += `<li><a href="#${id}" class="toc-link">${title}</a></li>`;
        }
    }

    // Fechar todas as tags não fechadas
    toc += `</ul></li>`.repeat(Number(!!currentH2));
    
    return toc;
}

// Função para adicionar IDs aos cabeçalhos
function addIdsToHeadings(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Adicionar IDs a todos os cabeçalhos
    const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
        if (!heading.id) {
            const id = heading.textContent
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-')
                .replace(/^-|-$/g, '');
            heading.id = id;
            
            // Adicionar link de âncora ao lado dos cabeçalhos
            const anchor = document.createElement('a');
            anchor.href = `#${id}`;
            anchor.className = 'header-anchor';
            anchor.innerHTML = '<i class="fas fa-link" aria-hidden="true"></i>';
            anchor.setAttribute('aria-label', 'Link para esta seção');
            heading.insertBefore(anchor, heading.firstChild);
        }
    });

    return doc.body.innerHTML;
}

// Função para carregar o conteúdo do arquivo Markdown
async function loadMarkdownContent() {
    try {
        // Mostrar indicador de carregamento
        contentElement.innerHTML = `
            <div class="loader">
                <div class="spinner"></div>
                <p>Carregando conteúdo...</p>
            </div>
        `;
        
        // Carregar o arquivo Markdown
        const response = await fetch('content.md');
        if (!response.ok) {
            throw new Error('Erro ao carregar o conteúdo do curso');
        }
        
        const markdown = await response.text();
        
        // Gerar o TOC
        const toc = generateTOC(markdown);
        tocElement.innerHTML = toc;
        
        // Adicionar eventos de clique aos links do TOC
        document.querySelectorAll('#toc a').forEach(link => {
            link.addEventListener('click', scrollToSection);
        });
        
        // Converter Markdown para HTML
        const htmlContent = await convertMarkdownToHtml(markdown);
        
        // Adicionar IDs aos cabeçalhos e definir o conteúdo
        const contentWithIds = addIdsToHeadings(htmlContent);
        contentElement.innerHTML = contentWithIds;
        
        // Adicionar estilos para os links de âncora
        const style = document.createElement('style');
        style.textContent = `
            .header-anchor {
                opacity: 0;
                margin-left: -1.2em;
                padding-right: 0.5em;
                color: var(--primary-color);
                text-decoration: none;
                transition: opacity 0.2s ease;
            }
            
            h1:hover .header-anchor,
            h2:hover .header-anchor,
            h3:hover .header-anchor,
            .header-anchor:focus {
                opacity: 1;
            }
            
            .header-anchor:hover {
                text-decoration: none;
            }
            
            /* Melhorias para acessibilidade */
            .header-anchor:focus {
                opacity: 1;
                outline: 2px solid var(--primary-color);
                outline-offset: 2px;
            }
        `;
        document.head.appendChild(style);
        
        // Restaurar o estado do TOC do localStorage
        const savedTocState = localStorage.getItem('tocCollapsed');
        if (savedTocState === 'true') {
            toggleToc();
        }
        
        // Atualizar o item ativo no TOC
        updateActiveTocItem();
        
    } catch (error) {
        console.error('Erro:', error);
        contentElement.innerHTML = `
            <div class="error">
                <h2>Erro ao carregar o conteúdo</h2>
                <p>${error.message}</p>
                <p>Por favor, verifique se o arquivo content.md está no diretório correto.</p>
            </div>
        `;
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Carregar o conteúdo
    loadMarkdownContent();
    
    // Adicionar eventos
    if (tocToggle) {
        tocToggle.addEventListener('click', toggleToc);
    }
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }
    
    if (backToTopButton) {
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Atualizar o item ativo no TOC durante a rolagem
    window.addEventListener('scroll', updateActiveTocItem);
    
    // Atualizar o estado do menu em telas pequenas
    function handleResize() {
        if (window.innerWidth > 1024) {
            isMobileMenuOpen = false;
            const icon = mobileMenuButton?.querySelector('.icon');
            if (icon) {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
            mobileMenuButton?.setAttribute('aria-expanded', 'false');
        }
    }
    
    window.addEventListener('resize', handleResize);
});
