var tarScore = 0;
// var pointOptions = [4, 7, 13, 21];
//the pointOptions variable may be obsolete but I am going to use these numbers

function targetScore() {
    tarScore = Math.floor((Math.random() * 31) + 50);
    //has a range of 50 - 80
    console.log(tarScore);
}
//this is my function to set the target score.

targetScore();
//calling the function targetScore. i can use this function to reset the target score when it needs to be reset

var pHelmet = $("<img>");
var vHelmet = $("<img>");
var bHelmet = $("<img>");
var lHelmet = $("<img>");
// setting my helmet variables for each of the 4 team helmets
pHelmet.addClass("helmet-image");
vHelmet.addClass("helmet-image");
bHelmet.addClass("helmet-image");
lHelmet.addClass("helmet-image");
//adding the class of "helmet-image" to each of the 4 team helmets
pHelmet.attr("src", "assets/images/packers_helmet.jpg");
vHelmet.attr("src", "assets/images/vikings_helmet.jpg");
bHelmet.attr("src", "assets/images/bears_helmet.jpg");
lHelmet.attr("src", "assets/images/lions_helmet.jpg");
//adding the source codes to my helmet variables
pHelmet.attr("data-helmetValue", 21);
vHelmet.attr("data-helmetValue", 13);
bHelmet.attr("data-helmetValue", 7);
lHelmet.attr("data-helmetValue", 4);
//adding attributes that may be called upon later
$(".helmets").append(pHelmet);
$(".helmets").append(vHelmet);
$(".helmets").append(bHelmet);
$(".helmets").append(lHelmet);
//appending them to the html doc
//I have tried just about every combination imaginable and I cannot get these images to append...
$(".helmet-image").on("click", function() {
    var helmetValue = ($(this).attr("data-helmetValue"));
    helmetValue = parseInt(helmetValue);
    counter += helmetValue;
    
    // change text of score("New score: " + counter);

    if (counter === targetNumber) {
    // new text box with ("You win!");
    }

    else if (counter >= targetNumber) {
    // same as winning text box but with("You lose!!");
    }

  });





// // point possibilties for clicking helmets , may be changed later
// for (var i = 0; i < pointOptions.length; i++) {
//     var helmetImgs = $("<img>");
//     //believe this creates an image tag and sets our variable helmetImages equal to it
//     helmetImgs.addClass("helmet-images");
//     helmetImgs.attr("src", "assets/images/packers_helmet.jpg");
//     //those next two lines are supposed to add a class of helmet-images
//     //and then add a source tag of my packers helmet image
//     //but we havent actually added any of this to the HTML page yet
//     $("#helmets").append(helmetImgs);



// }

//code for adding an image
// $("#helmets").append('<img id="packersHelmet" src="assets/images/packers_helmet.jpg" />')