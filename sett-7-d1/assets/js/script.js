/* Crea una classe User per la creazione di oggetti di tipo “utente”. Il suo costruttore dovrà inizializzare ogni oggetto utente con i seguenti attributi:- firstName- lastName- age- location Aggiungi alla classe User anche un metodo che restituisca il confronto con l'età di un'altra persona. Ad esempio, date due istanze della classe utente “x” e “y” inizializzate con le proprietà sopra descritte, il metodo dovrà restituire una frase simile a “x è più vecchio di y” a seconda del risultato del confronto. Crea degli oggetti a partire dalla classe User e verifica che la comparazione tra le età funzioni correttamente. */


class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }

    compare(anotherUser) {
        if (this.age < anotherUser.age) {
            return `${anotherUser.firstName} è più vecchio di ${this.firstName}`
        } else if (this.age > anotherUser.age) {
            return `${this.firstName} è più vecchio di ${anotherUser.firstName}`
        } else {
            return `${anotherUser.firstName} e ${this.firstName} hanno la stessa età`
        }
    }
}

const user1 = new User('Mario', 'Rossi', 37, 'Milano');
const user2 = new User('Maria', 'Bianchi', 22, 'Firenze');

console.log(user1.compare(user2));



/*Crea un form per la creazione di oggetti “Pet” (animali domestici). La classe Pet dovrà essere dotata delle seguenti proprietà:- petName- ownerName- species // (cane, gatto, coniglio etc.)- breed // (labrador, soriano, nano etc.) Nella classe che utilizzerai per creare questi oggetti aggiungi anche un metodo che restituisca true se due animali condividono lo stesso padrone. Crea, raccogliendo i dati dal form, diverse istanze della classe Pet e mostrane i dati in una lista sottostante. */

/* crea button che avrà l'event-listener, crea ul vuota, event onclick -> verifica se c'è contenuto nei campi -> se no errore / se sì -> let new Pet (form.value) -> pets.push(new Pet) -> scriviLista crea li, popola con for pets.length li.innerText = `Nome: ${pet.petName}, proprietario: ${pet.ownerName}, specie: ${pet.species}, razza: ${pet.breed} */

let petNameForm = document.getElementById('petName');
let ownerNameForm = document.getElementById('ownerName');
let speciesForm = document.getElementById('species');
let breedForm = document.getElementById('breed');
let petsList = document.getElementById('petsList');
let petsAdd = document.getElementById('petsAdd');

const pets = [];

class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }

    sameUser(anotherPet) {
        if (this.ownerName === anotherPet._ownerName) {
            return true
        } else {
            return false
        }
    }
}

petsAdd.addEventListener('click', function () {
    if (verify()) {
        memorize();
        fillPetList();
    } else {
        error();
        return
    }
})

function verify() {
    let petValue = petNameForm.value;
    let ownerValue = ownerNameForm.value;
    let speciesValue = speciesForm.value;
    let breedValue = breedForm.value;

    if (petValue || ownerValue || speciesValue || breedValue == '') {
        return false
    } else {
        return true
    }
}

function error() {
    let errore = document.getElementById('error');
    errore.innerText = `You must fill all the input fields!`
    return
}

function memorize() {
    let newPet = new Pet(petNameForm.value, ownerNameForm.value, speciesForm.value, breedForm.value);
    pets.push(newPet);
}

function fillPetList() {
    petsList.innerHTML = '';
    let newLi = document.createElement('li');
    pets.forEach((newPet) => {
        newLi.innerText = `Nome: ${newPet.petName}, proprietario: ${newPet.ownerName}, specie: ${newPet.species}, razza: ${newPet.breed}`
    })

    petsList.appendChild(newLi);    
}

//non stampa la lista :((

