const perceptionContainer = document.getElementById('perceptionMenuContainer');
const maxDistanceField = document.getElementById('maxDistance');

function determineMaxSpotDistance(event) {
    if (debug) console.log('determineMaxSpotDistance triggered');
    let perception = this.value;
    maxDistanceField.textContent = `${perception * 10}ft/${perception * 2}"`;
}

function togglePerceptionMenu() {
    perceptionContainer.classList.toggle('change');
    if (perceptionContainer.classList.contains('change')) {
        if (debug) console.log('modal enter screen');
        perceptionContainer.style.transform = 'translate(0,0)';
    }
    else {
        if (debug) console.log('modal exits screen');
        perceptionContainer.style.transform = 'translate(-300px, 0px)';
    }
}
