$(document).ready(function() {
  var original = 16;
  for (var y = 0; y < original * original; y++) {
    $(".squares").width((780 - 15) / original);
    $(".squares").height((780 - 17) / original);
    $("<div class='squares'></div>").appendTo('#main');
  }
  $('.squares').hover(
    function() {
      $(this).addClass('hover');
    }
  )

});

function gridq() {
  $('.squares').removeClass('hover');
  $('div').remove('.squares');

  var newgrid = prompt("How many squares on each side?");
  var widthscreen = 192;

  if (newgrid > 0) {
    for (var x = 0; x < newgrid * newgrid; x++) {
      $(".squares").width(widthscreen / newgrid);
      $(".squares").height(widthscreen / newgrid);
      $("<div class='squares'></div>").appendTo('#main');
    }
    $('.squares').hover(
      function() {
        $(this).addClass('hover');
      }
    )
  }
}
