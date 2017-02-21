$(document).ready(function(){
  $("form#stress").submit(function(event){
    event.preventDefault();

    var signsCount = 0;
    var symptomsCount = 0;
    var copeCount = 0;
    var response = "";
    $("input:checkbox[name=stress-signs]:checked").each(function(){
      signsCount++;
    });

    $("input:checkbox[name=stress-symptoms]:checked").each(function(){
      symptomsCount++;
    });

    $("input:checkbox[name=stress-cope]:checked").each(function(){
      copeCount++;
    });

    if( signsCount === symptomsCount && signsCount === copeCount) {
      response = "you're pretty stressed, but you're trying to cope. try reducing stressors";

    }

    if(signsCount === 0 && symptomsCount === 0) {
      response = "you're doing pretty well. Good job managing your stress!"
    }

    if(copeCount >= signsCount || copeCount >= symptomsCount) {
      response = "You have some stress, but you're managing it. Keep it up!"
    }
    $("#stress-responses").text(response).show();


  });
});
