/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
 // cards array using let rather than var
let card = document.getElementsByClassName("card");
let cards = [...card]
console.log(cards);

//  pack of cards in game
const pack = document.getElementById("card-pack");

// declaring move let
let cardFlipped = 0;
// declare let for star icons
const stars = document.querySelectorAll(".fa-star");

// declaring let of matchedCards
let matchedCard = document.getElementsByClassName("match");

 // stars list
 let starsList = document.querySelectorAll(".stars li");

 
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function newBoard(){
	cards_flipped = 0;
	var output = '';
    memory_array.memory_tile_shuffle();
	for(var i = 0; i < memory_array.length; i++){
		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}
function memoryFlipTile(card,val){
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_card_ids.push(tile.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_card_ids.push(tile.id);
			if(memory_values[0] == memory_values[1]){
				cards_flipped += 2;
				// Clear both arrays
				memory_values = [];
            	memory_card_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array.length){
					alert("Board cleared... generating new board");
					document.getElementById('memory_board').innerHTML = "";
					newBoard();
				}
			} else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var card_1 = document.getElementById(memory_card_ids[0]);
				    var card_2 = document.getElementById(memory_card_ids[1]);
				    card_1.style.background = 'url(tile_bg.jpg) no-repeat';
            	    card_1.innerHTML = "";
				    card_2.style.background = 'url(tile_bg.jpg) no-repeat';
            	    card_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            	    memory_card_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
