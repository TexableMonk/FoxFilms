// =======================
// Konfiguracja linków
// =======================
import { rawConfigLines1, rawConfigLines2 } from './links.js';


// =======================
// Bezpieczeństwo
// =======================
if (window.trustedTypes) {
  window.trustedTypes.createPolicy('myPolicy', {
    createHTML: (input) => {
      if (/script|iframe|object|embed/i.test(input)) {
        console.warn('Niebezpieczne HTML zostało zablokowane:', input);
        return '';
      }
      return input;
    },
    createScript: (input) => {
      console.warn('Skrypty inline są blokowane przez Trusted Types');
      return null;
    }
  });
}

// =======================
// Funkcje pomocnicze
// =======================

let usingAlt = false;

function parseLines(lines) {
    return lines.map(line => {
        const match = line.match(/^\((.+?)\)\[(https?:\/\/.+?)\]$/);
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

let config = {
    options: parseLines(rawConfigLines1),
    maxResults: 7,
    caseSensitive: false
};

// =======================
// DOM
// =======================

const input = document.getElementById("input");
const results = document.getElementById("results");
const clearBtn = document.getElementById("clearBtn");
const searchContainer = document.getElementById("searchContainer");
const toggleBtn = document.getElementById("toggleBtn");
const configToggle = document.getElementById("configToggle");
const randomBtn = document.getElementById("randomBtn");
const fabBtn = document.getElementById("fabBtn");
const fabLinks = document.getElementById("fabLinks");

// =======================
// Filtry i wyniki
// =======================

function filterOptions(query) {
    if (!query) return [];
    const search = config.caseSensitive ? query : query.toLowerCase();
    return config.options.filter(({ label }) =>
        (config.caseSensitive ? label : label.toLowerCase()).includes(search)
    ).slice(0, config.maxResults);
}

function renderResults(list) {
    results.innerHTML = "";
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
// Eventy
// =======================

if (input && results && clearBtn) {
    input.addEventListener("input", e => {
        const val = e.target.value.trim();
        updateClearButton();

        const matches = val ? filterOptions(val) : [];
        const shuffled = shuffleArray(matches);
        renderResults(shuffled);

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

document.addEventListener("click", e => {
    if (!e.target.closest(".search-container")) {
        results.hidden = true;
    }

    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const size = 100;
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.pageX - size / 2) + 'px';
    ripple.style.top = (e.pageY - size / 2) + 'px';
    document.body.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
});

if (toggleBtn && searchContainer) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        searchContainer.classList.toggle("dark");
    });
}

// Przełączanie kategorii
if (configToggle) {
    configToggle.addEventListener("click", () => {
        usingAlt = !usingAlt;
        const rawLines = usingAlt ? rawConfigLines2 : rawConfigLines1;
        config.options = parseLines(rawLines);
        input.dispatchEvent(new Event("input"));
    });
}

// Losowy przycisk
if (randomBtn) {
    randomBtn.addEventListener("click", () => {
        const options = parseLines(rawConfigLines1);
        const randomIndex = Math.floor(Math.random() * options.length);
        const randomOption = options[randomIndex];
        window.open(randomOption.url, "_blank");
    });
}

// =====================
// FAQ MENU
// =====================

let menuOpen = false;

if (fabBtn && fabLinks) {
    fabBtn.addEventListener("click", () => {
        menuOpen = !menuOpen;
        fabBtn.classList.toggle("active", menuOpen);
        fabLinks.classList.toggle("show", menuOpen);
    });
}

// =====================
// Animacje
// =====================

function vibrateElement(el) {
    el.classList.add("shake");
    setTimeout(() => {
        el.classList.remove("shake");
    }, 400);
}

if (randomBtn) {
    randomBtn.addEventListener("click", () => {
        vibrateElement(randomBtn);
    });
}
if (fabBtn && fabLinks) {
    fabBtn.addEventListener("click", () => {
        vibrateElement(fabBtn);
        vibrateElement(fabLinks);
    });
    fabLinks.querySelectorAll("button").forEach(link => {
        link.addEventListener("click", () => {
            vibrateElement(link);
        });
    });
}

// =====================
// Loader → main content
// =====================
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const main = document.getElementById("mainContent");
    if (!loader || !main) return;

    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.transition = "opacity 0.5s ease";
        setTimeout(() => {
            loader.style.display = "none";
            main.style.display = "block";
        }, 500);
    }, 4000);
});