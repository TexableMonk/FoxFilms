// =======================
// KONFIGURACJA
// =======================

const rawConfigLines1 = window.rawConfigLines1;
const rawConfigLines2 = window.rawConfigLines2;

let usingAlt = false;

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

let config = {
    options: parseLines(rawConfigLines1),
    maxResults: 7,
    caseSensitive: false
};

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
    // usuń wszystkie dzieci bez innerHTML
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
        textSpan.textContent = label; // bez innerHTML
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
// TOGGLE DARK MODE
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
// FAQ MENU
// =======================

let menuOpen = false;
fabBtn?.addEventListener("click", () => {
    menuOpen = !menuOpen;
    fabBtn.classList.toggle("active", menuOpen);
    fabLinks.classList.toggle("show", menuOpen);
    vibrateElement(fabBtn);
    vibrateElement(fabLinks);
});

fabLinks?.querySelectorAll("button").forEach(link => {
    link.addEventListener("click", () => vibrateElement(link));
});


// =======================
// Pole Pomocy
// =======================

const tips = [
  "Tip 1\nPodwójny klik przy animacji ładowania pomija ją.",
  "Tip 2\nW menu masz szybki dostęp do opcji.",
  "Tip 3\nPrzy polu wyszukiwania masz linię, która zmienia kategorię (Filmy/Seriale).",
  "Tip 4\nNa dole po lewym rogu znajduje się przycisk, który losuje film.",
  "Tip 5\nPrzy polu wyszukiwania możesz zmienić motyw (jasny/ciemny)."
];

let tipIndex = 0;
const tipBox = document.getElementById("tipBox");

function showTip() {
  if (!tipBox) return;
  tipBox.textContent = tips[tipIndex];
}

tipBox.addEventListener("click", () => {
  tipIndex = (tipIndex + 1) % tips.length;
  showTip();
});

// Funkcja do włączenia panelu
function openTipsPanel() {
  tipBox.style.display = "flex";
  showTip();
}

// Automatyczne dostosowanie box-shadow przy trybie incognito
function updateTipShadow() {
  if (document.body.classList.contains("dark-mode")) {
    tipBox.style.boxShadow = "0 -10px 40px rgba(255,255,255,0.6)";
  } else {
    tipBox.style.boxShadow = "0 -10px 40px rgba(128,128,128,0.5)";
  }
}

// Wywołanie przy zmianie trybu
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn?.addEventListener("click", updateTipShadow);

// Możesz uruchomić panel np. po kliknięciu 5 przycisku w burger menu
const fabLinks = document.getElementById("fabLinks");
fabLinks?.querySelectorAll("button")[4]?.addEventListener("click", openTipsPanel);


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

// LOADER → MAIN CONTENT (replace previous implementation with this)
let loaderTimeout;
const loader = document.getElementById("loader");
const main = document.getElementById("mainContent");

function showMainImmediate() {
  if (!loader || !main) return;
  // jeśli już ukryty, nic nie rób
  if (loader.style.display === "none") return;

  // rozpocznij fade
  loader.style.transition = "opacity 0.5s ease";
  loader.style.opacity = 0;

  // po animacji faktycznie ukryj loader i pokaż zawartość
  setTimeout(() => {
    loader.style.display = "none";
    main.style.display = "block";
  }, 500);
}

window.addEventListener("load", () => {
  if (!loader || !main) return;

  // standardowy flow: czekasz 4s + fade
  loaderTimeout = setTimeout(() => {
    showMainImmediate();
  }, 4000);

  // dodaj obsługę podwójnego kliknięcia na loader -> natychmiastowy skip
  loader.addEventListener("dblclick", (e) => {
    // zapobiegamy domyślnym akcjom, just in case
    e.preventDefault();
    // anuluj timer, jeśli jeszcze nie wykonany
    if (loaderTimeout) {
      clearTimeout(loaderTimeout);
      loaderTimeout = null;
    }
    // pokaż natychmiast
    showMainImmediate();
  });

  // opcjonalnie: też pozwól na escape jako shortcut (niekonieczne)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (loaderTimeout) { clearTimeout(loaderTimeout); loaderTimeout = null; }
      showMainImmediate();
    }
  });
});