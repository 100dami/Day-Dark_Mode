function modechange() {
    if (document.getElementById("night_day").value == 'night') {
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.Color = "white";
        document.getElementById("night_day").value = "day";
    }
    else {
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.Color = "black";
        document.getElementById("night_day").value = "night";
    }
}