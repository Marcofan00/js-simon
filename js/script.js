/* Simon Says!
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

/*
--DONE  1. Creo una funzione per generare 5 numeri random univoci
    --DONE  1.1 Creo un array vuoto in cui conterrà i 5 numeri random univoci => randomNum = [];
    --DONE  1.2 Creo un ciclo while finchè l'array non conterrà 5 numeri random univoci => while (randomNum.length < 5)
    --DONE  1.3 Creo un variabile in salverò i numeri generati ad ogni ciclo che verrà effettuato => let generateNum = Math.floor(Math.random()x) + x;
    --DONE  1.4 Creo una condizione all'interno del ciclo per controllare se il numero generato è univoco => utilizzando .indexOf === -1
        --DONE  1.4.1 Se il numero generato non è presente, quindi la condizione sarà true, il numero generato verrà pushato all'interno dell'array.
        --DONE  1.4.2 Se il numero generato è presente, la condizione sarà false e verrà effettuato un altro giro del ciclo while
--DONE  2. Creo una funzione che farà apparire 5 prompt a schermo, uno dopo l'altro
    --DONE  2.1 Creo un ciclo for che verrà eseguito 5 volte => for (let i = 0; i < 5; i++);
    --DONE  2.2 Creo un array vuoto fuori dal ciclo => userNum = [];
    --DONE  2.3 All'interno del ciclo creo una variabile in cui gli assegno il prompt => let x = prompt('.....');
    --DONE  2.4 Successivamente pusho il valore all'interno dell'array nuovo => userNum.push(x);
    --DONE  2.5 Creo una condizione che controlla se il numero inserito dall'utente è presente nell'array dei numeri generati random => randomNum.includes(userNumEntered);
        --DONE  2.6 Se c'è almeno un numero incluso, lo pusho in un nuovo array e lo mostro in pagina => resultNum.push(userNumEntered) -- contResult.innerHTML = resultNum;
--DONE  3. Attivo la funzione tramite => setTimeout (namefunction, millisecondi);
*/

const contResult = document.querySelector('#result');
const contNumber = document.querySelector('#number');

genRandNum(100);
setTimeout(genPrompt, 3000);

console.log('Numeri random univoci: ', randomNum);

// FUNZIONI

// Prompt
function genPrompt() {

    userNum = [];
    resultNum = [];
    contResult.innerHTML = '';

    for(let i = 1; i <= 5; i++) {
        let userNumEntered = parseInt(prompt(`Inserisci il numero: ${i}`))
        userNum.push(userNumEntered);
        if ((randomNum.includes(userNumEntered)) && (resultNum.indexOf(userNumEntered) === -1)) { // Condizione doppia per far si che il nuovo array sia univoco e non abbia doppioni, per evitare che se l'utente inserisce 2 o più numeri uguali, in html e nel nuovo array ne appaia solo 1 e non venga ripetuto. 
            resultNum.push(userNumEntered);
            genText(`Hai indovinato ${resultNum.length} numeri`, resultNum);
        }
        if (resultNum.length === 0) {
            genText('Non hai indovinato nessun numero!', resultNum);
        }
        if (resultNum.length === 5) {
            genText('Hai indovinato tutti i numeri, complimenti', resultNum);
        }
    }
    console.log("Numeri inseriti dall'utente: ", userNum);
    console.log("Numeri indovinati: ", resultNum);
    return userNum;
}

// Genera 5 numeri casuali univoci
async function genRandNum(rangeNum) {

    randomNum = [];

    while (randomNum.length < 5) {
        let generateNum = Math.floor(Math.random() * rangeNum) + 1;

        if (randomNum.indexOf(generateNum) === -1) {
            randomNum.push(generateNum);
            contNumber.innerHTML += generateNum;
            if (randomNum.length < 5) {
                contNumber.innerHTML += ', ';
            }
        }

        await new Promise(r => setTimeout(r, 500));
    }

    return randomNum;
}

// Genera il contenuto in pagina
function genText(text, num) {
    contResult.innerHTML = `<h2 class="text">
        ${text}
    </h2>
    <div id="number">
        ${num}
    </div>`;
}