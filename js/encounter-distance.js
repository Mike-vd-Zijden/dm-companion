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
