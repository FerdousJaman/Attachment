var correct = /^[A-Za-z]+$/;

function myFun() {
    var a = document.getElementById("name").value;
    if (a == "") {
        document.getElementById("Message").innerHTML = "**please Fill Name"
        return false;
    }
    if (a.match(correct))
        true;
    else {
        document.getElementById("Message").innerHTML = "**Only Alphabets are allowed"
        return false;
    }
}
