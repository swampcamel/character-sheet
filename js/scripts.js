$(function() {
  $("form#generator").submit(function(event) {
    event.preventDefault();
    var nameVar = $("#name-input").val();
    console.log(nameVar);
    var genderVar = $("input:radio[name=gender]:checked").val();
    console.log(genderVar);
    var heightVar = $("#height-input").val();
    console.log(heightVar);
    var weightVar = $("#weight-input").val();
    console.log(weightVar);
    var raceVar = $("#race-select").val();
    console.log(raceVar);
    var classVar = $("#class-select").val();
    console.log(classVar);
    var alignVar = $("#align-select").val();
    console.log(alignVar);

// ================================================
// This area reserved for branching statement that does the following:
//
// 1. Checks _each_ form input value for an existing value
//
// 2. Branch 1 (: true) to an empty value, toggles css display: none; asking user to fill out all form fields before submitting.  Breakpoint in script after css toggle script.
//
// 3. Branch 2 (: false) executes the remaing script below.
// ================================================

    $("#c-name").text(nameVar);
    $("#c-name").addClass("marcellus");
    console.log($("#c-name").val());
    $("#c-gender").text(genderVar);
    $("#c-height").text(heightVar);
    $("#c-weight").text(weightVar);
    $("#c-race").text(raceVar);
    $("#c-class").text(classVar);
    $("#c-align").text(alignVar);
  });
});
