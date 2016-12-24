$(document).ready(function() {
  $('.header-dropdown').hover(
    function () {
      $(this).addClass('open')
    },
    function () {
      $(this).removeClass('open')
    }
  );

  $('.header-dropdown').on('click', function (e) {
    e.stopPropagation();
  });

  $(window).on('resize', function(){
    if (window.matchMedia('(max-width: 768px)').matches) {
      $('.dropdown-menu>li').each(function() {
      $(this).addClass('dropdown-submenu');
    });
      $('.dropdown-submenu>a').each(function() {
        $(this).addClass('dropdown-toggle');
        $(this).attr('data-toggle', 'dropdown');
        $(this).siblings('ul').addClass('dropdown-menu')
      });
    }
  });
});
