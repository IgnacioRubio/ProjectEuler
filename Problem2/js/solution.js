// fibonnaci's pair terms to sum
var f1 = 1;
var f2 = 2;

// number to no exceed when looking for fibonnaci numbers
var limit = 4000000;

// auxiliar variables
var temp;
var sumFiboEven = 0;


while (f2 < limit) {

    // check even number
    if (f2 % 2 == 0) {
        sumFiboEven += f2;
    }

    temp = f2;
    f2 = f1 + f2;
    f1 = temp;
}

// show solution
$("document").ready(function (){
    $("#sumSolution").text(sumFiboEven);
});