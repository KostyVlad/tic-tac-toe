var sivuv = 0;

function resetAll() {
    let a = document.getElementsByTagName('td');
    for (var i = 0; i < a.length; i++) {
        a[i].innerHTML = '';
    }
    document.getElementById("pelet").innerHTML="";
    sivuv = 0;

}



function showOnclick(myThis) {
    var arr = document.getElementsByTagName("td");

    if (myThis.innerHTML == "") {
        if (sivuv == 0) {
            myThis.innerHTML = 'X';
            sivuv = 1
        } else {
            myThis.innerHTML = 'O';
            sivuv = 0;
        }
    }

    if
        (
        arr[0].innerHTML === "X" && arr[1].innerHTML === "X" && arr[2].innerHTML === "X" ||
        arr[0].innerHTML === "X" && arr[3].innerHTML === "X" && arr[6].innerHTML === "X" ||
        arr[0].innerHTML === "X" && arr[4].innerHTML === "X" && arr[8].innerHTML === "X" ||
        arr[3].innerHTML === "X" && arr[4].innerHTML === "X" && arr[5].innerHTML === "X" ||
        arr[1].innerHTML === "X" && arr[4].innerHTML === "X" && arr[7].innerHTML === "X" ||
        arr[2].innerHTML === "X" && arr[4].innerHTML === "X" && arr[6].innerHTML === "X" ||
        arr[6].innerHTML === "X" && arr[7].innerHTML === "X" && arr[8].innerHTML === "X" ||
        arr[2].innerHTML === "X" && arr[5].innerHTML === "X" && arr[8].innerHTML === "X"
    ) {
        document.getElementById("pelet").innerHTML = "<b>X Character won!<b>"
    }

    if
        (
        arr[0].innerHTML === "O" && arr[1].innerHTML === "O" && arr[2].innerHTML === "O" ||
        arr[0].innerHTML === "O" && arr[3].innerHTML === "O" && arr[6].innerHTML === "O" ||
        arr[0].innerHTML === "O" && arr[4].innerHTML === "O" && arr[8].innerHTML === "O" ||
        arr[3].innerHTML === "O" && arr[4].innerHTML === "O" && arr[5].innerHTML === "O" ||
        arr[1].innerHTML === "O" && arr[4].innerHTML === "O" && arr[7].innerHTML === "O" ||
        arr[2].innerHTML === "O" && arr[4].innerHTML === "O" && arr[6].innerHTML === "O" ||
        arr[6].innerHTML === "O" && arr[7].innerHTML === "O" && arr[8].innerHTML === "O" ||
        arr[2].innerHTML === "O" && arr[5].innerHTML === "O" && arr[8].innerHTML === "O"
    ) {
        document.getElementById("pelet").innerHTML = "<b>O Character won!<b>"
    }



}




