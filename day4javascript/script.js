const cards = [
    ["Cat","A feline that comes in many colors"],
    ["Dog","A friend that eats your shoes"],
    ["Mouse","A friend that gets in your pants"]
]

function flipCard(card, index) {
    let text = ''
    
    if (card.dataset.flipped === 'true') {
        card.dataset.flipped = 'false';
        text = cards[index][1]
        
    } else {
        card.dataset.flipped = 'true';
        text = cards[index][0]
    }

    card.innerHTML = "<p>"+ text +  "</p>"

}

function displayCards() {
    for (let i = 0; i < cards.length; i++) {
        let currCard = cards[i]
        let front = currCard[0]

        

        // Creating the card
        let cardDiv = document.createElement('div')
        cardDiv.classList.add('card')
        let text = document.createElement('p')
        text.innerText = front
        
        cardDiv.appendChild(text)

        // <div class='card'> <p> Text </p> <div>
        

        cardDiv.dataset.flipped = 'false'

        // <div dataset-flipped='false' class='card'> <p> Text </p> <div>
        cardDiv.addEventListener('click', ()=>flipCard(cardDiv, i)) //closure

        let allTheCards = document.getElementById('cards')
        allTheCards.appendChild(cardDiv)

    }
}



displayCards()