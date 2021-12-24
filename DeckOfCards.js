const suits = ['hearst', 'diamonds', 'spades', 'clubs'];
const values = '1,2,3,4,5,6,7,8,9,10,J,Q,K,A';

//pure functional way of making a deck of cards.
function makeDeck(){
    const deck= [];
    const suits = ['hearst', 'diamonds', 'spades', 'clubs'];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';

    for(let value of values.split(',')){
        for(let suit of suits){
            deck.push({
                value,
                suit
            })
        }
    }
    return deck;
}

function drawCard(deck) {
    return deck.pop();
}

// const myDeck = makeDeck();
// const card1= drawCard(myDeck);

const myDeck = {
    deck: [],
    drawnCards: [],
    suits: ['hearst', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initializeDeck(){    
    const {deck, values, suits} = this;
    for(let value of values.split(',')){
        for(let suit of suits){
            deck.push({
                value,
                suit
            })
        }
    }
    // return deck;
    },
    drawCard(){
        const card = this.deck.pop();
        this.drawnCards.push(card);
        return card;
    },
    drawMultipleCards(numberOfCards){
        const cards = [];
        for(let i = 0; i<numberOfCards; i++){
            cards.push(this.drawCard())
        }
        return cards;
    },
    shuffle (){
        const {deck} = this
        //loop over array backwards
        for(let i = deck.length -1; i>0; i--) {
            //pick random index before current element
            let j = Math.floor(Math.random() * (i + 1));
            //swap
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }
}
