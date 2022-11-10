let cell = document.querySelectorAll("#cell")
let ticTacToe = document.getElementsByClassName(" TicTacToe")
let currentPlayer = "1"


// for (let index = 0; index < cell.length; index++) {
//     cell[index].addEventListener("click", place)
// }

function place(box) {
    if (box.innerText != "") return;
    box.innerText = currentPlayer;
    currentPlayer == "1" ? currentPlayer = "O" : currentPlayer = "1";
    checkGameBoard()
}

function checkGameBoard() {
    for (let i = 0; i <= 2; i++) {
        let first = document.getElementById("0_" + i).innerText
        let second = document.getElementById("1_" + i).innerText
        let third = document.getElementById("2_" + i).innerText
        if (first == "") continue
        if (first == second && first == third) {
            let winner = document.getElementById("winner")
            winner.style.display = "block"
        }
       
    }

    for (let i = 0; i <= 2; i++) {
        let first = document.getElementById(i + "_0").innerText
        let second = document.getElementById(i + "_1").innerText
        let third = document.getElementById(i + "_2").innerText
        if (first == "") continue
        if (first == second && first == third) {
            winner.style.display = "block"
        }
    }

    let firstD1 = document.getElementById("0_0").innerText
    let secondD1 = document.getElementById("1_1").innerText
    let thirdD1 = document.getElementById("2_2").innerText
    if (firstD1 != "" && firstD1 == secondD1 && firstD1 == thirdD1) {
        winner.style.display = "block"
    }

    let firstD2 = document.getElementById("0_2").innerText
    let secondD2 = document.getElementById("1_1").innerText
    let thirdD2 = document.getElementById("2_0").innerText
    if (firstD2 != "" && firstD2 == secondD2 && firstD2 == thirdD2) {
        winner.style.display = "block"
    }

}