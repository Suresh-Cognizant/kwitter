function addUser(){
    player1name=document.getElementById("number1").value;
    player2name=document.getElementById("number2").value;
    localStorage.setItem("number1_name",player1name);
    localStorage.setItem("number2_name",player2name);
    window.location="page2_.index.html"}
