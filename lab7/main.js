
var D = prompt("enter the date in the form of DD/MM/YYYY");
var D_l=D.split("/");
if(Number(D_l[0])>31 || Number(D_l[1]>12))
    alert("enter a valid date");
else
{
var su="th";
var D_ans= new Date(Number(D_l[2]),Number(D_l[1]),Number(D_l[0]));
alert(D_ans);
if(Number(D_l[0]) == 1 || Number(D_l[0]) == 21 || Number(D_l[0]) == 31 )
    su = "st";
if(Number(D_l[0]) == 2 || Number(D_l[0]) == 22 )
    su = "nd";
if(Number(D_l[0]) == 3 || Number(D_l[0]) == 23 )
    su = "rd";
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var day = days[D_ans.getDay()];
var month = month[D_ans.getMonth()];

document.write(Number(D_l[0]) + "<sup>" + su + "</sup>" + "  " + month + "  " + Number(D_l[2])+"," + day);

var el = document.createElement("a");
el.innerHTML="click here for javascript code";
el.setAttribute("href","main.js");
el.setAttribute("target","_blank");
document.body.appendChild(el);
}
