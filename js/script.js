$('.menu-btn').on('click', function (e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
  $('.nav').toggleClass('flex');
  $('.nav').toggleClass('none');
});
$('.lk-link').on('click', function (e) {
  e.preventDefault;

  $('.submenu').toggleClass('flex');
  $('.submenu').toggleClass('none');
});

$('.field-wrap').find('input').on('keyup blur focus', function (e) {

  var $this = $(this),
    label = $this.prev('label');

  if (e.type === 'keyup') {
    if ($this.val() === '') {
      label.removeClass('active');
    } else {
      label.addClass('active');
    }
  } else if (e.type === 'blur') {
    if ($this.val() === '') {
      label.removeClass('active');
    }
  } else if (e.type === 'focus') {

    if ($this.val() === '') {
      label.removeClass('active');
    }
    else if ($this.val() !== '') {
      label.addClass('active');
    }
  }
});