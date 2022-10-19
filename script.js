
//$(".text, .image").hide();
//
//$("h1").click(function() {
//    $(".text").fadeIn(1000);
//});
//
//$(".text").click(function() {
//    $(".image").slideDown(2000); /*.show(), .slideUp()*/
//});

//$(".big_image, .x").hide();
//
//$(".image").click(function() {
//    $(".big_image").fadeIn(1000);
//    $(".x").fadeIn(1000);
//});
//
//$(".big_image").click(function() {
//    $(this).fadeOut(1000); // or $(".big_image").fadeOut(1000);
//});


$(".container2").hide();
$(".container3").hide();

// Takes you to home page
$(".home").click(function() {
    $(".people").css("background-color", "#E80000");
    $(".people").css("color", "white");
    $(".people").css("box-shadow", "0 1vh 0 0 rgba(0, 0, 0, 0.5)");
    $(".people").css("margin", "1.5vh 1vh 1vh 1vh");
    
    $(".home").css("background-color", "#FFED00");
    $(".home").css("color", "black");
    $(".home").css("box-shadow", "none");
    $(".home").css("margin", "2vh 1vh 1vh 1vh");
    
    $(".dinos").css("background-color", "#E80000");
    $(".dinos").css("color", "white");
    $(".dinos").css("box-shadow", "0 1vh 0 0 rgba(0, 0, 0, 0.5)");
    $(".dinos").css("margin", "1.5vh 1vh 1vh 1vh");
    
    $(".container2").hide();
    $(".container3").hide();
    $(".container").show();
});

// Takes you to dinos page
$(".dinos").click(function() {
//    $(this).css("background-color", "yellow");
    $(".people").css("background-color", "#E80000");
    $(".people").css("color", "white");
    $(".people").css("box-shadow", "0 1vh 0 0 rgba(0, 0, 0, 0.5)");
    $(".people").css("margin", "1.5vh 1vh 1vh 1vh");
    
    $(".home").css("background-color", "#E80000");
    $(".home").css("color", "white");
    $(".home").css("box-shadow", "0 1vh 0 0 rgba(0, 0, 0, 0.5)");
    $(".home").css("margin", "1.5vh 1vh 1vh 1vh");
    
    $(".dinos").css("background-color", "#FFED00");
    $(".dinos").css("color", "black");
    $(".dinos").css("box-shadow", "none");
    $(".dinos").css("margin", "2vh 1vh 1vh 1vh");
    
    $(".container").hide();
    $(".container3").hide();
    $(".container2").show();
});

// Takes you to people page
$(".people").click(function() {
    $(".people").css("background-color", "#FFED00");
    $(".people").css("color", "black");
    $(".people").css("box-shadow", "none");
    $(".people").css("margin", "2vh 1vh 1vh 1vh");
    
    $(".home").css("background-color", "#E80000");
    $(".home").css("color", "white");
    $(".home").css("box-shadow", "0 1vh 0 0 rgba(0, 0, 0, 0.5)");
    $(".home").css("margin", "1.5vh 1vh 1vh 1vh");
    
    $(".dinos").css("background-color", "#E80000");
    $(".dinos").css("color", "white");
    $(".dinos").css("box-shadow", "0 1vh 0 0 rgba(0, 0, 0, 0.5)");
    $(".dinos").css("margin", "1.5vh 1vh 1vh 1vh");
    
    $(".container").hide();
    $(".container2").hide();
    $(".container3").show();
});

//// Takes you to home page
//$(".home").click(function() {
//    $(".people").css("background-color", "red");
//    $(".home").css("background-color", "yellow");
//    $(".dinos").css("background-color", "red");
//    $(".container2").hide();
//    $(".container3").hide();
//    $(".container").show();
//    
//});
//
//// Takes you to dinos page
//$(".dinos").click(function() {
//    $(".people").css("background-color", "red");
//    $(".home").css("background-color", "red");
//    $(".dinos").css("background-color", "yellow");
//    $(".container").hide();
//    $(".container3").hide();
//    $(".container2").show();
//});
//
//// Takes you to people page
//$(".people").click(function() {
//    $(".people").css("background-color", "yellow");
//    $(".home").css("background-color", "red");
//    $(".dinos").css("background-color", "red");
//    $(".container").hide();
//    $(".container2").hide();
//    $(".container3").show();
//});