$(function(){
$("#rollup-banner").css("background-position", "-3920px");
  setInterval(function() {
      var $e = $("#rollup-banner");
      var pos = $e.css("background-position");
      var displacement = pos.split(' '); // ["0%", "0%"]
      var x = Number(displacement[0].replace(/[^0-9-]/g, ''));
      if (Math.abs(x) > 5200)
        x = -3920;

      if ($('#rollup-banner:hover').length == 0) {
          $("#rollup-banner").css("background-position", x - 1 + "px");
      }
  }, 30);
})
