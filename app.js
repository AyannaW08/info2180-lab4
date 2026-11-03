$(document).ready(function () {
  $("#search").on("click", function () {
    $.ajax("superheroes.php").done(function (r) {
      alert(r);
    });
  });
});