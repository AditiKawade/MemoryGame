let cardsArray = [
    {
        'name': 'CSS',
        'img': 'images/CSS.png',
    },
    {
        'name': 'HTML',
        'img': 'images/html.png',
    },
    {
        'name': 'jQuery',
        'img': 'images/jQ.jpg',
    },
    {
        'name': 'JS',
        'img': 'images/js.png',
    },
    {
        'name': 'Node',
        'img': 'images/nodejs.webp',
    },
    {
        'name': 'Python',
        'img': 'images/pyth.png',
    }
];

const parentDiv=document.querySelector('#card-section');

// // step2 to duplicate
const gameCard = cardsArray.concat(cardsArray)
console.log(gameCard)

// // step 3 shuffle

// // const myNumbers = (array) =>{
// //     for(let i =array.length-1;i>0;i--){
// //         let j=Math.floor(Math.random()*(i+1))
// //         let temp = array[i]
// //         array[i]=array[j]
// //         array[j]=temp
// //     }
// //     return array
// // }
// // const shuffledChild = myNumber(gameCard)
// // or

let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());
// //step 5
let clickcount=0;
let Firstcard="";
let Secondcard="";

// // step6 stylingthe matches card 
const card_matches =() =>{
    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curElem) =>{
        curElem.classList.add('card_match')
    })
}

// //step7 for continuing the game
const resetgame = () =>{
    Firstcard="";
    Secondcard="";
    clickcount = 0;
    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curElem) =>{
        curElem.classList.remove('card_selected')
    })
}


// // step 4
parentDiv.addEventListener('click',(event) => {
    let curCard = event.target;
    if(curCard.id === "card-section"){return false}
    

    clickcount++; //step5
    if(clickcount < 3){

        if(clickcount === 1){
            Firstcard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');

        }else{
            Secondcard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');

        }

        if(Firstcard !=="" && Secondcard !==""){
            if(Firstcard === Secondcard){
                // curCard.classList.add('card_match')
                setTimeout(() => {
                    card_matches();
                    resetgame();
                }, 1000);
                
            }else{
                setTimeout(() => {
                    resetgame();
                }, 1000);

            }
        }

    } 

    
})



// // step 1 to add the card 
for(let i=0 ;i<shuffledChild.length;i++){

    const childDiv=document.createElement('div')
    childDiv.classList.add('card')
    childDiv.dataset.name=shuffledChild[i].name;
    // childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;
    const front_div =document.createElement('div')
    front_div.classList.add('front-card')

    const back_div = document.createElement('div');
    back_div.classList.add('back-card')
    back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;


    parentDiv.appendChild(childDiv)

    childDiv.appendChild(front_div)
    childDiv.appendChild(back_div)
    
}
    