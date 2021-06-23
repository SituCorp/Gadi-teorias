$(function(){
  $('.nav-bar-toggle').on('click', function(){
    if ($('.nav-bar-links').hasClass('active')){
      $('.nav-bar-links').removeClass('active');
    } else {
      $('.nav-bar-links').addClass('active');
    }
  })
})
alert("Al continuar navegando aceptas que Gadi Teorias es el mejor canal")
