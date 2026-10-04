let choices = document.querySelectorAll('.choice');
let conclusion = document.querySelector( "#message" );
let userResult = document.querySelector( "#your-result");
let compResult = document.querySelector( "#computer-result");
let resetGame = document.querySelector( "#reset" );

let userWin = 0;
let compWin = 0;


const checkWinner = ( Comp , user )=>{
    if ( Comp === user ){
        console.log("Draw");
        conclusion.innerText = "This game was a Draw";
        conclusion.style.backgroundColor = "blue";
        return;
    }
    conclusion.innerText = "Play your Game";

    if ( user === "Rock" && Comp === "Paper" ){
        console.log( `winner is ${ Comp }`);
        conclusion.innerText = `You loses 😢😥`;
        compWin++;
        conclusion.style.backgroundColor = "red";
        compResult.innerText = `Computer Win Count is : ${compWin}`;
        return;
    }else if ( user == "Rock" && Comp === "Scissor" ){
        console.log( `winner is ${ user }`);
        conclusion.innerText = ` Yay! You Won! Congrats 🥳🔥`;
        userWin++;
        conclusion.style.backgroundColor = "green";
        userResult.innerText = `Total Win Count of User is : ${userWin}`;
        return;
    }else{
        if( user === "Paper" && Comp === "Rock" ){
            console.log( `winner is ${ Comp }`);
            conclusion.innerText = `You loses 😢😥`;
            conclusion.style.backgroundColor = "red";
            compWin++;
            compResult.innerText = `Computer Win Count is : ${compWin}`; 
            return;
        }else if ( user === "Paper" && Comp === "Scissor" ){
            console.log( `winner is ${ Comp }`);
            conclusion.innerText = `You loses 😢😥`;
            conclusion.style.backgroundColor = "red";
            compWin++;
            compResult.innerText = `Computer Win Count is : ${compWin}`; 
            return;
        }else{
            if ( user === "Scissor" && Comp === "Rock" ){
                console.log( `winner is ${ Comp }`);
                conclusion.innerText = `You loses 😢😥`;
                conclusion.style.backgroundColor = "red";
                compWin++;
                compResult.innerText = `Computer Win Count is : ${compWin}`;
                return;
            }else if ( user === "Scissor" && Comp === "Paper" ){
                console.log( `winner is ${user }`);
                conclusion.innerText = `Yay! You Won! Congrats 🥳🔥`;
                conclusion.style.backgroundColor = "green";
                userWin++;
                userResult.innerText = `Total Win Count of User is : ${userWin}`;
                return;
            }
        }
    }
}


 const computerChoice = ( userSelection )=>{
    const options = [ "Rock" ,"Paper" , "Scissor" ];

     let randomIdx = Math.floor( Math.random() * 3);

     let compChoice = options[ randomIdx ];
     console.log( compChoice);

     checkWinner( compChoice , userSelection );
}

choices.forEach( ( button ) =>{
    button.addEventListener( "click" , ()=>{
        let userChoice = button.innerText;
        console.log( userChoice );
        computerChoice(userChoice );
    } )
});

const newGame = () =>{
    userResult.innerText = "User Win count: 0";
    compResult.innerText = "Computer Win Count: 0";
    conclusion.innerText = "Result will be declared here";
    conclusion.style.backgroundColor = "#102b2a";
}

resetGame.addEventListener( "click" , newGame );