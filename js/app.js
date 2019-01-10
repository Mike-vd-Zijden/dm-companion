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

const fateChance = {
    'impossible': {1: -20, 2: 0, 3: 0, 4: 5, 5: 5, 6: 10, 7: 15, 8: 25, 9: 50},
    'noWay': {1: 0, 2: 5, 3: 5, 4: 10, 5: 15, 6: 25, 7: 35, 8: 50, 9: 75},
    'veryUnlikely': {1: 5, 2: 5, 3: 10, 4: 15, 5: 25, 6: 45, 7: 50, 8: 65, 9: 85},
    'unlikely': {1: 5, 2: 10, 3: 15, 4: 20, 5: 35, 6: 50, 7: 55, 8: 75, 9: 90},
    'fiftyfifty': {1: 10, 2: 15, 3: 25, 4: 30, 5: 50, 6: 65, 7: 75, 8: 85, 9: 95},
    'somewhatLikely': {1: 20, 2: 25, 3: 45, 4: 50, 5: 65, 6: 80, 7: 85, 8: 90, 9: 95},
    'likely': {1: 25, 2: 35, 3: 50, 4: 55, 5: 75, 6: 85, 7: 90, 8: 95, 9: 100},
    'veryLikely': {1: 45, 2: 50, 3: 65, 4: 75, 5: 85, 6: 90, 7: 95, 8: 95, 9: 105},
    'nearSureThing': {1: 50, 2: 55, 3: 75, 4: 80, 5: 90, 6: 95, 7: 95, 8: 100, 9: 115},
    'aSureThing': {1: 55, 2: 65, 3: 80, 4: 85, 5: 90, 6: 95, 7: 95, 8: 110, 9: 125},
    'hasToBe': {1: 80, 2: 85, 3: 90, 4: 95, 5: 95, 6: 100, 7: 100, 8: 130, 9: 145},
};

const encounterContainer = document.getElementById('encounterTilesContainer');
const encounterCollapser = document.getElementById('encounterCollapse');
const distanceTextField = document.getElementById('distanceBox');

const perceptionContainer = document.getElementById('perceptionMenuContainer');
const maxDistanceField = document.getElementById('maxDistance');

const mythicContainer = document.getElementById('mythicContainer');
const mythicCollapser = document.getElementById('mythicCollapse');

let chaosFactor = 5;

function setup() {
    document.addEventListener('keyup', hotKeys);

    document.querySelectorAll('.encounter-tile').forEach(function (tile) {
        tile.addEventListener('click', getTerrainDistance);
    });

    document.querySelectorAll('.fate').forEach(function (fate) {
        fate.addEventListener('click', rollFate);
    });

    for (let i = 1; i <= 9; i++) {
        let newDiv = document.createElement('div');
        if (i === 5) {
            newDiv.className = "chaos focus";
        }
        else {
            newDiv.className = "chaos";
        }
        newDiv.id = `chaos${i}`;
        newDiv.textContent = i;
        newDiv.addEventListener('click', setChaosFactor);
        document.getElementById('chaosContainer').append(newDiv);
    }

    encounterCollapser.addEventListener('click', toggleTerrainTiles);
    mythicCollapser.addEventListener('click', toggleMythic);
    document.getElementById('perceptionDistanceContainer').addEventListener('click', toggleHamburger);
    document.getElementById('perceptionInput').addEventListener('keyup', determineMaxSpotDistance);
}

function getTerrainDistance(event) {
    let encounterDistance = roll(encounterDistances[this.id]);
    distanceTextField.textContent = `${encounterDistance}ft/${encounterDistance / 5}"`;
}

function toggleTerrainTiles() {
    if (encounterContainer.style.maxHeight) {
        encounterContainer.style.maxHeight = null;
        encounterCollapser.style.fontSize = '100%';
    }
    else {
        encounterContainer.style.maxHeight = encounterContainer.scrollHeight + "px";
        encounterCollapser.style.fontSize = '200%';
    }

    if (mythicContainer.style.maxHeight) {
        mythicContainer.style.maxHeight = null;
        mythicCollapser.style.fontSize = '100%';
    }
}

function toggleMythic() {
    if (mythicContainer.style.maxHeight) {
        mythicContainer.style.maxHeight = null;
        mythicCollapser.style.fontSize = '100%';
    }
    else {
        mythicContainer.style.maxHeight = mythicContainer.scrollHeight + "px";
        mythicCollapser.style.fontSize = '200%';
    }

    if (encounterContainer.style.maxHeight) {
        encounterContainer.style.maxHeight = null;
        encounterCollapser.style.fontSize = '100%';
    }
}

function toggleHamburger() {
    perceptionContainer.classList.toggle('change');
    if (perceptionContainer.classList.contains('change')) {
        perceptionContainer.style.transform = 'translate(0,0)';
    }
    else {
        perceptionContainer.style.transform = 'translate(-300px, 0px)';
    }
}

function determineMaxSpotDistance(event) {
    let perception = this.value;
    maxDistanceField.textContent = `${perception * 10}ft/${perception * 5}"`;
}

function setChaosFactor(event) {
    document.querySelector('.focus').classList.toggle('focus');
    this.classList.toggle('focus');
    chaosFactor = parseInt(event.target.innerText);
}

function rollFate() {
    let rollResult = roll('1d100');
    let chance = fateChance[this.id][chaosFactor];

    console.log(`Rolled ${rollResult} against chance ${chance}`);
    let fateResult = 'No!';

    if (rollResult <= chance / 5) {
        fateResult = 'Exceptional Yes!';
    }
    else if (rollResult <= chance) {
        fateResult = 'Yes!';
    }
    else if (rollResult > (100 - (100 - chance) / 5)) {
        fateResult = 'Exceptional No!';
    }

    if (eventHappens(rollResult)) {
        fateResult += ' An event is triggered!';
    }

    document.getElementById('result').innerText = fateResult;
}

function eventHappens(rollResult) {
    if (rollResult === 100 || rollResult % 11 === 0) {
        return rollResult % 10 <= chaosFactor;
    }
    else {
        return false;
    }
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
