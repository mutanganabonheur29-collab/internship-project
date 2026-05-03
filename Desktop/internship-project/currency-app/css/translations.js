// Universal Language Translation System
const translations = {
    en: {
        // Navigation
        home: "Home",
        converter: "Converter", 
        history: "History",
        details: "Details",
        settings: "Settings",
        
        // Index page
        title: "Money Exchange System",
        subtitle: "Fast and easy currency conversion worldwide.",
        convertButton: "Now you can convert!!",
        
        // Converter page
        currencyConverter: "CURRENCY CONVERTER",
        enterAmount: "Enter Amount",
        swap: "Swap",
        convert: "Convert",
        pleaseEnterAmount: "Please enter amount",
        
        // History page
        conversionHistory: "Conversion History",
        noHistory: "No conversion history yet.",
        clearHistory: "Clear History",
        
        // Details page
        detailsTitle: "CURRENCY EXCHANGE SYSTEM DETAILS",
        purpose: "Purpose",
        purposeText: "This system helps users convert money from one currency to another easily and quickly. It supports currencies like USD, EUR, GBP and RWF.",
        features: "Features",
        feature1: "Real-time currency conversion (basic rates)",
        feature2: "Swap button to exchange currencies", 
        feature3: "Conversion history saved in browser",
        feature4: "Dark mode and settings support",
        feature5: "Simple and user-friendly interface",
        howItWorks: "How it works",
        howItWorksText: "User enters an amount, selects source currency and target currency, then clicks convert. The system calculates the equivalent value using exchange rates.",
        technologies: "Technologies Used",
        tech1: "HTML – structure",
        tech2: "CSS – styling", 
        tech3: "JavaScript – logic and interactivity",
        storage: "Storage",
        storageText: "All history data is saved using browser localStorage (no database required).",
        
        // Settings page
        settingsTitle: "Settings",
        chooseTheme: "Choose Theme:",
        brightness: "Brightness:",
        language: "Language:",
        light: "Light",
        dark: "Dark",
        
        // Footer
        copyright: "© 2026 My Website | All Rights Reserved",
        email: "Email: mutanganabonheur29@gmail.com",
        phone: "Phone: +250 793789395"
    },
    
    rw: {
        // Navigation
        home: "Ahabanza",
        converter: "Uhinduruzo",
        history: "Amateka", 
        details: "Ibisobanro",
        settings: "Igenamiterere",
        
        // Index page
        title: "Sisitemu yo Kuvanga Amadolari",
        subtitle: "Uvanga amafaranga vuba kandi byoroheje ku isi yose.",
        convertButton: "Nonaha ushobora kuvanga!!",
        
        // Converter page
        currencyConverter: "UHINDURUZO W'AMAFARANGA",
        enterAmount: "Shyiramo Igiteranyo",
        swap: "Hindura",
        convert: "Vanga",
        pleaseEnterAmount: "Shyiramo igiteranyo",
        
        // History page
        conversionHistory: "AMATEKA Y'UVANGA",
        noHistory: "Nta mateka yo kuvanga ariho.",
        clearHistory: "Siba Amateka",
        
        // Details page
        detailsTitle: "IBISOBANRO BYA SISITEMU Y'UVANGA AMADOLARI",
        purpose: "Intego",
        purposeText: "Iyi sisitemu ifasha abakoresha kuvanga amafaranga kuva mu mfashanyiza imwe ugera ku iyindi vuba kandi byoroheje. Iyifashisha amadolari nka USD, EUR, GBP na RWF.",
        features: "Ibikorwa",
        feature1: "Uvanga amafaranga vuba (ibiciro bya mbere)",
        feature2: "Buto yo guhindura amafaranga",
        feature3: "Amateka yo kuvanga agaragazwa muri mudasobwa",
        feature4: "Uburyo bwijimye n'igenamiterere",
        feature5: "Interface yoroheje kandi ifasha abakoresha",
        howItWorks: "Ikora iki?",
        howItWorksText: "Ukoresha ashinja igiteranyo, ahitamo imfashanyizo y'imbuka na yo uvangamo, hanyuma akanda kuvanga. Sisitemu ihita ibara ibinganaiko ukoresheje ibiciro byo kuvanga.",
        technologies: "Tekinorozi Zikoreshwa",
        tech1: "HTML – imiterere",
        tech2: "CSS – imigaragarire",
        tech3: "JavaScript - logike n'ubukorikori",
        storage: "Ububiko",
        storageText: "Amateka yose yabikwa muri localStorage ya mudasobwa (nta database y'igikoro ukeneye).",
        
        // Settings page
        settingsTitle: "Igenamiterere",
        chooseTheme: "Hitamo Theme:",
        brightness: "Urumuri:",
        language: "Ururimi:",
        light: "Urumuri",
        dark: "Ubumyi",
        
        // Footer
        copyright: "© 2026 Web site Yanjye | Uburenganzira Bwose",
        email: "Email: mutanganabonheur29@gmail.com",
        phone: "Telefoni: +250 793789395"
    },
    
    fr: {
        // Navigation
        home: "Accueil",
        converter: "Convertisseur",
        history: "Historique",
        details: "Détails", 
        settings: "Paramètres",
        
        // Index page
        title: "Système de Change de Devise",
        subtitle: "Conversion de devise rapide et facile dans le monde entier.",
        convertButton: "Maintenant vous pouvez convertir!!",
        
        // Converter page
        currencyConverter: "CONVERTISSEUR DE DEVISE",
        enterAmount: "Entrez le montant",
        swap: "Échanger",
        convert: "Convertir",
        pleaseEnterAmount: "Veuillez entrer le montant",
        
        // History page
        conversionHistory: "Historique de Conversion",
        noHistory: "Aucun historique de conversion encore.",
        clearHistory: "Effacer l'historique",
        
        // Details page
        detailsTitle: "DÉTAILS DU SYSTÈME DE CHANGE DE DEVISE",
        purpose: "Objectif",
        purposeText: "Ce système aide les utilisateurs à convertir de l'argent d'une devise à une autre facilement et rapidement. Il supporte des devises comme USD, EUR, GBP et RWF.",
        features: "Caractéristiques",
        feature1: "Conversion de devise en temps réel (taux de base)",
        feature2: "Bouton d'échange pour échanger des devises",
        feature3: "Historique de conversion sauvegardé dans le navigateur",
        feature4: "Mode sombre et support des paramètres",
        feature5: "Interface simple et conviviale",
        howItWorks: "Comment ça fonctionne",
        howItWorksText: "L'utilisateur entre un montant, sélectionne la devise source et la devise cible, puis clique sur convertir. Le système calcule la valeur équivalente en utilisant les taux de change.",
        technologies: "Technologies Utilisées",
        tech1: "HTML – structure",
        tech2: "CSS – style",
        tech3: "JavaScript – logique et interactivité",
        storage: "Stockage",
        storageText: "Toutes les données d'historique sont sauvegardées en utilisant localStorage du navigateur (aucune base de données requise).",
        
        // Settings page
        settingsTitle: "Paramètres",
        chooseTheme: "Choisir le thème:",
        brightness: "Luminosité:",
        language: "Langue:",
        light: "Clair",
        dark: "Sombre",
        
        // Footer
        copyright: "© 2026 Mon Site Web | Tous Droits Réservés",
        email: "Email: mutanganabonheur29@gmail.com",
        phone: "Téléphone: +250 793789395"
    }
};

// Universal language functions
function changeLanguage(lang) {
    localStorage.setItem("language", lang);
    applyLanguage();
}

function applyLanguage() {
    let lang = localStorage.getItem("language") || "en";
    let page = getCurrentPage();
    
    // Apply translations based on current page
    switch(page) {
        case 'index':
            applyIndexTranslations(lang);
            break;
        case 'converter':
            applyConverterTranslations(lang);
            break;
        case 'history':
            applyHistoryTranslations(lang);
            break;
        case 'details':
            applyDetailsTranslations(lang);
            break;
        case 'settings':
            applySettingsTranslations(lang);
            break;
    }
    
    // Update language selector if exists
    let langSelector = document.querySelector('select[onchange*="changeLanguage"]');
    if (langSelector) {
        langSelector.value = lang;
    }
}

function getCurrentPage() {
    let path = window.location.pathname;
    let filename = path.split('/').pop();
    return filename.replace('.html', '') || 'index';
}

function t(key) {
    let lang = localStorage.getItem("language") || "en";
    return translations[lang][key] || translations.en[key] || key;
}

// Page-specific translation functions
function applyIndexTranslations(lang) {
    let title = document.querySelector('h1');
    if (title) title.textContent = t('title');
    
    let subtitle = document.querySelector('section p');
    if (subtitle) subtitle.textContent = t('subtitle');
    
    let convertBtn = document.querySelector('button a span');
    if (convertBtn) convertBtn.textContent = t('convertButton');
    
    // Update navigation
    updateNavigation(lang);
}

function applyConverterTranslations(lang) {
    let title = document.querySelector('h1');
    if (title) title.textContent = t('currencyConverter');
    
    let amountInput = document.getElementById('amount');
    if (amountInput) amountInput.placeholder = t('enterAmount');
    
    let swapBtn = document.querySelector('.swap-btn');
    if (swapBtn) swapBtn.textContent = t('swap');
    
    let convertBtn = document.querySelector('button:not(.swap-btn)');
    if (convertBtn && !convertBtn.onclick?.toString().includes('clearHistory')) {
        convertBtn.textContent = t('convert');
    }
    
    // Update navigation
    updateNavigation(lang);
}

function applyHistoryTranslations(lang) {
    let title = document.querySelector('h1');
    if (title) title.textContent = t('conversionHistory');
    
    let clearBtn = document.querySelector('button');
    if (clearBtn) clearBtn.textContent = t('clearHistory');
    
    // Update no history message
    let historyBox = document.getElementById('historyBox');
    if (historyBox && historyBox.innerHTML.includes('No conversion history yet')) {
        historyBox.innerHTML = `<p>${t('noHistory')}</p>`;
    }
    
    // Update navigation
    updateNavigation(lang);
}

function applyDetailsTranslations(lang) {
    let title = document.querySelector('h1');
    if (title) title.textContent = t('detailsTitle');
    
    // Update all headings and text content
    let headings = document.querySelectorAll('h2');
    headings.forEach((h2, index) => {
        if (h2.textContent.includes('Purpose')) h2.textContent = t('purpose');
        else if (h2.textContent.includes('Features')) h2.textContent = t('features');
        else if (h2.textContent.includes('How it works')) h2.textContent = t('howItWorks');
        else if (h2.textContent.includes('Technologies')) h2.textContent = t('technologies');
        else if (h2.textContent.includes('Storage')) h2.textContent = t('storage');
    });
    
    // Update paragraphs
    let paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
        if (p.textContent.includes('This system helps users')) {
            p.textContent = t('purposeText');
        }
    });
    
    // Update list items
    let listItems = document.querySelectorAll('li');
    listItems.forEach((li, index) => {
        if (li.textContent.includes('Real-time currency')) li.textContent = t('feature1');
        else if (li.textContent.includes('Swap button')) li.textContent = t('feature2');
        else if (li.textContent.includes('Conversion history')) li.textContent = t('feature3');
        else if (li.textContent.includes('Dark mode')) li.textContent = t('feature4');
        else if (li.textContent.includes('Simple and user')) li.textContent = t('feature5');
    });
    
    // Update navigation
    updateNavigation(lang);
}

function applySettingsTranslations(lang) {
    let title = document.getElementById('title');
    if (title) title.textContent = t('settingsTitle');
    
    let themeText = document.getElementById('themeText');
    if (themeText) themeText.textContent = t('chooseTheme');
    
    let brightText = document.getElementById('brightText');
    if (brightText) brightText.textContent = t('brightness');
    
    let langText = document.getElementById('langText');
    if (langText) langText.textContent = t('language');
    
    // Update select options
    let themeOptions = document.querySelectorAll('select[onchange*="changeTheme"] option');
    themeOptions.forEach(option => {
        if (option.value === 'light') option.textContent = t('light');
        else if (option.value === 'dark') option.textContent = t('dark');
    });
    
    // Update navigation
    updateNavigation(lang);
}

function updateNavigation(lang) {
    let navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link, index) => {
        if (link.href.includes('index.html')) link.textContent = t('home');
        else if (link.href.includes('converter.html')) link.textContent = t('converter');
        else if (link.href.includes('history.html')) link.textContent = t('history');
        else if (link.href.includes('details.html')) link.textContent = t('details');
        else if (link.href.includes('settings.html')) link.textContent = t('settings');
    });
}

function applyFooterTranslations(lang) {
    let copyright = document.querySelector('footer p');
    if (copyright && copyright.textContent.includes('©')) {
        copyright.textContent = t('copyright');
    }
    
    let email = document.querySelector('footer p');
    if (email && email.textContent.includes('Email:')) {
        email.textContent = t('email');
    }
    
    let phone = document.querySelector('footer p');
    if (phone && phone.textContent.includes('Phone:')) {
        phone.textContent = t('phone');
    }
}
