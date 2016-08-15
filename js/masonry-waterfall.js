//waterfall
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer',
  animate:true
});
// layout Isotope after each image loads
// $grid.imagesLoaded().progress( function() {
//   $grid.masonry();
// });
$(function(){
	$('.container-fluid').imagesLoaded(function () {
    $grid();
	});
});
