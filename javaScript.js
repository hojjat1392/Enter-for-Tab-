function txt_1_onfocus() {


}

function onblur() {
    document.getElementById("span").innerHTML = 0;
}


function keyup(e) {
    if (e.keyCode != 8 && e.keyCode!=13) {
        document.getElementById("span").innerHTML = eval(document.getElementById("span").innerHTML) + 1;
    }

    else if (document.getElementById("span").innerHTML != 0 && e.keyCode !=13 ) {
        document.getElementById("span").innerHTML = eval(document.getElementById("span").innerHTML) - 1;
    }

    else if (e.keyCode == 13){
        document.getElementById('txt_2').focus();
    }
}