let transcationTypes = document.querySelectorAll('.transaction-types > div')
let transactionCards = document.querySelectorAll('.tt')
for(let t of transcationTypes){
    t.addEventListener('click', (e) => {
        clearAllSelectedTT()
        e.target.style.borderBottom =  '3px solid rgb(55, 182, 255)'

        // Displays the appropriate cards
        clearAllDisplayedCardTT()

        let clicked = e.target.id 
        for(let cards of transactionCards){
            if(cards.id === `tt-${clicked}`){
                cards.style.display = 'block'
                break
            }
        }
    })
}

const clearAllSelectedTT = () =>{
    
    for(let t of transcationTypes){
        // console.log(getComputedStyle(t).borderBottom)
        if(getComputedStyle(t).borderBottom === '3px solid rgb(55, 182, 255)'){
            t.style.borderBottom = '3px solid rgb(209, 209, 209)'
        }
    }
}

const clearAllDisplayedCardTT = () =>{
    
    for(let cards of transactionCards){
        cards.style.display = 'none';
    }
}