let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");
let item5 = document.getElementById("item5");
let item6 = document.getElementById("item6");
let item7 = document.getElementById("item7");
let item8 = document.getElementById("item8");
let item9 = document.getElementById("item9");


item1.onclick = function() {
    item1.innerHTML = "X";
}

item2.onclick = function() {
    item2.innerHTML = "O";
}

item3.onclick = function() {
    item3.innerHTML = "X";
}

item4.onclick = function() {
    item4.innerHTML = "O";
}

item5.onclick = function() {
    item5.innerHTML = "X";
}

item6.onclick = function() {
    item6.innerHTML = "O";
}

item7.onclick = function() {
    item7.innerHTML = "X";
}

item8.onclick = function() {
    item8.innerHTML = "X";
}

item9.onclick = function() {
    item9.innerHTML = "O";
}

function guidGenerator() {
    var S4 = function() {
        let select = new Array ();
        select[0] = item1;
        select[1] = item2;
        select[2] = item3;
        select[3] = item4;
        select[4] = item5;
        select[5] = item6;
        select[6] = item7;
        select[7] = item8;
        select[8] = item9;
       return (((1+Math.random())*9)|0).innerHTML = select;
    };
    return (S4());
}