function fun()
{
    var pass = document.querySelector("#pass").value;
    var repass = document.querySelector("#repass").value;
    if(pass == repass && pass != "")
    {
      document.querySelector("#sub").setAttribute("type","submit");
    }
    else
    {
      document.querySelector("#sub").setAttribute("type","button");
      document.querySelector("#pass").value = "";
      document.querySelector("#repass").value = "";
      alert("password dont match");
    }

}
