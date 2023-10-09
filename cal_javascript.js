// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "0";
    document.getElementById("AC-btn").value = "AC";

}

// This function display values
function display(value) {

    document.getElementById("AC-btn").value = "C";
    if (document.getElementById("result").value == "0") {
        var z = document.getElementById("result").value;

        document.getElementById("result").value = z.slice(0, -1);
        document.getElementById("result").value += value;

    } else {
        document.getElementById("result").value += value;
    }

}

// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

function del() {
    var a = document.getElementById("result").value;
    var b = a.slice(0, -1);
    document.getElementById("result").value = b;
    if (document.getElementById("result").value == "") {
        document.getElementById("result").value = "0";
        // document.getElementById("AC-btn").value = "AC";
    }
    // document.getElementById("result").innerText = document.getElementById("result").innerText.slice(0, -1);
}
function percentage() {
    var p = document.getElementById("result").value
    var r = p / 100;
    document.getElementById("result").value = r;

}

function envert() {
    var c = document.getElementById("result").value;
    var d = -c;
    document.getElementById("result").value = d;
}

//for key press 
document.addEventListener("keypress", function (event) {


    var d = (event.key);
    // alert(d);

    if (d == "1" || d == "2" || d == "3" || d == "4" || d == "5" || d == "6" || d == "7" || d == "8" || d == "9" || d == "0" || d == "*" || d == "-" || d == "+" || d == "." || d == "/") {
        display(event.key);
    }
    if (d == "=" || d == 'Enter') {
        calculate();
    }
    if (d == "%") {
        percentage();
    }
    if (d == "1" || d == "2" || d == "3" || d == "4" || d == "5" || d == "6" || d == "7" || d == "8" || d == "9" || d == "0" || d == ".") {
        document.getElementsByClassName("gry").style.background
    }


});

document.addEventListener("keydown", function (event) {


    var num = event.key;
    // for numpad 
    if (num == "End") {
        display(1);
    }
    else if (num == "ArrowDown") {
        display(2);
    }
    else if (num == "PageDown") {
        display(3);
    }
    else if (num == "ArrowLeft") {
        display(4);
    }
    else if (num == "Clear") {
        display(5);
    }
    else if (num == "ArrowRight") {
        display(6);
    }

    else if (num == "Home") {
        display(7);
    }
    else if (num == "ArrowUp") {
        display(8);
    }
    else if (num == "PageUp") {
        display(9);
    }
    else if (num == "PageUp") {
        display(9);
    }
    else if (num == "Insert") {
        display('0');
    }
    else if (num == "Delete") {
        display('.');
    }
    else {

    }

    if (event.keyCode == 8 && event.metaKey) {
        clearScreen();
    }

    if (event.keyCode == 8 && event.ctrlKey) {
        clearScreen();
    }
    // Check if the event's key property is equal to 'Backspace'
    if (event.key === 'Backspace') {
        del();
    }


});