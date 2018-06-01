$(function(){
  $("#submit").click(function(){

    var question1Input = parseInt($("input:radio[name=question-1]:checked").val());
    var question2Input = parseInt($("input:radio[name=question-2]:checked").val());
    var question3Input = parseInt($("input:radio[name=question-3]:checked").val());
    var question4Input = parseInt($("input:radio[name=question-4]:checked").val());

    var score= question1Input + question2Input + question3Input + question4Input;
    alert(score);

    var question4Input = $("input:radio[name=question-5]:checked").val();
    var question5Input = $("input:radio[name=question-6]:checked").val();

    if(question4Input === "disqualify"){
      
    }

    $("#quiz-container").hide();
    $("#results-container").show();


    event.preventDefault();
  });

  $("#try-again").click(function(){

    $("#results-container").hide();
    $("#quiz-container").show();


    event.preventDefault();
  });







})
