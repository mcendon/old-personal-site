$(document).ready(function(){

  $(".product-form").on("submit", function(e) {
    e.preventDefault();
    alert("Email enviado");
    $("#cancelar").trigger("click");
  });

  $(".btn-cotizar").on("click", function(e) {
    var $productForm = $(".product-form");
    var $productImg = $(".product-info");
    if ($productForm.is(":hidden")) {
      $productImg.fadeOut(300, function() {
          $(this).hide();
          $productForm.fadeIn(300, function() {$(this).show()});
      });
    }
    $(this).parents(".panel").hide();
  });

  $("#cancelar").on("click", function(e) {
    var $productForm = $(".product-form");
    var $productImg = $(".product-info");
    $productForm.fadeOut(300, function() {
        $(this).hide();
        $(".btn-cotizar").parents(".panel").show();
        $productImg.fadeIn(300, function() {
            $(this).show();
        });
    });
  });

  $('#fullpage').fullpage({
      responsiveWidth:1000,
      responsiveHeight: 500
  });

});
