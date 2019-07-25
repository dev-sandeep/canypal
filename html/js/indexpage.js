/* for scrolling */

$(".continue-btn").click(function() {
  scrollTo($(this).attr("data"));
});

function scrollTo(id) {
  id = parseInt(id) + 1;
  $("html, body").animate(
    {
      scrollTop: $("#s" + id).offset().top
    },
    1000
  );
}

/* toggle btns */
$(".toggle-btn").click(function() {
  $(this).toggleClass("btn-danger");
});

/* redirect */
$(".redirectto").click(function() {
  var url = $(this).attr("url");
  window.location.replace(url);
});

