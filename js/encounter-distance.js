const encounterDistances = {
    'desert': '6d6*20',
    'dunes': '6d6*10',
    'dforest': '2d6*10',
    'mforest': '2d8*10',
    'sforest': '3d6*10',
    'ghills': '2d10*10',
    'rhills': '2d6*10',
    'moor': '6d6*10',
    'swamp': '2d8*10',
    'mountains': '4d10*10',
    'plains': '6d6*40',
    'urban': '1d12*5',
    'cwater': '4d8*10',
    'mwater': '1d8*10',
};

const encounterContainer = document.getElementById('encounterTilesContainer');
const encounterCollapser = document.getElementById('encounterCollapse');
const distanceTextField = document.getElementById('distanceBox');

function setupEncounterDistance() {
    document.querySelectorAll('.encounter-tile').forEach(function (tile) {
        tile.addEventListener('click', getTerrainDistance);
    });

    encounterCollapser.addEventListener('click', toggleTerrainTiles);
}


function getTerrainDistance(event) {
    if (debug) console.log('getTerrainDistance triggered');
    if (debug) console.log('terrain type id ' + this.id);
    if (debug) console.log('distance roll ' + encounterDistances[this.id]);
    let encounterDistance = roll(encounterDistances[this.id]);
    if (debug) console.log('distance rolled ' + encounterDistance);
    distanceTextField.textContent = `${encounterDistance}ft/${encounterDistance / 5}"`;
}

function toggleTerrainTiles() {
    if (debug) console.log('toggleTerrainTiles triggered');
    if (encounterContainer.style.maxHeight) {
        if (debug) console.log('collapse terrainTiles');
        encounterContainer.style.maxHeight = null;
        encounterCollapser.style.fontSize = '100%';
    }
    else {
        if (debug) console.log('inflate terrainTiles');
        encounterContainer.style.maxHeight = encounterContainer.scrollHeight + "px";
        encounterCollapser.style.fontSize = '200%';
    }

    if (mythicContainer.style.maxHeight) {
        if (debug) console.log('collapse mythic');
        mythicContainer.style.maxHeight = null;
        mythicCollapser.style.fontSize = '100%';
    }
}
