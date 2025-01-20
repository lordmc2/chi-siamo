// Cambia il contenuto dinamico della pagina
function loadContent(section) {
    const content = document.getElementById('content');

    if (section === 'regole') {
        content.innerHTML = `
            <h1>Regole del Server</h1>
            <ul>
                <li>Non fare griefing.</li>
                <li>Rispetta gli altri giocatori.</li>
                <li>Non utilizzare cheat.</li>
                <li>Segui le istruzioni dello staff.</li>
            </ul>
        `;
    } else if (section === 'home') {
        content.innerHTML = `
            <h1>Ciao, Noi siamo Server</h1>
            <p>Benvenuto nel nostro server web Minecraft. Esplora, gioca e divertiti!</p>
        `;
    } else if (section === 'vota') {
        content.innerHTML = `
            <h1>Vota per il Server</h1>
            <p>Supportaci votando il nostro server sui principali siti di server Minecraft!</p>
        `;
    }
}

// Mostra o nasconde il menu mobile
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('open');
}
