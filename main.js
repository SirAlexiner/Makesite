/*jslint white: true */

function showText (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

$(document).ready(function () {
var div1 = document.createElement("DIV"),
    header1 = document.createElement("H1"),
    div2 = document.createElement("DIV"),
    p1 = document.createElement("P"),
    p2 = document.createElement("P"),
    div3 = document.createElement("DIV"),
    hr1 = document.createElement("HR"),
    hr2 = document.createElement("HR");
setTimeout(function () {
$('body').css({"background-color": "#333", "margin": "0px", "padding": "0px", "color": "white"});
setTimeout(function () {
div1.className = "div1";
document.body.appendChild(div1);
setTimeout(function () {
$('.div1').css("background-color", "#aaa");
$('.div1').css("width", "100%");
$('.div1').css("height", "65px");
setTimeout(function () {
$('.div1').append(header1);
header1.className = "header1";
setTimeout(function () {
showText(".header1", "Makesite", 0, 50);
setTimeout(function () {
$('.div1').css("text-align", "center");
setTimeout(function () {
$('.header1').css("color", "#eee");
setTimeout(function () {
$('.header1').css("text-shadow", "5px 5px 5px #555");
setTimeout(function () {
$('.header1').css("padding", "10px");
setTimeout(function () {
$('.header1').css("font-size", "40px");
setTimeout(function () {
$('.header1').css("margin", "0px");
setTimeout(function () {
$('.header1').css("font-family", "cubic");
setTimeout(function () {
$('.header1').css("padding-top", "0px");
setTimeout(function () {
$('.div1').css("height", "80px");
setTimeout(function () {
$('.header1').css("margin-top", "-8px");
setTimeout(function () {
$('.header1').css("float", "left");
setTimeout(function () {
$('.div1').css({"box-shadow": "inset  0 -15px 20px -8px #333", "-webkit-box-shadow": "inset  0 -15px 20px -8px #333", "-moz-box-shadow": "inset  0 -15px 20px -8px #333"});
setTimeout(function () {
$('.div1').css("background-image", "url(wbg.png)");
setTimeout(function () {
$('body').css("background-color", "white");
setTimeout(function () {
$('.div1').css({"box-shadow": "inset  0 -23px 20px -8px #fff", "-webkit-box-shadow": "inset  0 -23px 20px -8px #fff", "-moz-box-shadow": "inset  0 -23px 20px -8px #fff"});
setTimeout(function () {
$('.div1').css("height", "90px");
setTimeout(function () {
$('.header1').css("margin-left", "20px");
setTimeout(function () {
document.body.appendChild(div2);
div2.className = "div2";
setTimeout(function () {
$('.div2').append(hr1);
hr1.className = "hr1";
setTimeout(function () {
$('.hr1').css("border", "0");
setTimeout(function () {
$('.hr1').css("height", "1px");
setTimeout(function () {
$('.hr1').css({"background-image": "-webkit-linear-gradient(left, rgba(0,0,0,0), rgba(0,0,0,1), rgba(0,0,0,0))"});
setTimeout(function () {
$('.div2').css("padding", "5px");
setTimeout(function () {
$('.div1').css({"box-shadow": "none", "-webkit-box-shadow": "none", "-moz-box-shadow": "none"});
setTimeout(function () {
$('.div1').css("height", "80px");
setTimeout(function () {
$('.header1').css("margin-top", "-5px");
setTimeout(function () {
$('.hr1').css("height", "10px");
setTimeout(function () {
$('.hr1').css("margin-top", "-5px");
setTimeout(function () {
$('.hr1').css("width", "100%");
setTimeout(function () {
$('.header1').css("padding", "0px");
setTimeout(function () {
$('.hr1').css({"background-image": "-webkit-linear-gradient(left, rgba(0,0,0,0), rgba(97,97,97,1), rgba(0,0,0,0))"});
setTimeout(function () {
$('.div2').append(p1);
p1.className = "p1";
setTimeout(function () {
$('.p1').css("color", "black");
setTimeout(function () {
showText(".p1", "Makesite", 0, 50);  
setTimeout(function () {
$('.p1').css("margin", "15px");
setTimeout(function () {
$('.p1').css("font-size", "25px");
setTimeout(function () {
$('.p1').css("font-family", "keep");
setTimeout(function () {
$('.p1').css("font-family", "simple");
setTimeout(function () {
$('.div2').css("opacity", "0.5");
setTimeout(function () {
$('.div2').css("background-image", "url(wbg.png)");
setTimeout(function () {
$('.div2').css("height", "100%");
setTimeout(function () {
$('.div2').css("opacity", "1");
setTimeout(function () {
$('.div2').css("opacity", "0.75");
setTimeout(function () {
$('.p1').css("opacity", "1");
setTimeout(function () {
$('.hr1').css({"background-image": "-webkit-linear-gradient(left, rgba(0,0,0,0), rgba(0,0,0,1), rgba(0,0,0,0))"});
setTimeout(function () {
$('.div2').css("opacity", "0.9");
setTimeout(function () {
$('.div2').css("opacity", "1");
setTimeout(function () {
$('.p1').css("margin", "30px");
setTimeout(function () {
$('.p1').text("");
setTimeout(function () {
showText(".p1", "Hello, Makesite is a website that builds it self as you visit it. not a single element you see on this website has been writen in a html or a php file, everything including the styling is all generated in the main js file. this is to show how a website is buildt from the bottom and how webdesigners mess around trying to create a pretty website.", 0, 50);
setTimeout(function () {
$('.p1').css("color", "white");
setTimeout(function () {
$('.p1').css("text-shadow", "5px 5px 5px #000");
setTimeout(function () {
$('.p1').css("color", "#bbb");
setTimeout(function () {
$('.p1').css("color", "#ddd");
setTimeout(function () {
$('.p1').css("padding", "5px");
setTimeout(function () {
$('.p1').css("color", "#eee");
setTimeout(function () {
$('.p1').css("line-height", "150%");
setTimeout(function () {
$('.p1').css("font-family", "cubic");
setTimeout(function () {
$('.p1').css("font-family", "ass");
setTimeout(function () {
$('.p1').css("font-size", "50px");
setTimeout(function () {
$('.div2').append(hr2);
hr2.className = "hr2";
setTimeout(function () {
$('.hr2').css("border", "0");
setTimeout(function () {
$('.hr2').css("height", "1px");
setTimeout(function () {
$('.hr2').css({"background-image": "-webkit-linear-gradient(left, rgba(0,0,0,0), rgba(0,0,0,1), rgba(0,0,0,0))"});
setTimeout(function () {
$('.hr2').css("height", "10px");
setTimeout(function () {
$('.header1').css("font-family", "ass");
setTimeout(function () {
$('.header1').css("font-size", "90px");
setTimeout(function () {
$('.div2').prepend(header1);
setTimeout(function () {
$('.div1').remove();
setTimeout(function () {
showText(".header1", ", a Javascript generated website", 0, 50);
setTimeout(function () {
$('.header1').css("font-size", "45px");
setTimeout(function () {
$('.header1').css("margin-top", "15px");
setTimeout(function () {
$('.hr2').css({"background-image": "-webkit-linear-gradient(left, rgba(0,0,0,0), rgba(255,255,255,1), rgba(0,0,0,0))"});
setTimeout(function () {
$('.hr1').css({"background-image": "-webkit-linear-gradient(left, rgba(0,0,0,0), rgba(255,255,255,1), rgba(0,0,0,0))"});
setTimeout(function () {
$('.p1').css("line-height", "125%");
setTimeout(function () {
$('.div2').css("height", "90%");
setTimeout(function () {
$('.div2').css("height", "98%");
setTimeout(function () {
$('.div2').css("height", "99%");
setTimeout(function () {
$('.div2').css("height", "98.9%");
setTimeout(function () {
$('.div2').css("height", "98.5%");
setTimeout(function () {
$('.div2').append(p2);
p2.className = "p2";
setTimeout(function () {
showText(".p2", "Red Dead Code and Games", 0, 50);
setTimeout(function () {
$('.p2').css("text-align", "center");
setTimeout(function () {
$('.p2').css("font-family", "ass");
setTimeout(function () {
$('.p2').css("font-size", "30px");
setTimeout(function () {
$('.p2').css("text-shadow", "5px 5px 5px #555");
setTimeout(function () {
$('.p2').css("text-shadow", "5px 5px 5px #333");
setTimeout(function () {
document.body.appendChild(div3);
div3.className = "div3";
setTimeout(function () {
$('.div3').css({"background-color": "red", "width": "50px"});
setTimeout(function () {
$('.div3').css("height", "50px");
setTimeout(function () {
$('.div3').css("border-radius", "500px");
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100); 
}, 100); 
}, 100);  
}, 100);  
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);    
});

