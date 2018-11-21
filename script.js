let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");
let item5 = document.getElementById("item5");
let item6 = document.getElementById("item6");
let item7 = document.getElementById("item7");
let item8 = document.getElementById("item8");
let item9 = document.getElementById("item9");;
let result = document.getElementById("result")

item1.onclick = function() {
    if(item1.innerHTML == "O") {
        return item1.innerHTML = "O";
    } else {
        item1.innerHTML = "X";
    }
    guidGenerator();
    Result();
}
item2.onclick = function() {
    if(item2.innerHTML == "O") {
        return item2.innerHTML = "O";
    } else {
        item2.innerHTML = "X";
    }
    guidGenerator();
    Result();
}

item3.onclick = function() {
    if(item3.innerHTML == "O") {
        return item3.innerHTML = "O";
    } else {
        item3.innerHTML = "X";
    }
    guidGenerator();
    Result();
}

item4.onclick = function() {
    if(item4.innerHTML == "O") {
        return item4.innerHTML = "O";
    } else {
        item4.innerHTML = "X";
    }
    guidGenerator();
    Result()
}

item5.onclick = function() {
    if(item5.innerHTML == "O") {
        return item5.innerHTML = "O";
    } else {
        item5.innerHTML = "X";
    }
    guidGenerator();
    Result()
}

item6.onclick = function() {
    if(item6.innerHTML == "O") {
        return item6.innerHTML = "O";
    } else {
        item6.innerHTML = "X";
    }
    guidGenerator();
    Result()
}

item7.onclick = function() {
    if(item7.innerHTML == "O") {
        return item7.innerHTML = "O";
    } else {
        item7.innerHTML = "X";
    }
    guidGenerator();
    Result()
}

item8.onclick = function() {
    if(item8.innerHTML == "O") {
        return item8.innerHTML = "O";
    } else {
        item8.innerHTML = "X";
    }
    guidGenerator();
    Result()
}

item9.onclick = function() {
    if(item9.innerHTML == "O") {
        return item9.innerHTML = "O";
    } else {
        item9.innerHTML = "X";
    }
    guidGenerator();
    Result()
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
        var selected = select[Math.floor(Math.random()*select.length)];
        if (selected.innerHTML == false) {
            return  (selected.innerHTML = "O");
        }
    };
    return (S4());
}

function Result() {
   if(item1.innerHTML == "X" && item2.innerHTML == "X" && item3.innerHTML == "X") {
       result.innerHTML = "Human Won The Game!";
       Reloadwa();
    } else if(item1.innerHTML == "X" && item4.innerHTML == "X" && item7.innerHTML == "X") {
        result.innerHTML = "Human Won again!";
        Reloadwa();
    } else if(item7.innerHTML == "X" && item8.innerHTML == "X" && item9.innerHTML == "X") {
        result.innerHTML = "Human Won!!!";
        Reloadwa();
    } else if(item3.innerHTML == "X" && item6.innerHTML == "X" && item9.innerHTML == "X") {
        result.innerHTML = "Human!!! Won!!!!";
        Reloadwa();
    } else if(item1.innerHTML == "X" && item5.innerHTML == "X" && item9.innerHTML == "X") {
        result.innerHTML = "You Won Again Stupid Human!";
        Reloadwa();
    } else if(item3.innerHTML == "X" && item5.innerHTML == "X" && item7.innerHTML == "X") {
        result.innerHTML = "Human Won Again!";
        Reloadwa();
    } else if(item4.innerHTML == "X" && item5.innerHTML == "X" && item6.innerHTML == "X") {
        result.innerHTML = "Human Won again!";
        Reloadwa();
    } else if(item2.innerHTML == "X" && item5.innerHTML == "X" && item8.innerHTML == "X") {
        result.innerHTML = "Human Won again!";
        Reloadwa();
    } else if(item1.innerHTML == "O" && item2.innerHTML == "O" && item3.innerHTML == "O") {
        result.innerHTML = "Computer Won The Game!";
        Reloadwa();
    } else if(item1.innerHTML == "O" && item4.innerHTML == "O" && item7.innerHTML == "O") {
        result.innerHTML = "Computer Won again!";
        Reloadwa();
    } else if(item7.innerHTML == "O" && item8.innerHTML == "O" && item9.innerHTML == "O") {
        result.innerHTML = "Computer Won!!!";
        Reloadwa();
    } else if(item3.innerHTML == "O" && item6.innerHTML == "O" && item9.innerHTML == "O") {
        result.innerHTML = "Computer!!! Won!!!";
        Reloadwa();
    } else if(item1.innerHTML == "O" && item5.innerHTML == "O" && item9.innerHTML == "O") {
        result.innerHTML = "My Computer Won The Game!";
        Reloadwa();
    } else if(item3.innerHTML == "O" && item5.innerHTML == "O" && item7.innerHTML == "O") {
        result.innerHTML = "Computer Won Again!";
        Reloadwa();
    } else if(item2.innerHTML == "O" && item5.innerHTML == "O" && item8.innerHTML == "O") {
        result.innerHTML = "Computer Won again!";
        Reloadwa();
    } else if(item4.innerHTML == "O" && item5.innerHTML == "O" && item6.innerHTML == "O") {
        result.innerHTML = "Computer Won again!";
        Reloadwa();
    }
}

function Reloadwa() {
        setTimeout("location.reload(true);", 1000);
}