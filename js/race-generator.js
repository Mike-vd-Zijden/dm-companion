const raceContainer = document.getElementById('raceMenuContainer');

function toggleRaceMenu() {
    raceContainer.classList.toggle('change');
    if (raceContainer.classList.contains('change')) {
        if (debug) console.log('modal enter screen');
        raceContainer.style.transform = 'translate(0,0)';
    }
    else {

        if (debug) console.log('modal exits screen');
        raceContainer.style.transform = 'translate(1800px, 0px)';
    }
}

function generateNPC() {
    let race = checkAgainstTable(races);
    let gender, sex, actualRace, clss;
    if (typeof race === 'string') {
         actualRace = race;
         sex = checkAgainstTable(sexes.standard);
         gender = checkAgainstTable(genders.standard);
    }
    else {
        actualRace = race.race;
        sex = checkAgainstTable(sexes[race.sex]);
        gender = checkAgainstTable(genders[race.gender]);
    }

    clss = checkAgainstTable(classes);
    console.log(`${gender} ${sex} ${actualRace} ${clss}`);
}
