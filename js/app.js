// ==========================================
// 1. Afaan Jijjiiruu (Language Toggle)
// ==========================================
function toggleLanguage() {
    const enTexts = document.querySelectorAll('.en-text');
    const omTexts = document.querySelectorAll('.om-text');
    const btn = document.getElementById('langBtn');

    if (btn.innerText === 'Afaan Oromoo') {
        enTexts.forEach(el => el.style.display = 'none');
        omTexts.forEach(el => el.style.display = 'block');
        btn.innerText = 'English';
    } else {
        enTexts.forEach(el => el.style.display = 'block');
        omTexts.forEach(el => el.style.display = 'none');
        btn.innerText = 'Afaan Oromoo';
    }
}

// ==========================================
// 2. Dark Mode (Halluu Dukkanaa)
// ==========================================
const themeToggleBtn = document.getElementById('themeToggle');

// Yeroo banamu, ilaalcha duraanii (Local Storage irraa) fudhachuu
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if(themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

function toggleTheme() {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
}

// ==========================================
// 3. Search Bar (Unit Barbaaduu)
// ==========================================
function searchUnits() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.unit-card');

    cards.forEach(card => {
        let title = card.querySelector('.unit-info h2').innerText.toLowerCase();
        let desc = card.querySelector('.unit-info p').innerText.toLowerCase();
        
        if (title.includes(input) || desc.includes(input)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// ==========================================
/


// Service Worker Hojjechiisuu (Offline taasisuuf)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Hubachiisa: '/grade9-natural-science/sw.js' jechuun iddoo website kee GitHub irratti argamu ibsa
        navigator.serviceWorker.register('/grade9-natural-science/sw.js')
        .then(reg => console.log('Service Worker sirriitti hojjeteera!'))
        .catch(err => console.log('Service Worker dogoggore: ', err));
    });
}/ 4. Progress Bar (Hamma Barnootaa Hordofuu)
// ==========================================
// Hubachiisa: Kun yeroo ammaa 0% agarsiisa. 
// Booda (Sadarkaa 2ffaa irratti) yeroo barataan unit xumuru itti dabalna.
function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressPercent');
    
    if(progressBar) {
        // Fakkeenyaaf, ammaaf 0% ta'ee haa hafu
        let completedUnits = localStorage.getItem('completedUnits') || 0;
        let totalUnits = 6;
        let percentage = Math.round((completedUnits / totalUnits) * 100);
        
        progressBar.style.width = percentage + '%';
        progressText.innerText = percentage + '%';
    }
}

// Yeroo website banamu hojjetamuu qabu
document.addEventListener('DOMContentLoaded', () => {
    updateProgressBar();
});


// Service Worker Hojjechiisuu (Offline taasisuuf)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Hubachiisa: '/grade9-natural-science/sw.js' jechuun iddoo website kee GitHub irratti argamu ibsa
        navigator.serviceWorker.register('/grade9-natural-science/sw.js')
        .then(reg => console.log('Service Worker sirriitti hojjeteera!'))
        .catch(err => console.log('Service Worker dogoggore: ', err));
    });
}