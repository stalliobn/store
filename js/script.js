(function($) {
'use strict';

  var counter = 0;
  var $basket = $("#basket"),
      $prod = $('.your-prod');

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

  // $('.visible-list').find('li').on('click', function() {
  //   $(this).find('.hide-list').slideToggle(function() {
  //     if ($(this).is(':visible')) {
  //       $(this).prev().css('background-position', '-30px -60px');
  //     }else {
  //       $(this).prev().css('background-position', '0px -60px');
  //     }
  //   });
  // });

  $('ul.tabs_control').on('click', 'li:not(.active)', function() {
    $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.single-product-wrap').find('div.tabs_content').removeClass('active').eq($(this).index()).addClass('active');
  });


    $('.minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });


    $(".accordeon .hide").hide().prev().click(function() {
      $(this).parents(".accordeon").find(".hide").not(this).slideUp().prev().removeClass("active");
      $(this).next().not(":visible").slideDown().prev().addClass("active");
    });


    var overlay = $('#overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal_close, #overlay');
    var modal = $('.modal_div');
    open_modal.click( function(event){
     event.preventDefault();
     var div = $(this).attr('href');
     overlay.fadeIn(400,
       function(){
         $(div)
         .css('display', 'block').css('z-index', '1000')
         .animate({opacity: 1, top: '50%'}, 200);
       });
   });
    close.click( function(){
      modal
      .animate({opacity: 0, top: '45%'}, 200,
       function(){
         $(this).css('display', 'none').css('z-index', '0');
         overlay.fadeOut(400);
       }
       );
    });

    $basket.find('a').on('click', function(event) {
      event.preventDefault();
      if ($prod.is(':hidden')) {
        $prod.show(400);
      }else {
        $prod.hide(400);
      }
    });
})(jQuery);






