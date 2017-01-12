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

  $(document).ready(function() {

  /*Desktop Search*/

  $('.search-link').on('click', function(e) {
    $('.searchbar').animate({
      'opacity': '1',
      'z-index': '100',
      'width': '33%'
    }, 0);
    e.preventDefault();
  });

  $('.searchbar #d-close-searchbar').parent().on('click', function(e) {
    $('.searchbar').animate({
      'opacity': '0',
      'z-index': '-100',
      'width': '0%'
    }, 500);
    e.preventDefault();
  });

// From AEM Component

    var container = $(".searchbar");

    if (!container.is(e.target) // if the target of the click isn't the container...
      &&
      container.has(e.target).length === 0) // ... nor a descendant of the container
    {
      $('.searchbar').animate({
        'opacity': '0',
        'z-index': '-100',
        'width': '0%'
      }, 500);
    }
  });

  /* Mobile/Tablet Search */
  $('.aaa-header .navbar-collapse').css('height', ($(window).height() + 'px'))

  $('.navbar-toggle').on('click', function() {
    $('#page-container').before("<div class='menu-overlay'></div>");
    $('.menu-overlay').height($('#page-wrapper').height());

  });

  $('.collapsed-menu-close').on('click', function() {
    $('.navbar-toggle').click();
    $('.menu-overlay').remove();
  });

  $('.mobile-search-link').on('click', function(e) {
    $('.mobile-search-link').hide();
    $('.searchbar-mobile').animate({
      'top': '0'
    }, 500);
    e.preventDefault();
  });

  $('.search-mobile-close').on('click', function(e) {
    $('.mobile-search-link').show();
    $('.searchbar-mobile').removeAttr('style');
    e.preventDefault();
  });

});
