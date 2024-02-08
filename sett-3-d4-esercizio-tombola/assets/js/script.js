let numeroEstratto;
const numeriDiv = document.getElementById('griglia');
const btnPick = document.getElementById('btnPick');
const numeriEstratti = [];



window.addEventListener('load', init);

function init() {
    creaNumeri();
}

const creaNumeri = () => {
    for (let i = 0; i <= 89; i++) {
        const grigliaCellDiv = document.createElement('div');
        const cellValue = document.createElement('span');
        cellValue.innerText = i + 1;
        cellValue.classList.add('numero');
        grigliaCellDiv.classList.add('cell');
        grigliaCellDiv.appendChild(cellValue);
        numeriDiv.appendChild(grigliaCellDiv);
    }
}


btnPick.onclick = function (e) {
    e.preventDefault();

    estraiNumero();
}

const estraiNumero = () => {
    numeroEstratto = (Math.floor((Math.random()) * 89) + 1);

    if (numeriEstratti.includes(numeroEstratto)) {
        estraiNumero();
    } else {
        document.getElementById('picked').innerText = "" + numeroEstratto;
        numeriEstratti.push(numeroEstratto);
        highlight(numeroEstratto);
    }
}

function highlight(numeroEstratto) {
    const numeriDiv = document.querySelectorAll('.cell');
    for (let i = 0; i < numeriDiv.length; i++) {
        if (numeroEstratto === parseInt(numeriDiv[i].innerText)) {
            numeriDiv[i].classList.add('picked');
        }
    }
}
