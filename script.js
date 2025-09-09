// =======================
// Konfiguracja linków
// =======================

const rawConfigLines1 = [
"(Spiderman universum)[https://vider.info/vid/+fx5nxvx]",
"(Spiderman poprzez universum)[https://vider.info/vid/+fe8ce5s]",
"(Spiderman homecoming)[https://vider.info/vid/+fncxx8e-]",
"(Spiderman daleko od domu)[https://vider.info/vid/+fsenc18]",
"(Spiderman bez drogi do domu)[https://vider.info/vid/+fscxs5c]",
"(Iron man)[https://vider.info/vid/+fec188e]",
"(Iron man 3)[https://vider.info/vid/+fe1cssv]",
"(Infinity war)[https://cda-hd.cc/31471/avengers-wojna-bez-granic-avengers-infinity-war-2018-online/]",
"(Avengers end game)[https://cda-hd.cc/38450/avengers-koniec-gry-avengers-endgame-2019-online/]",
"(Angry birds)[https://vider.info/vid/+fe11exm]",
"(Angry birds 2)[https://vider.info/vid/+fe118mx]",
"(Spongebob plankton film)[https://netfree.cc/mobile/home]",
"(Spongebob sandy w akcji)[https://netfree.cc/mobile/home]",
"(Spongebob film)[https://vider.love/vid/+fevn8nv]",
"(Spongebob na suchym lądzie)[https://vider.info/vid/+fem5xx5]",
"(List do M)[https://videa.hu/videok/film-animacio/listy.do.m.2011.pl.720p.bdrip.xvid.ac3-elite1.avi-komedia-lengyel-mikoaj-QMOQZ4TtUUOYOQFj]",
"(List do M 2)[https://videa.hu/l/mlt/dt6ggL3isiTSCcPr?po=0&pl=0]",
"(List do M 3)[https://videa.hu/l/mlt/SDBdC5wd3ZwsJnrO?po=1&pl=0]",
"(List do M 4)[https://videa.hu/l/mlt/cDOvcJN7IWUj7e9N?po=2&pl=0]",
"(List do M 5)[https://pl.vider-info.pl/ca%C5%82y-film/61303-Listy-do-M-5-HDRip-online.html]",
"(Wall-e)[http://vider.info/vid/+fsx5185]",
"(Sonik szybki jak błyskawica)[https://vider.info/vid/+fs5558s]",
"(Sonik szybki jak błyskawica 2)[https://vider.info/vid/+fs5cvmc]",
"(Sonik szybki jak błyskawica 3)[https://vider.info/vid/+fec5888]",
"(Super mario bros film)[https://vider.love/vid/+fec58mx]",
"(Jumanji)[https://vider.info/vid/+fnvcssv]",
"(Jumanji następny poziom)[https://vider.info/vid/+fee5nen]",
"(Twisters)[https://vider.info/vid/+fe8vmvx]",
"(Kaskader)[https://vider.info/vid/+fe8x85n]",
"(Searching)[https://www.cda.pl]",
"(Mulan)[https://vider.info/vid/+femevcc]",
"(Między nami misiami)[https://www.cda.pl/video/61688631c]",
"(Noc w muzeum)[https://vider.info/vid/+fn11se8]",
"(Noc w muzeum 2)[https://vider.info/vid/+fs18smm]",
"(Noc w muzeum 3)[https://www.cda.pl/video/1189799697]",
"(Pinokio)[https://vider.info/vid/+fe1x8cc]",
"(Jak zostałem superbohaterem)[https://vider.info/vid/+fsexve8]",
"(Łut szczęścia)[https://vider.love/vid/+fscvn88]",
"(Małpi król)[https://vider.info/vid/+fes5ev8]",
"(Naprzód)[https://vider.info/vid/+fenxmsn]",
"(Lego przygoda)[https://vider.info/vid/+f8s1me]",
"(Lego przygoda 2)[https://vider.info/vid/+fxxxns8]",
"(Kraina cudów)[https://vider.info/vid/+fe15881]",
"(Dzieciak który został Królem)[https://ebd.cda.pl/620x368/1286857444]",
"(Krzysiu gdzie jesteś)[https://vider.info/vid/+fsx1ce1]",
"(Smerfy poszukiwacze zaginionej wioski)[https://vider.info/vid/+fem8x81]",
"(Smerfy)[https://vider.info/vid/+fenme1e]",
"(Godzilla i kong)[http://vider.info/vid/+fee5vx1]",
"(Avatar istota wody)[http://vider.info/vid/+fe15551]",
"(Pan wilk i spółka)[https://vider.info/vid/+fscmve1]",
"(O psie który jeździł koleją)[https://vider.info/vid/+feemncm]",
"(Super pies i turbo kot)[https://vider.info/vid/+fsn8xxs]",
"(Był sobie pies)[https://vider.info/vid/+fe8esvx]",
"(Był sobie pies 2)[https://vider.info/vid/+fe1xes8]",
"(Mufasa Król lew)[https://vider.info/vid/+fe1cx58]",
"(Ferdinand)[https://vider.info/vid/+fes1n11]",
"(Flow)[http://vider.info/vid/+fe1x1em]",
"(Piotruś królik)[https://vider.info/vid/+fx1v5mv]",
"(Piotruś królik 2 na gigancie)[https://vider.info/vid/+femxe8c]",
"(Coco)[https://vider.info/vid/+fem8nns]",
"(Wyspa psów)[https://vider.info/vid/+fesx1v5]",
"(Człowiek kontra pszczoła)[https://vider.info/dir/+dv5m8mv]",
"(Zróbmy sobie wnuka)[https://vider.info/vid/+fx18nv5]",
"(Wkręceni)[https://www.dailymotion.com/video/x8x0vwu]",
"(Wkręceni 2)[https://vider.info/vid/+fe8cn55]",
"(Poznaj naszą rodzinkę)[https://resetoff.pl/vid/dwqz]",
"(Poznaj naszych rodziców)[https://vider.info/vid/+fscxnec]",
"(What just happend)[https://youtu.be/4Jp4BPti0Y0?feature=shared]",
"(Pół żartem pół serio)[https://www.cda.pl/video/872046952]",
"(Hotel transylwania)[https://vider.info/vid/+fxnmcvs]",
"(Hotel transylwania 2)[https://vider.info/vid/+fxnmcve]",
"(Hotel transylwania 3)[https://vider.info/vid/+fs8m588]",
"(Handlarze)[https://youtu.be/2ikyrav4wd4?feature=shared]",
"(Świąteczna zamiana)[https://youtu.be/CspHcQEJT8M?feature=shared]",
"(Asy bez kasy)[https://youtu.be/Xz2DnNVKqsg?feature=shared]",
"(Jak pokonać kaca)[https://youtu.be/coU4SXcKg7k?feature=shared]",
"(Kogel mogel)[https://youtu.be/DSLvLY8yTMw?feature=shared]",
"(Hrabia Monte Cristo)[https://vider.info/vid/+fnv8xmm]",
"(Opowieści z Narnii Lew czarownica i stara szafa)[https://vider.info/vid/+fenc1xc]",
"(Opowieści z Narnii Książę Kaspian)[https://vider.info/vid/+fesmxx8]",
"(Opowieści z Narnii Podróż wędrowca do świtu)[https://vider.info/vid/+fex5enc]",
"(W pustyni i w puszczy)[https://youtu.be/_EDEGGX3MA8?feature=shared]",
"(Hobbit Niezwykła podróż)[https://vider.info/vid/+fe8ne1]",
"(Hobbit Pustkowie Smauga)[https://vider.info/vid/+fen8sm5]",
"(Hobbit Bitwa pięciu armii)[https://vider.info/vid/+fxnnn5n]",
"(In shadow)[https://youtu.be/j800SVeiS5I?feature=shared]",
"(I pe goat 2)[https://youtu.be/65xLByzT1l0?feature=shared]",
"(Ultimatum)[https://www.cda.pl/video/2182619122]",
"(Kraina lodu)[https://vider.info/vid/+fev1mms]",
"(Minionki)[https://vider.info/vid/+fn58xxc]",
"(Gry dru i minionki)[https://vider.info/vid/+fx58scm]",
"(Minionki wejście gru)[https://vider.info/vid/+fe8xcec]",
"(Minionki pod przykrywką)[https://vider.info/vid/+fe8xc1n]"
];

const rawConfigLines2 = [
"(Serial Kiepscy)[https://www.swiatwedlugkiepskich.pl/]",
"(Świat według Kiepskich)[https://www.swiatwedlugkiepskich.pl/]",
"(Świat według Bundych)[https://vider.info/dir/+dxxecx]",
"(Włatcy móch)[http://www.vidlii.com/playlist?p=XcjgX8x6S0M]",
"(Rodzinka.pl)[https://vod.tvp.pl/seriale,18/rodzinkapl-odcinki,274700]",
"(Biuro the office)[https://vider.info/dir/+dnnvnnv5]",
"(Pora na przygodę)[https://youtu.be/Rsa4x79MjQM?feature=shared]",
"(Przyjaciele)[https://vider.info/dir/+dv1]",
"(Sąsiedzi Pat i Mat)[https://www.cda.pl/Sz-Wito/folder/47153148]",
"(Ranczo)[https://vider.info/dir/+dne1cccv]",
"(Niebezpieczny oddział)[https://vider.info/dir/+dnnx8vve]",
"(Grzmotomocni)[https://vider.info/dir/+dnsns8m5]",
"(Teoria wielkiego podrywu)[https://vider.info/dir/+dnecx]",
"(Różowe lata)[https://vider.info/dir/+dxc1m8]",
"(8 prostch zasad)[https://vider.info/dir/+dnv15x]",
"(Pingwiny z Madagaskaru)[https://vider.info/dir/+dns1x8sx]",
"(Niech żyje król Julian)[https://vider.info/dir/+dnx8nnsv]"
];

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
el.classList.add("result-item", "show");
        return;
    }

list.forEach(({ label, url }, index) => {
    const el = document.createElement("div");
    el.className = "result-item";
    el.title = url;

    const textSpan = document.createElement("span");
    textSpan.textContent = label;
    el.appendChild(textSpan);

    el.addEventListener("click", () => window.open(url, "_blank"));

    results.appendChild(el);

    // efekt slide
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

    // Ripple globalny
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const size = 100;
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.pageX - size / 2) + 'px';
    ripple.style.top = (e.pageY - size / 2) + 'px';
    document.body.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
});

// Tryb incognito
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

// Ripple na buttony goBtn
document.querySelectorAll("#goBtn").forEach(btn => {
    btn.addEventListener("click", function(e) {
        const circle = document.createElement("span");
        circle.classList.add("ripple");
        const rect = this.getBoundingClientRect();
        circle.style.left = `${e.clientX - rect.left}px`;
        circle.style.top = `${e.clientY - rect.top}px`;
        this.appendChild(circle);
        setTimeout(() => circle.remove(), 600);
    });
});

// =====================
// FAQ MENU z dziurą
// =====================

const fabBtn = document.getElementById("fabBtn");
const fabLinks = document.getElementById("fabLinks");

let menuOpen = false;

fabBtn.addEventListener("click", () => {
  menuOpen = !menuOpen;
  fabBtn.classList.toggle("active", menuOpen);
  fabLinks.classList.toggle("show", menuOpen);
});



// =====================
// Animacje
// =====================

function vibrateElement(el) {
  el.classList.add("shake");
  setTimeout(() => {
    el.classList.remove("shake");
  }, 400);
}

// Random button
document.getElementById("randomBtn").addEventListener("click", () => {
  vibrateElement(document.getElementById("randomBtn"));
});

// Menu button (burger)
document.querySelector(".fab-btn").addEventListener("click", () => {
  vibrateElement(document.querySelector(".fab-btn"));
  vibrateElement(document.querySelector(".fab-links"));
});

// Każdy link w menu fab
document.querySelectorAll(".fab-links a").forEach(link => {
  link.addEventListener("click", () => {
    vibrateElement(link);
  });
});




















// Nie zawracaj se gitary, co to w ogóle jest:

document.addEventListener('DOMContentLoaded', () => {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptBtn = document.getElementById('accept-cookies-btn');

    // Sprawdź, czy użytkownik już zaakceptował cookies
    const hasAccepted = localStorage.getItem('cookies-accepted');

    if (!hasAccepted) {
        // Jeśli nie ma zgody, pokaż okienko
        cookieConsent.classList.add('visible');
    }

    acceptBtn.addEventListener('click', () => {
        // Zapisz zgodę w Local Storage
        localStorage.setItem('cookies-accepted', 'true');
        // Ukryj okienko, usuwając klasę 'visible'
        cookieConsent.classList.remove('visible');
    });
});
