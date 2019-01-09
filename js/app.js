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
    'urban': '2d20*5',
    'cwater': '4d8*10',
    'mwater': '1d8*10',
};
const distanceTextField = document.getElementById('distanceBox');

function setup() {
    document.querySelectorAll('.encounter-tile').forEach(function (tile) {
        tile.addEventListener('click', getTerrainDistance);
    });
}

function getTerrainDistance(event) {
    let encounterDistance = roll(encounterDistances[this.id]);
    distanceTextField.textContent = `${encounterDistance}ft/${encounterDistance/5}"`;
}
