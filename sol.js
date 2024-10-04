function Red1(){
    document.getElementById("red").style.backgroundColor = "white";
    document.body.style.backgroundColor = "red";
}

function green1(){
    document.getElementById("green").style.backgroundColor = "white";
    document.body.style.backgroundColor = "green";
    document.getElementById("red").style.backgroundColor = "red";
}

function blue1(){
    document.getElementById("blue").style.backgroundColor = "white";
    document.body.style.backgroundColor = "blue";
    document.getElementById("red").style.backgroundColor = "red";
    document.getElementById("green").style.backgroundColor = "green";
}

function reset(){
    document.getElementById("red").style.backgroundColor = "red";
    document.getElementById("green").style.backgroundColor = "green";
    document.getElementById("blue").style.backgroundColor = "blue";
    document.body.style.backgroundColor = "";
}
