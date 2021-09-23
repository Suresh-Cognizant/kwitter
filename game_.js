player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function enter() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseint(number1) * parseint(number2);
   question_number = "<h4>" + number1 "x" + number2 + "</h4>";
   input_box = "<br>Answer :<input type='text' id='input_check_box' > ";
   check_button="<br><br><button class='btn btn-info' onclik='check'>check</button>";
   row = question_number + input_box + check_button;
   document.getElementById("output").innerHTML = row;
   document.getElementById("number1").value="";
   document.getElementById("number1").value="";
} 
var qestion_turn="player1";

    var answer_turn="player2";
    function check(){
var getanswer=document.getElementById("input_check_box").value;
answer=getanswer.toLowercase();
console.log("answer in lowercase is "+answer);
if (answer==word){
if(answer_turn=="player1"){
    player1score=player1score+1;
    document.getElementById(player1score).innerHTML=player1score;}
else{
  player2score=player2score+1;
  document.getElementById(player2score).innerHTML=player2score;
}

}
if (qestion_turn=="player1"){
    qestion_turn="player2";
    document.getElementById("playerqestion").innerHTML="qestion_turn-"+player2name;

}
else{
    qestion_turn="player1";
    document.getElementById("playerqestion").innerHTML="qestion_turn-"
}
if (answer_turn=="player1"){
    answer_turn="player2";
    document.getElementById("playeranswer").innerHTML="answer_turn-"+player2name;

}
else{
    answer_turn="player1";
    document.getElementById("playeranswer").innerHTML="answer_turn-"
}




    }