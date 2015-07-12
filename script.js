/////////////////
//Phone Number//
///////////////
var phone = function(){
var phoneNumber = prompt("Can I get your digits? Make sure you throw those dashes in.");
var dash, numOnly, nanCheck;
// get phone number and declare variables for the dashes, the numbers only, and a boolean number check

var updateVar = function(){
// function to verify 2 dashes in the right spot and all other characters are numbers
  nanCheck = true;
  dash = phoneNumber.charAt(3) + phoneNumber.charAt(7); //<--is there a better way of doing this?
  numOnly = phoneNumber.substring(0,3) + phoneNumber.substring(4,7) + phoneNumber.substring(8,12);//<-- same here

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

}
// loop through and verify untill you get a valid response.
