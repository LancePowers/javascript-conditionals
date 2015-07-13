function checkZip(){
  var zip = prompt("What is your zip code?");
  while ((zip.length !== (5 || 10)) && (zip.charAt(5)!== ("-" || ""))) {
    zip = prompt("Nope. Try again");
  }
  $("#zip").addClass( "selected" );
  $("#zip").text( zip );
}
