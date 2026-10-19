function toggleLanguage() {
    const enTexts = document.querySelectorAll('.en-text');
    const omTexts = document.querySelectorAll('.om-text');
    const btn = document.getElementById('langBtn');

    // Yoo button 'Afaan Oromoo' jedhu qabaate, gara Oromootti jijjiiri
    if (btn.innerText === 'Afaan Oromoo') {
        enTexts.forEach(el => el.style.display = 'none');
        omTexts.forEach(el => el.style.display = 'block');
        btn.innerText = 'English';
    } else {
        // Yoo English ta'e, gara Englishitti deebi'i
        enTexts.forEach(el => el.style.display = 'block');
        omTexts.forEach(el => el.style.display = 'none');
        btn.innerText = 'Afaan Oromoo';
    }
}