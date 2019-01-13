const mythicContainer = document.getElementById('mythicContainer');
const mythicCollapser = document.getElementById('mythicCollapse');

const eventFocusContainer = document.getElementById('eventFocus');
const eventActionContainer = document.getElementById('eventAction');
const eventSubjectContainer = document.getElementById('eventSubject');

let chaosFactor = 5;

function setupMythic() {
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

    mythicCollapser.addEventListener('click', toggleMythic);
    document.getElementById('eventButton').addEventListener('click', generateEvent);
    document.getElementById('perceptionInput').addEventListener('keyup', determineMaxSpotDistance);

    eventFocusContainer.addEventListener('click', generateFocus);
    eventActionContainer.addEventListener('click', generateAction);
    eventSubjectContainer.addEventListener('click', generateSubject);
}


function toggleMythic() {
    if (debug) console.log('toggleMythic triggered');
    if (mythicContainer.style.maxHeight) {
        if (debug) console.log('collapse mythic');
        mythicContainer.style.maxHeight = null;
        mythicCollapser.style.fontSize = '100%';
    }
    else {
        if (debug) console.log('inflate mythic');
        mythicContainer.style.maxHeight = mythicContainer.scrollHeight + "px";
        mythicCollapser.style.fontSize = '200%';
    }

    if (encounterContainer.style.maxHeight) {
        if (debug) console.log('collapse terrainTiles');
        encounterContainer.style.maxHeight = null;
        encounterCollapser.style.fontSize = '100%';
    }
}

function setChaosFactor(event) {
    if (debug) console.log('setChaosFactor triggered');
    document.querySelector('.focus').classList.toggle('focus');
    this.classList.toggle('focus');
    chaosFactor = parseInt(event.target.innerText);
    if (debug) console.log('chaosFactor set to ' + chaosFactor);
}

function rollFate() {
    if (debug) console.log('rollFate triggered');
    let rollResult = d100();
    if (debug) console.log('roll result ' + rollResult);
    let chance = fateChance[this.id][chaosFactor];
    if (debug) console.log('odds selection ' + this.id);
    if (debug) console.log('success chance ' + chance);

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
        if (debug) console.log('event triggered');
        fateResult += ' An event is triggered!';
        generateEvent();
    }

    if (debug) console.log('result ' + fateResult);
    document.getElementById('result').innerText = fateResult;
}

function eventHappens(rollResult) {
    if (debug) console.log('eventHappens triggered');
    if (rollResult === 100 || rollResult % 11 === 0) {
        if (debug) console.log('event might happen, digit ' + rollResult % 10);
        return rollResult % 10 <= chaosFactor;
    }
    else {
        if (debug) console.log('no event');
        return false;
    }
}

function generateEvent() {
    if (debug) console.log('generateEvent triggered');
    generateFocus();
    generateAction();
    generateSubject();
}

function generateFocus() {
    if (debug) console.log('generateFocus triggered');
    eventFocusContainer.innerText = checkAgainstTable(event['focus'], d100());
}

function generateAction() {
    if (debug) console.log('generateAction triggered');
    eventActionContainer.innerText = checkAgainstTable(event['action'], d100());
}

function generateSubject() {
    if (debug) console.log('generateSubject triggered');
    eventSubjectContainer.innerText = checkAgainstTable(event['subject'], d100());
}
