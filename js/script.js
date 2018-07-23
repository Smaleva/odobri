$('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
  $('.nav').toggleClass('flex');
  $('.nav').toggleClass('none');
});
$('.lk-link').on('click', function(e) {
    e.preventDefault;
    
    $('.submenu').toggleClass('flex');
    $('.submenu').toggleClass('none');
  });