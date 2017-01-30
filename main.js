(function($){
  "use strict";

  $(function(){


  var consoleHeading = $('.panel');


  consoleHeading.click(function(event){
    event.preventDefault();
    $(".panel-collapse").collapse('hide')
      $(this).find(".panel-collapse").collapse('show');



  });

  var panelHeadings = $(".panel-heading");

  panelHeadings.click(function(event){
    event.preventDefault();
    $(".selected").removeClass("selected");
    $(this).addClass("selected");

    // $(this).css("background-color", "#96BD40");


  });


// consoleHeading.hover(
//       function() {
//     $(this).addClass("green");
//     }, function() {
//     $(this).removeClass("green");
//     }
//     );

// $(function() {
//     var activeAccordian = null;
//     var $accordions = $(".accordion").on('click', function() {
//         activeAccordian = this;
//     }).accordion({
//         collapsible: true,
//         active: false,
//         icons: false
//     }).on('accordionchange', function(event, ui) {
//         $accordions.not(activeAccordian).accordion('activate', false);
//     });
// });




 });

})(jQuery);
