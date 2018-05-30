function resetForm() {
  $("#full-name").val("");
  $("#description").val("");
  $("#datepicker").val("");
  $("#time").val("");
}


$(document).ready(function() {
  $( "#datepicker" ).datepicker();

  $("#reset").click(function() {
    resetForm();
  });
});
