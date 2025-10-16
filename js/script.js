// Função para converter Markdown para HTML
async function convertMarkdownToHtml(markdown) {
    // Usando a API do GitHub para converter Markdown para HTML
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
}

// Função para extrair o TOC do Markdown
function generateTOC(markdown) {
    const lines = markdown.split('\n');
    let toc = '<ul>';
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
            const id = title.toLowerCase().replace(/[^\w]+/g, '-').replace(/^-+|-+$/g, '');
            toc += `<li><a href="#${id}">${title}</a>`;
            currentH2 = id;
        } else if (h3Match && currentH2) {
            const title = h3Match[1].replace(/<[^>]*>?/gm, '');
            const id = title.toLowerCase().replace(/[^\w]+/g, '-').replace(/^-+|-+$/g, '');
            if (!toc.includes('</ul>')) {
                toc += '<ul>';
            }
            toc += `<li><a href="#${id}">${title}</a></li>`;
        }
    }

    // Fechar todas as tags não fechadas
    while (toc.split('<ul>').length > toc.split('</ul>').length) {
        toc += '</ul>';
    }

    return toc + '</ul>';
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
                .replace(/[^\w\s-]/g, '') // Remover caracteres especiais
                .replace(/\s+/g, '-')      // Substituir espaços por hífens
                .replace(/-+/g, '-')        // Remover múltiplos hífens consecutivos
                .replace(/^-|-$/g, '');     // Remover hífens no início e no fim
            heading.id = id;
        }
    });

    return doc.body.innerHTML;
}

// Função para carregar o conteúdo do arquivo Markdown
async function loadMarkdownContent() {
    try {
        // Carregar o arquivo Markdown
        const response = await fetch('content.md');
        if (!response.ok) {
            throw new Error('Erro ao carregar o conteúdo do curso');
        }
        
        const markdown = await response.text();
        
        // Gerar o TOC
        const toc = generateTOC(markdown);
        document.getElementById('toc').innerHTML = toc;
        
        // Converter Markdown para HTML
        const htmlContent = await convertMarkdownToHtml(markdown);
        
        // Adicionar IDs aos cabeçalhos e definir o conteúdo
        const contentWithIds = addIdsToHeadings(htmlContent);
        document.getElementById('content').innerHTML = contentWithIds;
        
        // Adicionar classe 'active' ao link do TOC quando a seção estiver visível
        setupTocHighlighting();
        
    } catch (error) {
        console.error('Erro:', error);
        document.getElementById('content').innerHTML = `
            <div class="error">
                <h2>Erro ao carregar o conteúdo</h2>
                <p>${error.message}</p>
                <p>Por favor, verifique se o arquivo content.md está no diretório correto.</p>
            </div>
        `;
    }
}

// Função para destacar o item do TOC ativo
function setupTocHighlighting() {
    const sections = document.querySelectorAll('h2, h3');
    const navLinks = document.querySelectorAll('#toc a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 100) {
                current = '#' + section.id;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
                // Rolagem suave para o item ativo no TOC
                link.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
        
        // Mostrar/ocultar botão de voltar ao topo
        const backToTop = document.querySelector('.back-to-top');
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    // Rolar suavemente para os links do TOC
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Botão de voltar ao topo
    const backToTop = document.querySelector('.back-to-top');
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Carregar o conteúdo quando a página for carregada
document.addEventListener('DOMContentLoaded', loadMarkdownContent);
