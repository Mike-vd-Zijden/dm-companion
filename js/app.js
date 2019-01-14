let debug = false;

function setup() {
    document.addEventListener('keyup', hotKeys);
    setupEncounterDistance();
    setupMythic();
    setupPerception();
    setupRaceGenerator();
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
            togglePerceptionHamburger();
            break;
    }
}
