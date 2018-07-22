/*
* Determinates if a number is multiple of another
* @param {positive interger} a
*   Number to check (no validation are done)
* @param {positive interger} b
*   Number to check whether it's multiple (no validation are done)
* @return {boolean}
*   Whether b is multiple of a
*/
function isMultipleOf (a, b) {

    var isMultiple = false;

    if (b % a == 0) {
        isMultiple = true;
    }

    return isMultiple;
};

// likely multipled number
var b;
var sumMultiples = 0;

for (b = 1; b < 1000; b++) {
 
    // multiple of 3
    var isMultipleOf3 = isMultipleOf(3, b);

    if (isMultipleOf3) {
        sumMultiples += b;
    }
    else {
        //  multiple of 5
        var isMultipleOf5 = isMultipleOf(5, b);

        if (isMultipleOf5) {
            sumMultiples += b;
        }
    }
}

// show solution
$(document).ready(function(){
    $("#sumSolution").text(sumMultiples);
 });
