let btns = [1,2,3,6,9,8,7,4];
const ids = [1, 2, 3, 6, 9, 8, 7, 4];

let btn5 = document.getElementById('btn5');


btn5.addEventListener("click", function () {

    btns.unshift(btns.pop());
    for (i = 0; i < 8; i++) {
        document.getElementById("btn"+ids[i]).innerHTML = btns[i];
    }
});
