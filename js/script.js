//Choose a random color
var btn = document.getElementsByTagName("button");
var body = document.getElementsByTagName("body");


var randomColor = () => {
    var r = (Math.floor(Math.random() * 255));
    var g = (Math.floor(Math.random() * 255));
    var b = (Math.floor(Math.random() * 255));
    var color = 'rgb' + '(' + r + ', ' + g + ', ' + b + ')' ;
    body[0].style.backgroundColor = color;
}


btn[0].addEventListener("click", () => {
    console.log("click");
   randomColor();

})
