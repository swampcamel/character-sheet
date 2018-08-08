$(function() {
  $("form#generator").submit(function(event) {
    event.preventDefault();
    var nameVar = $("#name-input").val();
    var genderVar = $("input:radio[name=gender]:checked").val();
    var heightVar = $("#height-input").val();
    var weightVar = $("#weight-input").val();
    var raceVar = $("#race-select").val();
    var classVar = $("#class-select").val();
    var alignVar = $("#align-select").val();

  });
});
