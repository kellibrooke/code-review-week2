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

    var cssReactInfo = "CSS is the language for describing the presentation of Web pages, including colors, layout, fonts, and other stylistic choices. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, and printers. HTML, used for building the structure of the page, and CSS, used for the visual layout, are the two basic languages involved in the building of web pages and web applications. React is a JavaScript library used to create dynamic, interactive user interfaces. It allows a site to quickly update many different elements at once, without reloading the page. Since its development at Facebook in 2011 it has exploded in popularity. In fact, a recent survey by the popular question-and-answer site Stack Overflow reported React's usage increased by over 300% in 2016 alone. Examples of companies and products that use React include AirBnB, BBC, Ebay, Facebook, Instagram, Lyft, Netflix, New York Times, Reddit, Nike, Pinterest, Paypal, and many more.";
    var cSharpInfo = "C# is most popular among bigger established businesses, often for building internal software. Because it's been around for a long time and has the backing of Microsoft, it is one of the most in-demand languages in the job market. C# has also been going through a bit of a rebirth lately, with Microsoft open sourcing the language and surrounding platform, porting it to run on Mac and Linux, and incorporating many of the best features of other languages. If you like the idea of working for a larger company on business software, C# is a great choice.";
    var rubyRailsInfo = "Ruby is a favorite language of developers building interactive web applications. If an app involves users creating accounts, entering information, and interacting with dynamic content, there's a good chance it is built with Ruby. Ruby became popular because the Rails framework, which is written with Ruby, simplified many of the common tasks associated with building web applications. It's most popular with startups and smaller companies who are looking to build their product quickly. Though each language has its niche, there is plenty of crossover. For example, Rails' popularity inspired copycats in just about every language, and so you'll see interactive web applications written in C#, Java, and PHP, with Rails-like frameworks including .NET MVC, Spring, and Laravel. Even at one company, you might find them using PHP for their marketing site, Ruby for their web application, and Java for their back-end processing. ";

    var cssReactImg = "<img src='img/css-react.jpg' alt='css/react image'>";
    var cSharpImg = "<img src='img/c-sharp.jpg' alt='css/react image'>";
    var rubyRailsImg = "<img src='img/ruby-rails.jpg' alt='css/react image'>";

    var yourName = $("#your-name").val();

    $(".result-user").html(yourName);
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
    } else if(score <= 6){
      $("#result-name").html(cssReact);
      $("#result-img").html(cssReactImg);
      $("#result-description").html(cssReactInfo);
      $("#results-container").show();
    } else if(score < 10 && score > 6){
      $("#result-name").html(cSharp);
      $("#result-img").html(cSharpImg);
      $("#result-description").html(cSharpInfo);
      $("#results-container").show();
    } else{
      $("#result-name").html(rubyRails);
      $("#result-img").html(rubyRailsImg);
      $("#result-description").html(rubyRailsInfo);
      $("#results-container").show();
    }

    event.preventDefault();

  });

  $("#try-again").click(function(){

    $("#results-container, #disqualify-container, #clicked-container").hide();
    $("#quiz-container").show();

    event.preventDefault();
  });








});
