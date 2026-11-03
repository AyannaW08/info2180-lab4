$(document).ready(function () {
  $("#search").on("click", function () {
    const q = $("#query").val();
    $.ajax("superheroes.php", { data: {query: q} }).done(function (r) {
      $("#result").html(r);
    });
  });
});