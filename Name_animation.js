function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    // document.getElementById("pickme").style.color = color;
    document.getElementById("H").style.color = color;
    document.getElementById("rgb").innerHTML = color;
    // return color
}
//Simple Function For Clarity
function changeheadercolor() {
    colorInput = getRandomColor()
    header.style.color = colorInput;
}
//Now perform the action over Intervals
setInterval("changeheadercolor()", 500);