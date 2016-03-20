(function($) {
'use strict';

  var counter = 0;
  var $basket = $("#basket");

  $(".item-product").find('.add-basket').on("click",function(event){
    event.preventDefault();
    counter++;
    $('#counter').show().text(counter);
    console.log(counter);
    $(this).prevAll('.image-wrap').find('img')
    .clone()
    .css({'position' : 'absolute', 'z-index' : '11100', top: $(this).offset().top-200, left:$(this).offset().left-0})
    .appendTo("body")
    .animate({opacity: 0.05,
      left: $basket.offset()['left'],
      top: $basket.offset()['top'],
      width: 20}, 1000, function() {
        $(this).remove();
      });
  });

  $('.visible-list').find('li').on('click', function() {
    $(this).find('.hide-list').slideToggle(function() {
      if ($(this).is(':visible')) {
        $(this).prev().css('background-position', '-30px -60px');
      }else {
        $(this).prev().css('background-position', '0px -60px');
      }
    });
  });

  $('ul.tabs_control').on('click', 'li:not(.active)', function() {
    $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.single-product-wrap').find('div.tabs_content').removeClass('active').eq($(this).index()).addClass('active');
  });
})(jQuery);
