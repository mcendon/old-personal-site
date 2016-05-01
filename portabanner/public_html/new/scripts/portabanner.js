var pb = {
  initialize: function() {
    pb.products = [{"title": "Producto 1",
     "sku": "RU-85E",
     "image": "img/roll-up-banner-1.jpg",
     "price": 150.52,
     "short_description": "ESTRUCTURA ROLLUP ECO 0.85 x 2.00 METROS",
     "long_description": "StandPortátil® 1 el sistema ideal para gráficas de gran formato. \
      Este producto es compacto, portable y extremadamente fácil de armar.\
      Se puede configurar de forma lineal, curva, cóncava o convexa. \
      La manera más elegante y profesional de exponer sin uniones gráficas, \
      imágenes de gran tamaño. Los textos y las gráficas no estarán interrumpidas por \
      costuras y serán mucho más atractivas."},
      {"title": "Producto 2",
       "sku": "RU-95E",
       "image": "img/roll-up-banner-1.jpg",
       "price": 200.00,
       "short_description": "ESTRUCTURA ROLLUP ECO 0.85 x 2.00 METROS",
       "long_description": "StandPortátil® 2 el sistema ideal para gráficas de gran formato. \
        Este producto es compacto, portable y extremadamente fácil de armar.\
        Se puede configurar de forma lineal, curva, cóncava o convexa. \
        La manera más elegante y profesional de exponer sin uniones gráficas, \
        imágenes de gran tamaño. Los textos y las gráficas no estarán interrumpidas por \
        costuras y serán mucho más atractivas."},
        {"title": "Producto 3",
         "sku": "RU-105E",
         "image": "img/roll-up-banner-1.jpg",
         "price": 1000.50,
         "short_description": "ESTRUCTURA ROLLUP ECO 0.85 x 2.00 METROS",
         "long_description": "StandPortátil® 3 el sistema ideal para gráficas de gran formato. \
          Este producto es compacto, portable y extremadamente fácil de armar.\
          Se puede configurar de forma lineal, curva, cóncava o convexa. \
          La manera más elegante y profesional de exponer sin uniones gráficas, \
          imágenes de gran tamaño. Los textos y las gráficas no estarán interrumpidas por \
          costuras y serán mucho más atractivas."}];
  },
  products: [],
  navigation: {
    go: function(productNumber) {
      var product = pb.products[productNumber-1];
      $("div.product-description").fadeOut(500, function() {
        $(this).html(product.long_description)
        .fadeIn()
      });

      $("div.product-title h2").fadeOut(500, function() {
        $(this).html(product.sku + "&nbsp")
        .append($("<small>").text(product.short_description))
        .fadeIn();
      });

      $("div.product-price").fadeOut(500, function() {
        $(this).html("DESDE")
        .append($("<strong>").text(" u$d ").append(product.price))
        .append(" + IVA")
        .fadeIn();
      });

    }
  }
}


$(document).ready(function(){
  pb.initialize(); //inicializo portabanner

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

});
