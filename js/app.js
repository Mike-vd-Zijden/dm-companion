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

const perceptionContainer = document.getElementById('perceptionMenuContainer');
const encounterContainer = document.getElementById('encounterTilesContainer');
const distanceTextField = document.getElementById('distanceBox');
const maxDistanceField = document.getElementById('maxDistance');

function setup() {
    document.querySelectorAll('.encounter-tile').forEach(function (tile) {
        tile.addEventListener('click', getTerrainDistance);
    });

    toggleTerrainTiles();
    document.getElementById('encounterCollapse').addEventListener('click', toggleTerrainTiles);
    document.getElementById('perceptionDistanceContainer').addEventListener('click', toggleHamburger);
    document.getElementById('perceptionInput').addEventListener('keyup', determineMaxSpotDistance);
}

function getTerrainDistance(event) {
    let encounterDistance = roll(encounterDistances[this.id]);
    distanceTextField.textContent = `${encounterDistance}ft/${encounterDistance / 5}"`;
}

function toggleTerrainTiles() {
    console.log(encounterContainer.style.display);
    if (encounterContainer.style.maxHeight) {
        encounterContainer.style.maxHeight = null;
    }
    else {
        encounterContainer.style.maxHeight = encounterContainer.scrollHeight + "px";
    }
}

function toggleHamburger() {
    this.classList.toggle('change');
    console.log(perceptionContainer.style.transform);
    if (this.classList.contains('change')) {
        perceptionContainer.style.transform = 'translate(0,0)';
    }
    else {
        perceptionContainer.style.transform = 'translate(-300px, 0px)';
    }
}

function determineMaxSpotDistance (event) {
    console.log(this.value);
    let perception = this.value;
    maxDistanceField.textContent = `${perception*10}ft/${perception*5}"`
}
