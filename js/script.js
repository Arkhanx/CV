$(document).ready(function() {
	$('#nav').onePageNav();
});

var tamaño

//Tamaño inicial del header.
tamaño = $('header').height();

//Calcula el tamaño del header al redimencionar la ventana.
$( window ).resize(function() {
  tamaño = $('header').height();
  console.log(tamaño);
  return tamaño
});


$(window).on('scroll',function(){

    // Calcula en pixeles el scroll que se hace desde arriba en la pagina.
    stop = Math.round($(window).scrollTop());
    //Compara el scroll que se ha hecho desde arriba versus el tamaño del header.
    if (stop > tamaño) {
        $('#grande').addClass('hidden');
        $('#nav').addClass('affix');
        $('#pequeno').removeClass('visible-xs');
    } else {
        $('#nav').removeClass('affix');
        $('#grande').removeClass('hidden');
        $('#pequeno').addClass('visible-xs');
   }

});
