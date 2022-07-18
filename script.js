let initialValue = "X";
// We parse the values from our score board as integers so that the scores can be added up
let sc1 = parseInt(score1.innerText);
let sc2 = parseInt(score2.innerText);
const test=(e)=>{
    // console.log(e);
    // e.target.innerText = ""
    // xPlay = e.target.innerText
    if (initialValue == "X" && e.target.innerText == "") {
        e.target.innerText = "X"
        initialValue = "O"
        // Each boxes was assigned an id. Now, I will write an if statement to make sure when the possible moves align, we have a win. We will begin with all possible X win
        if ((a1.innerText === "X" && a2.innerText === "X" && a3.innerText === "X") || (a1.innerText === "X" && b1.innerText === "X" && c1.innerText === "X") || (a1.innerText === "X" && b2.innerText === "X" && c3.innerText === "X") || (a2.innerText === "X" && b2.innerText === "X" && c2.innerText === "X") || (a3.innerText === "X" && b3.innerText === "X" && c3.innerText === "X") || (a3.innerText === "X" && b2.innerText === "X" && c1.innerText === "X") || (b1.innerText === "X" && b2.innerText === "X" && b3.innerText === "X") || (c1.innerText === "X" && c2.innerText === "X" && c3.innerText === "X")) {
            initialValue = ""
            board.innerText = name1.innerText + "wins!"
            // To increment the score of X
            sc1 = sc1 + 1;
            score1.innerText = sc1;
            return;
            // To now check for when a draw may happen, that is when the conditions for an X win is not met. We do this
        } else if (a1.innerText != "" && a2.innerText != "" && a3)
    }
    else if(initialValue=="O" && e.target.innerText==""){
        e.target.innerText = "O"
        initialValue = "X"
    }
   
}

const submit = () =>{
    let firstPlayer = player1.value;
    let secondPlayer = player2.value;
    // console.log(secondPlayer);
    if(player1.value == "" && player2.value == ""){
        alert("Register Participants!")
    } else if(player1.value = ""){
        player1.className = "form-control border border-2 border-danger"
    } else if(player2.value = ""){
        player2.className = "form-control border border-2 border-danger"
    } else{
        name1.innerText = firstPlayer;
        name2.innerText = secondPlayer;
        img.style.display = "none";
        player1 = ""
        player2 = ""
    }
}