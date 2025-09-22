// =======================
// ZMIENNE GLOBALNE
// =======================
const rawConfigLines1 = window.rawConfigLines1;
const rawConfigLines2 = window.rawConfigLines2;

const input = document.getElementById("input");
const results = document.getElementById("results");
const clearBtn = document.getElementById("clearBtn");
const searchContainer = document.getElementById("searchContainer");
const toggleBtn = document.getElementById("toggleBtn");
const configToggle = document.getElementById("configToggle");
const randomBtn = document.getElementById("randomBtn");
const fabBtn = document.getElementById("fabBtn");
const fabLinks = document.getElementById("fabLinks");
const tipPanel = document.getElementById("tipPanel");
const tipText = document.getElementById("tipText");
const tipBtn = document.getElementById("tipBtn");
const loader = document.getElementById("loader");
const mainContent = document.getElementById("mainContent");

// =======================
// KONFIGURACJA
// =======================
let usingAlt = false;
let config = { options: parseLines(rawConfigLines1), maxResults: 7, caseSensitive: false };

function parseLines(lines) {
    return lines.map(line => {
        const match = line.match(/^\((.+?)\)\[(https?:\/\/[^\]]+)\]$/);
        return match ? { label: match[1], url: match[2] } : null;
    }).filter(Boolean);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// =======================
// BEZPIECZEŃSTWO
// =======================
if (window.trustedTypes) {
    window.trustedTypes.createPolicy('myPolicy', {
        createHTML: (input) => {
            if (/script|iframe|object|embed/i.test(input)) {
                console.warn('Niebezpieczne HTML zablokowane:', input);
                return '';
            }
            return input;
        },
        createScript: (input) => {
            console.warn('Inline script zablokowany przez Trusted Types');
            return null;
        }
    });
}

// =======================
// FILTRACJA
// =======================
function filterOptions(query) {
    if (!query) return [];
    const search = config.caseSensitive ? query : query.toLowerCase();
    return config.options.filter(({ label }) =>
        (config.caseSensitive ? label : label.toLowerCase()).includes(search)
    ).slice(0, config.maxResults);
}

function renderResults(list) {
    while (results.firstChild) results.removeChild(results.firstChild);

    if (list.length === 0) {
        results.hidden = true;
        document.body.classList.remove("blur-background");
        return;
    }

    list.forEach(({ label, url }) => {
        const el = document.createElement("div");
        el.className = "result-item";
        el.title = url;

        const textSpan = document.createElement("span");
        textSpan.textContent = label;
        el.appendChild(textSpan);

        el.addEventListener("click", () => window.open(url, "_blank"));

        results.appendChild(el);
        setTimeout(() => el.classList.add("show"), 50);
    });

    results.hidden = false;
    document.body.classList.add("blur-background");
}

function updateClearButton() {
    clearBtn.style.display = input.value.trim() ? "block" : "none";
}

// =======================
// EVENTY SEARCH
// =======================
if (input && results && clearBtn) {
    input.addEventListener("input", e => {
        const val = e.target.value.trim();
        updateClearButton();
        const matches = val ? filterOptions(val) : [];
        renderResults(shuffleArray(matches));

        const exactMatch = matches.find(m => m.label === val);
        const items = results.querySelectorAll(".result-item");
        items.forEach(item => {
            item.classList.remove("pulse-match");
            item.style.backgroundColor = "";
            item.style.color = "";
            if (exactMatch && item.textContent.includes(exactMatch.label)) {
                item.classList.add("pulse-match");
                item.style.color = "white";
            }
        });
    });

    clearBtn.addEventListener("click", () => {
        input.value = "";
        input.focus();
        results.hidden = true;
        clearBtn.style.display = "none";
    });
}

// =======================
// CLICK OUTSIDE + RIPPLE
// =======================
document.addEventListener("click", e => {
    if (!e.target.closest(".search-container")) results.hidden = true;

    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const size = 100;
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.pageX - size / 2) + 'px';
    ripple.style.top = (e.pageY - size / 2) + 'px';
    document.body.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
});

// =======================
// DARK MODE
// =======================
toggleBtn?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    searchContainer.classList.toggle("dark");
});

// =======================
// PRZEŁĄCZANIE KATEGORII
// =======================
configToggle?.addEventListener("click", () => {
    usingAlt = !usingAlt;
    config.options = parseLines(usingAlt ? rawConfigLines2 : rawConfigLines1);
    input.dispatchEvent(new Event("input"));
});

// =======================
// RANDOM BUTTON
// =======================
randomBtn?.addEventListener("click", () => {
    const options = parseLines(rawConfigLines1);
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomOption = options[randomIndex];
    window.open(randomOption.url, "_blank");
    vibrateElement(randomBtn);
});

// =======================
// FAQ MENU + TIP PANEL
// =======================
let menuOpen = false;
let tipIndex = 0;
let tips = [
    "Tip 1: Podwójny klik przy animacji ładowania pomija ją.",
    "Tip 2: W menumasz szybki dostęp do opcji.",
    "Tip 3: Przy polu wyszukiwania masz linię, która zmienia kategorię.",
    "Tip 4: Na dole po lewym rogu znajduje się przycisk, który losuje film.",
    "Tip 5: Przy polu wyszukiwania znajduje się przycisk do zmiany motywu."
];

fabBtn?.addEventListener("click", () => {
    menuOpen = !menuOpen;
    fabBtn.classList.toggle("active", menuOpen);
    fabLinks.classList.toggle("show", menuOpen);

    if (!menuOpen) {
        tipPanel.style.display = "none";
        tipIndex = 0;
    }
});

tipBtn?.addEventListener("click", e => {
    e.stopPropagation();
    tipPanel.style.display = "flex";
    tipText.textContent = tips[tipIndex];
});

tipPanel?.addEventListener("click", () => {
    tipIndex++;
    if (tipIndex >= tips.length) {
        tipPanel.style.display = "none";
        tipIndex = 0;
    } else {
        tipText.textContent = tips[tipIndex];
    }
});

document.addEventListener("click", e => {
    if (!tipPanel.contains(e.target) && e.target !== tipBtn) {
        tipPanel.style.display = "none";
        tipIndex = 0;
    }
});

// =======================
// ANIMACJE
// =======================
function vibrateElement(el) {
    el.classList.add("shake");
    setTimeout(() => el.classList.remove("shake"), 400);
}

// =======================
// LOADER → MAIN CONTENT
// =======================
let loaderTimeout;
function showMainImmediate() {
    if (!loader || !mainContent) return;
    if (loader.style.display === "none") return;

    loader.style.transition = "opacity 0.5s ease";
    loader.style.opacity = 0;

    setTimeout(() => {
        loader.style.display = "none";
        mainContent.style.display = "block";
    }, 500);
}

window.addEventListener("load", () => {
    loaderTimeout = setTimeout(showMainImmediate, 4000);

    loader.addEventListener("dblclick", e => {
        e.preventDefault();
        if (loaderTimeout) { clearTimeout(loaderTimeout); loaderTimeout = null; }
        showMainImmediate();
    });

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") {
            if (loaderTimeout) { clearTimeout(loaderTimeout); loaderTimeout = null; }
            showMainImmediate();
        }
    });
});