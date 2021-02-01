import '../scss/main.scss';

let isPlayer1 = true;
const player1Sign = 'X';
const player2Sign = 'O';
let stopPlaying = false;
const cells = document.querySelectorAll('.play-table__cell');
const winningText = document.querySelector('.winning-text');

cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        if (!stopPlaying && cell.innerHTML == '') {
            cell.innerHTML = isPlayer1 ? player1Sign : player2Sign;
            CheckWinner(cell.innerHTML);
            isPlayer1 = !isPlayer1;
        }
    });
});

const resetBTN = document.querySelector('.btn-reset');

resetBTN.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.innerHTML = '';
    });
    winningText.classList.add('displayNone');
    stopPlaying = false;
    isPlayer1 = true;
});

function CheckWinner(playerSign) {
    let isPlayerWin =
        CheckRows(playerSign) ||
        CheckColumns(playerSign) ||
        CheckCross(playerSign);

    if (isPlayerWin) {
        stopPlaying = true;
        winningText.innerHTML = 'Wygrywa gracz ' + playerSign;
        winningText.classList.remove('displayNone');
    }
}

function CheckRows(playerSign) {
    for (let i = 0; i < 3; i++) {
        if (
            cells[0 + i * 3].innerHTML == playerSign &&
            cells[1 + i * 3].innerHTML == playerSign &&
            cells[2 + i * 3].innerHTML == playerSign
        ) {
            return true;
        }
    }

    return false;
}
function CheckColumns(playerSign) {
    for (let i = 0; i < 3; i++) {
        if (
            cells[0 + i].innerHTML == playerSign &&
            cells[3 + i].innerHTML == playerSign &&
            cells[6 + i].innerHTML == playerSign
        ) {
            return true;
        }
    }

    return false;
}

function CheckCross(playerSign) {
    if (
        (cells[0].innerHTML == playerSign &&
            cells[4].innerHTML == playerSign &&
            cells[8].innerHTML == playerSign) ||
        (cells[2].innerHTML == playerSign &&
            cells[4].innerHTML == playerSign &&
            cells[6].innerHTML == playerSign)
    ) {
        return true;
    }

    return false;
}
