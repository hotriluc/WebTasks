
$("h1").addClass("big-title");

$("h1").text("good bye");
$("button").text("Do not click me");
// Setting attribute
$("a").attr("href","https://www.google.com/")


$("h1").click(function(){
  $("h1").css("color","red");
})

//Applying event listener to buttons
$("button").click(function(){
  $("h1").css("color","purple");
})


// $("body").keypress(function(event){
//   $("h1").text(event.key);
// })

$("h1").append("<button>Hey i am a new appeded buton</button>")
$("h1").prepend("<button>Hey i am a new prepended buton</button>")

$("button").click(function(){
  $("h1").animate({opacity:0.5});
})
// $("button").remove();
