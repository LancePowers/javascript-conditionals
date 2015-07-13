var checkBirth = function(){
var birthday = prompt("What's your birthday?");
var slash, numOnly, nanCheck;
//console.log(birthday.charAt(2) + birthday.charAt(4));
var updateVar = function(){
// function to verify 2 slashes in the right spot and all other characters are numbers
  nanCheck = true;
  slash = birthday.charAt(2) + birthday.charAt(5); //<--I answered my question from above. There is definitely a better way of doing this.
  numOnly = birthday.substring(0,1,3,4,6,7) //+ birthday.substring(3,4) + birthday.substring(6,7);//<-- But I don't know what the hell it is.

  for (var i = 0; i < numOnly.length; i++) {
    if((isNaN (numOnly.charAt(i)))){nanCheck = false;}//<--)))) looks strange, is this a good way to format?
  }

}

updateVar();
console.log(slash,numOnly,nanCheck,birthday.length); //<-- need to learn how to do this better in console.



while (slash !== "//" || nanCheck === false || birthday.length !== 8){  //<--
  birthday = prompt("You sure bout that?  This is my birthday.. 04/02/84 \n Let's try again, Your turn... ");
  updateVar();
  //console.log(dash,numOnly,nanCheck);
}

$("#birthday").addClass( "selected" );
$("#birthday").text( birthday );

}
