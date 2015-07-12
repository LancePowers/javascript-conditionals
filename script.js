/////////////////
//Phone Number//
///////////////
var checkPhone = function(){
var phoneNumber = prompt("Can I get your digits? Make sure you throw those dashes in.");
var dash, numOnly, nanCheck;
// get phone number and declare variables for the dashes, the numbers only, and a boolean number check

var updateVar = function(){
// function to verify 2 dashes in the right spot and all other characters are numbers
  nanCheck = true;
  dash = phoneNumber.charAt(3) + phoneNumber.charAt(7); //<--is there a better way of doing this?
  numOnly = phoneNumber.substring(0,3) + phoneNumber.substring(4,7) + phoneNumber.substring(8,12);//<-- same here
  //^---Is there a way to make the number of .substrings and their values into a function that could accept params for birthday or postal code?

  for (var i = 0; i < numOnly.length; i++) {
    if((isNaN (numOnly.charAt(i)))){nanCheck = false;}//<--Do I need the {} in this situation
  }

}

updateVar();
//console.log(dash,numOnly,nanCheck,phoneNumber.length);<-- need to learn how to do this better in console.



while (dash !== "--" || nanCheck === false || phoneNumber.length !== 12){
  phoneNumber = prompt("Let's try this again, for example, my number is 123-456-7890");
  updateVar();
  //console.log(dash,numOnly,nanCheck);
}

$("#phone").addClass( "selected" );
$("#phone").text( phoneNumber );

}
// loop through and verify untill you get a valid response.

var checkState = function (){
    var unitedStates = "AKALAZARCACOCTDEFLGAHIIDILINIAKSKYLAMEMDMAMIMNMSMOMTNENVNHNJNMNYNCNDOHOKORPARISCSDTNTXUTVTVAWAWVWIWY";
    var state = prompt("Where you from? NY? CA? CO?");
    for (var i = 0; i < (unitedStates.length/2); i++) {
      var test = (unitedStates.charAt(i).toString + unitedStates.charAt(i++).toString);
      var stateCap = state.toUpperCase();
      if (test === stateCap) {
        $("#state").addClass( "selected" );
        $("#state").text( stateCap );
      } else {
        $("#state").text( "wrong" );
      }
    }


}


//  ------- Birthday is below here --------
// I get the concept, but there's a bug. I want to see if I can get the phone script
// to work for both before I put more time into this.
//
//
// /////////////
// //Birthday//
// ///////////
// // AKA a very repetitive function for use with special people who haven't figured out a good way to pass (paramaters?) through it.
// var checkBirth = function(){
// var birthday = prompt("What's your birthday?");
// var slash, numOnly, nanCheck;
//
// var updateVar = function(){
// // function to verify 2 slashes in the right spot and all other characters are numbers
//   nanCheck = true;
//   slash = birthday.charAt(2) + birthday.charAt(4); //<--I answered my question from above. There is definitely a better way of doing this.
//   numOnly = birthday.substring(0,1) + birthday.substring(3,4) + birthday.substring(5,6);//<-- But I don't know what the hell it is.
//
//   for (var i = 0; i < numOnly.length; i++) {
//     if((isNaN (numOnly.charAt(i)))){nanCheck = false;}//<--)))) looks strange, is this a good way to format?
//   }
//
// }
//
// updateVar();
// console.log(dash,numOnly,nanCheck,phoneNumber.length); //<-- need to learn how to do this better in console.
//
//
//
// while (slash !== "//" || nanCheck === false || birthday.length !== 8){  //<--
//   birthday = prompt("You sure bout that?  This is my birthday.. 04/02/84 \n Let's try again, Your turn... ");
//   updateVar();
//   //console.log(dash,numOnly,nanCheck);
// }
//
// $("#birthday").addClass( "selected" );
// $("#birthday").text( phoneNumber );
//
// }
//
//
// //function to check for special characters at certain places.
// //function to
