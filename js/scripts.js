$(function(){
  $("#submit").click(function(){

    var question1Input = parseInt($("input:radio[name=question-1]:checked").val());
    var question2Input = parseInt($("input:radio[name=question-2]:checked").val());
    var question3Input = parseInt($("input:radio[name=question-3]:checked").val());
    var question4Input = parseInt($("input:radio[name=question-4]:checked").val());

    var score= question1Input + question2Input + question3Input + question4Input;

    var question5Input = $("input:radio[name=question-5]:checked").val();
    var question6Input = $("input:radio[name=question-6]:checked").val();

    var inclusivityLecture = "<strong>Epicodus may not be the right fit for you if you do not know how to listen to and respect others' unique experiences.</strong><br>Respect for students' and staff's diverse backgrounds is a cornerstone of Epicodus's Code of Conduct. Epicodus prohibits discrimination against or harassment with regards to any local, state, or federal protected classes towards its applicants, students, employees. Protected classes include race, color, national origin, age, disability, sex, gender identity, religion, reprisal, political beliefs, marital status, familial or parental status, sexual orientation, receipt of public assistance, and protected genetic information.<br><br>";

    var whatItTakesLecture = "<strong>Epicodus might not be a good fit for you if you are unable to handle failure.</strong><br>Learning to code is very challenging and will be a process of repeated failure, so perhaps you should look into a different career path.<br><br>";

    var cssReact = "CSS/React";
    var cSharp = "C#/.NET";
    var rubyRails = "Ruby/Rails";

    var cssReactInfo = "";
    var cSharpInfo = "";
    var rubyRailsInfo = "";

    var cssReactImg = "<img src='css-react.jpg' alt='css/react image'>";
    var cSharpImg = "<img src='c-sharp.jpg' alt='css/react image'>";
    var rubyRailsImg = "<img src='ruby-rails.jpg' alt='css/react image'>";

    $("#quiz-container").hide();
    $("#clicked-container").show();

    if(question5Input === "disqualify" || question6Input === "disqualify"){
      if(question5Input === "disqualify" && question6Input === "disqualify"){
        $("#disqualify-description").html(inclusivityLecture + whatItTakesLecture);
        $("#disqualify-container").show();
      } else if(question5Input === "disqualify"){
        $("#disqualify-description").html(inclusivityLecture);
        $("#disqualify-container").show();
      } else{
        $("#disqualify-description").html(whatItTakesLecture);
        $("#disqualify-container").show();
      }
    } else if(score <= 5){
      $("#result-name").html(cssReact);
      $("#result-img").html(cssReactImg);
      $("#result-description").html(cssReactInfo);
      $("#disqualify-container").show();
    }
    // } else if(question5Input === "disqualify"){
    //   $("#disqualify-description").html(whatItTakesLecture);
    //   $("#disqualify-container").show();
    // }


    event.preventDefault();
  });

  $("#try-again").click(function(){

    $("#results-container, #disqualify-container, #clicked-container").hide();
    $("#quiz-container").show();


    event.preventDefault();
  });








});
