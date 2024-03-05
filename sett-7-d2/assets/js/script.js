/* Crea un semplice form di registrazione con un input field in cui l’utente possa inserire il proprio nome. A fianco di questo input field crea due pulsanti: uno salverà il valore in localStorage, uno rimuoverà il valore precedentemente salvato (se presente). Mostra sopra l’input field il valore precedentemente salvato, se presente. */

let displayName = document.getElementById('name');
let writtenName = document.getElementById('writtenName')
let btnSave = document.getElementById('btnSave');
let btnDelete = document.getElementById('btnDelete');

btnSave.addEventListener('click', function() {
    saveName();
})

btnDelete.addEventListener('click', function() {
    deleteName();
})


function saveName() {
    let inputName = writtenName.value;
    localStorage.setItem('name', inputName);

    if (writtenName.value == '') {
        displayName.innerText = `Scrivi il tuo nome nel campo input`
    } else {
        displayName.innerText = `Il tuo nome è ${inputName}`;
    }
    return
    
}

function deleteName() {
    localStorage.removeItem('name');
}



/* Crea un contatore che tenga conto del tempo che passa, utilizzando sessionStorage. Aggiornando la pagina il valore prosegue, chiudendo la pagina - ovviamente - ricomincia. Il valore del contatore deve aggiornarsi ad ogni secondo. */

/* tempo che passa = i++, sessionStorage.i ?? , i = sessioStorage.getItem ?? */

let displayTimer = document.getElementById('timer');

window.addEventListener('load', function() {
    countSeconds();
})
let i = sessionStorage.getItem('count');


function countSeconds() {
    let i = 0;
    i = i + 1;
    displayTimer.innerText = `Sei su questa pagina da ${i} secondi`
    sessionStorage.setItem('count', i);
}

setInterval(countSeconds, 1000);