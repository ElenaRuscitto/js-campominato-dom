
// 0.
const containerBox = document.querySelector('.box');
const btnPlay = document.querySelector('.btn-play');
const livelDiff = document.querySelector('.difficolta');


const totBomb = 16;



reset();
console.log(reset);



btnPlay.addEventListener('click', startPlay);





///////////////////   FUNCTION   //////////////////////////


// 2.reset
function reset() {
  containerBox.innerHTML= '';
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

  // nBomb(numeriContati);
  // console.log(nBomb(numeriContati));

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

  /** CON IF
    if(this.innerHTML === ''){
      this.innerHTML = this.sqID;
    }else{
      this.innerHTML = '';
    }
  */

    // METODO TERNARIO
    // this.innerHTML = (this.innerHTML === '') ? this.innerHTML = numeri : this.innerHTML = '';

    // 6. cambio colore al click con azzurro
    this.classList.add('sqClicked');

    
   
  })

  return sq;
}

// estrazione randomica bombe da 1 a 16 per array vuoto

function nBomb(variDiff) {
  const numBom = [];
 
  let contatoreSquare;

  for (let i = 1; i <= totBomb; i++) {

    contatoreSquare = Math.ceil(Math.random() * variDiff); 
    // console.log(i);
    numBom.push(contatoreSquare);
  }


  return numBom; 
}
console.log(numBom);