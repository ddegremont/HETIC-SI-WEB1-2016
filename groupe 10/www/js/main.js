var select = document.querySelector('select');
var option = document.querySelectorAll('option');
var text_input = document.querySelector('#text_input');
var modele_input = document.querySelector('#modele_input');
var second_nav = document.querySelector('.second_nav');
var piece = document.querySelector('#pieces');
var i = 0;
var j = 0;
// Fix du bug sur event Materialize
function bugfix(){
    
    console.log(document.querySelector('input').value);
    var input = document.querySelector('input').value;
    
    if(input == "Pièce" ||input == "Immatriculation" ||input == "Carte grise"){
        modele_input.style.display = "none";
        text_input.style.display = "block";
        type_input.style.display = "none";
        i = 0;
    }
    if(input == "Modèle") {
        i++;
        if(i>=2){
            type_input.style.display = "block";    
        }
        text_input.style.display = "none";
        modele_input.style.display = "block";
    }
}

piece.addEventListener('click',function(e){
    e.preventDefault();
    j++;
    if( j%2 == 1 ) {
        second_nav.style.display = "none";    
    } else {
        j = 0;
        second_nav.style.display = "block";
    }
});