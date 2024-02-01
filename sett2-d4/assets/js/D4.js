/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
    return l1 * l2;
}
console.log(area(3, 4));



/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    } else {
        return (num1 + num2);
    }
}
console.log(crazySum(3, 10));



/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(num1) {
    let absDiff = Math.abs(num1 - 19);
    if (num1 > 19) {
        return absDiff * 3;
    } else {
        return absDiff;
    }
}
console.log(crazyDiff(18));



/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
    if (n >= 20 && n <= 100 || n === 400) {
        return (true);
    } else {
        return (false);
    }
}
console.log(boundary(115));



/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SOLUZIONE 1
function epify (stringa) {
    if (stringa.startsWith('EPICODE ')) {
        return stringa;
    } else {
        return 'EPICODE' + stringa;
    }
}
console.log(epify('ciao')); */

/* SOLUZIONE 2
function epify (stringa) {
    if (stringa.indexOf("EPICODE") === 0) {
        return nuovaStringa
    }
    return "EPICODE" + stringa
}  */

/* SCRIVI QUI LA TUA RISPOSTA */

//???????????????????????????????????????????



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(numero) {
    if (numero % 3 === 0 || numero % 7 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(check3and7(21));



/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SOLUZIONE
function reverseString(stringa) {
    let arrayStringa = stringa.split('');
    let arrayInvertito = arrayStringa.reverse();
    let stringaFinale = arrayInvertito.join('');
    return stringaFinale;
}
console.log(reverseString('epicode'));*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*const parametro = ['epicode'];
function reverseString() {
    return parametro.split(''), parametro.reverse

//???????????????????????????????????????

}
console.log(reverseString(epicode));*/



/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(stringa) {
    const arrayStringa = stringa.split("");
    const stringaSplit = arrayStringa.indexOf(1);
    const maiuscolo = stringaSplit.toUppercase;

}
console.log(upperFirst("ciao a tutti"));
//?????????????????????????????????????
//undefined


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const stringa1 = 'programmare è dannoso per la salute'
function cutString(stringa) {
    const slice = stringa1.slice(1, -1);
}
console.log(cutString(stringa1));
//undefined pure questo T^T


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    const numeri = [];
    for (let i = 0; i < numeri.lenght; i++) {

        numeri.push(Math.floor(Math.random) * 11);
    }

}
console.log(giveMeRandom(3));
//anche questo undefined ㅠㅠㅠㅠ



