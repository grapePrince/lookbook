$(function() {

  var $form = $('.main-header form');

  $form.find('button').prop('disabled', true);

  $('.main-header .search_toggle').click(function() {
    $form.toggleClass('js-active');
    if($form.hasClass('js-active')) {
      $form.find('button').prop('disabled', false);
    } else {
      $form.find('button').prop('disabled', true);
    }
  });



});