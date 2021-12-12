function pick(arr){
    const index = Math.floor(Math.random() * arr.length);
    return arr[index]

}

function getCard(){
    const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', ];
    const randomCard = pick(cards)

    const suits = ['spade', 'heart', 'club', 'diamond']
    const randomSuit = pick(suits)

    return {value: card, suit: suit}
}