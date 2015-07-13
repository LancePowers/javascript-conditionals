var checkState = function (){
    var unitedStates = ["AK","AL","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];
    var state = prompt("Where you from? NY? CA? CO?");
    for (var i = 0; i < (unitedStates.length); i++) {
      var test = unitedStates[i];
      var stateCap = state.toUpperCase();
      //console.log(test + stateCap);
      if (test === stateCap) {
        $("#state").addClass( "selected" );
        $("#state").text( stateCap );
      }
    }


}
