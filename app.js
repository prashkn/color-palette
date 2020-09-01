let array = ['a','b','c','d','e','f',1,2,3,4,5,6,7,8,9,0];
let color = "";
let character;
let colorID = document.getElementById("colorID");
document.body.onkeypress = function(e){
    if(e.keyCode == 32){
        color = "";
        for (let n = 0; n < 6; n++){
            character = Math.floor(Math.random() * array.length);
            color += array[character].toString();
        }
        colorID.innerHTML = color;
        document.body.style.background = "#"+color;
    }
}