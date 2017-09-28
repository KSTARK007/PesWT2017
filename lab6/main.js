var Random_number =  Math.round(Math.random()*100);
alert("Please play this game on FireFox ");
var confirm = confirm("are you on firefox ");
var counter = 0;
var ans = 0;
if(confirm)
{    document.write("<table>");
    for(var i=0;i<10;i++)
    {     var k=(parseInt(prompt("enter a number between 1-100")));
        if(isNaN(k))
            counter = counter + 1;
        if(isNaN(k)!=1)
            counter = 0;
        if(counter == 3)
            break;
        if(k==Random_number)
        {    alert("YOU WIN");
            document.write("<tr>");
            document.write("<td>" + k + "</td>");
            document.write("<td>" + "equal" + "</td>");
            document.write("</tr>");
            ans = 1;
            break;

        }
        if(i%2==0)
        document.write("<tr id = k1>");
        if(i%2==1)
        document.write("<tr id = k2>");
        document.write("<td>" + k + "</td>");
        if(k<Random_number)
            document.write("<td>" + "less" + "</td>");
        if(k> Random_number)
            document.write("<td>" + "more" + "</td>");
        document.write("</tr>");

    }
    if(counter == 3)
    {
        alert("SORRY LOST CAUSE OF WRONG TYPE");
    }
    if(ans==0 && counter != 3)
    {
        alert("SORRY U ARE OUT OF CHANCE");
    }
}
else
{
    alert("thank you for playing ");
}
