var s1 = prompt("enter the string;");
var s=s1.split("");
var i=0;

var s_ans=[];
for(i=0;i<s.length;i++)
{
    var k = s[i].charCodeAt();
    if(k>96&&k<123)
    {
        var diff = k-96;
        k=k+diff;
    }
    if(k>64&&k<91)
    {
        var diff = k-63;
        k=k+diff;
    }
    if(k>122)
    {
        k=k-123 + 97;
    }
    if(k>90 && k<97)
    {
        k=k-91 + 65;
    }
    s_ans[i]=(String.fromCharCode(k));
}

document.getElementById("present").innerHTML = s1;
document.getElementById("after").innerHTML=s_ans.join("");
