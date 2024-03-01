
// 0.
const containerBox = document.querySelector('.box');
const btnPlay = document.querySelector('.btn-play');
const livelDiff = document.querySelector('.difficolta');

const numBom = [];
const totBomb = 16;

const output = document.querySelector('.output');
let contatoreOutput = 0;

reset();
console.log(reset);



btnPlay.addEventListener('click', startPlay);





///////////////////   FUNCTION   //////////////////////////


// 2.reset
function reset() {
  containerBox.innerHTML= '';
  numBom.length = 0;
}

// 1. al click del bottone Play, si vede la griglia di gioco
function startPlay (){
  reset ();
  const sceltaDiff = livelDiff.value;
  let numeriContati = 100;

  if (sceltaDiff == 'medium') {
    numeriContati = 81;
  }else if (sceltaDiff == 'hard'){
    numeriContati = 49;
  }

  // push dei numeri random-bomb
  nBomb(numeriContati);
  // console.log(myBomb);
  
  for (let i = 1; i <= numeriContati; i++){
    const square = generate(i) ;

    if (sceltaDiff == 'medium') {
      square.classList.add('sq-medium');
      
    }else if (sceltaDiff == 'hard') {
      square.classList.add('sq-hard');
    }

    containerBox.append(square);
  }

}

// creazione div: square
function generate(numeri) {
  const sq = document.createElement ('div')  //A
  sq.className = 'square' //B
 
  sq.sqID = numeri;

  // 5. aggiungo i numeri agli square
  sq.addEventListener('click', function(){
    console.log(this);
    console.log(numeri);

  /** CON IF per attaccare il numero allo square
    if(this.innerHTML === ''){
      this.innerHTML = this.sqID;
    }else{
      this.innerHTML = '';
    }
  */

  // aggiungo la classe 'bomb' per colorare lo square di rosso con numeri esgtratti dall'array
  if (numBom.includes(this.sqID)) {
    sq.classList.add('bomb');
    output.innerHTML = `Boom! Sei esploso! Il tuo punteggio è ${contatoreOutput}`;

  } else {
    contatoreOutput++;
  }

    // METODO TERNARIO per attaccare il numero allo square
    // this.innerHTML = (this.innerHTML === '') ? this.innerHTML = numeri : this.innerHTML = '';

    // 6. cambio colore al click con azzurro
    this.classList.add('sqClicked');

    
   
  })

  return sq;
}

// estrazione randomica bombe da 1 a 16 per array vuoto

function nBomb(variDiff) {
  // const numBom = [];

  let generatoreNumeri;

  while (numBom.length < totBomb) {
    generatoreNumeri = Math.ceil(Math.random() * variDiff); 

    if(!numBom.includes(generatoreNumeri)) {
      numBom.push(generatoreNumeri);
    }
  }


  console.log(numBom);
  return numBom; 
}


