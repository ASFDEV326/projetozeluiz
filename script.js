document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================================================
       1. MENU MOBILE (BARRA LATERAL)
       ========================================================================== */
    const btnMenu = document.getElementById('btnMenu');
    const navMenu = document.getElementById('navMenu');

    if (btnMenu && navMenu) {
        btnMenu.addEventListener('click', (e) => {
            e.preventDefault(); // Evita comportamentos estranhos no telemóvel
            navMenu.classList.toggle('active');
        });
        
        // Fecha o menu se o utilizador clicar fora dele
        document.addEventListener('click', (event) => {
            if (!navMenu.contains(event.target) && !btnMenu.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });
    }

    /* ==========================================================================
       2. MODO ESCURO (Salva na memória do navegador)
       ========================================================================== */
    const btnDarkMode = document.getElementById('btnDarkMode');
    
    if (btnDarkMode) {
        const iconeDarkMode = btnDarkMode.querySelector('i');
        
        // Verifica se o cliente já tinha ativado o modo escuro na visita anterior
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            if (iconeDarkMode) iconeDarkMode.classList.replace('fa-moon', 'fa-sun');
        }

        btnDarkMode.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que a página salte para o topo ao clicar
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark'); // Salva a preferência
                if (iconeDarkMode) iconeDarkMode.classList.replace('fa-moon', 'fa-sun');
            } else {
                localStorage.setItem('theme', 'light');
                if (iconeDarkMode) iconeDarkMode.classList.replace('fa-sun', 'fa-moon');
            }
        });
    }
});