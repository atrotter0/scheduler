function resetForm() {
  $("#full-name").val("");
  $("#description").val("");
  $("#datepicker").val("");
  $("#time").val("");
}

function buildConfirmation(name, desc, date, time) {
  $("#name-confirm").text(name);
  $("#description-confirm").text(desc);
  $("#date-confirm").text(date);
  $("#time-confirm").text(time);
}

$(document).ready(function() {
  $( "#datepicker" ).datepicker();

  $("#reset").click(function() {
    resetForm();
  });

  $("#submit").click(function(e) {
    e.preventDefault();

    var name = $("#full-name").val();
    var description = $("#description").val();
    var date = $("#datepicker").val();
    var time = $("#time").val();
    buildConfirmation(name, description, date, time);
  });

  $("#confirm").click(function() {
    resetForm();
    $("body").removeClass("modal-open");
    $("#basicModal").removeClass("in");
    $(".modal-backdrop").remove();
  });
});
