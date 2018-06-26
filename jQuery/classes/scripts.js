$(document).ready(function() {

  $('#oui').on('click', function() {
    $('.carre').addClass('bg');
    $('.cercle').addClass('bg');
    $('.losange').addClass('bg');
  })
  $('#vide').on('click', function() {
    $('.carre').removeClass('bg');
    $('.cercle').removeClass('bg');
    $('.losange').removeClass('bg');
  })
  $('.cercle').on('click', function() {
    $(this).toggleClass('bg');
  })
  $('.carre:eq(0)').on('click', function() {
    $('.conteneur:eq(0)>div').toggleClass('bg');
  })
  $('.carre:eq(1)').on('click', function() {
    $('.conteneur:eq(1)>div').toggleClass('bg');
  })
  $('.carre:eq(2)').on('click', function() {
    $('.conteneur:eq(3)>div').toggleClass('bg');
  })
  $('.carre:eq(3)').on('click', function() {
    $('.conteneur:eq(4)>div').toggleClass('bg');
  })
  $('.losange').on('click', function(){
    $('.conteneur>div:nth-child(3)').toggleClass('bg');
    $('.conteneur:eq(2)>div').toggleClass('bg');
    $(this).toggleClass('bg')
  })
})
