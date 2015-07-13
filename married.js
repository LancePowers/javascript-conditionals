function checkMarried(){
  var status = prompt("Are you married? (yes or no)");
  statusCap = status.toUpperCase();
  console.log(status, statusCap)
  while (statusCap !== ("YES" || "NO")) {
    status = prompt("Not quite. Try YES or NO.");
  }
  $("#married").addClass( "selected" );
  $("#married").text( status );
}
