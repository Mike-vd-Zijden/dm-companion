const hamburger = document.getElementById('hamburger');
let debug = false;

function setup() {
    document.addEventListener('keyup', hotKeys);
    setupEncounterDistance();
    setupMythic();
    document.getElementById('hamburger').addEventListener('click', toggleHamburger);
}

function hotKeys(event) {
    switch (event.key) {
        case 'e':
            if (!encounterContainer.style.maxHeight) toggleTerrainTiles();
            break;
        case 'm':
            if (!mythicContainer.style.maxHeight) toggleMythic();
            break;
        case 'p':
            toggleHamburger();
            break;
    }
}

function toggleHamburger() {
    if (debug) console.log('toggleHamburger triggered');
    hamburger.classList.toggle('change');

    togglePerceptionMenu();
    toggleRaceMenu();
}
