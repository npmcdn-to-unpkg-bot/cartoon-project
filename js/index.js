
  //waterfall
  var masonry = function (){
    var $grid = $('.grid').masonry({
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-sizer'
    });
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress( function() {
      $grid.masonry();
    });
  }


$(document).ready(function(){
  masonry();
})
