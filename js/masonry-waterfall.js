//waterfall
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});
// layout Isotope after each image loads
// $grid.imagesLoaded().progress( function() {
//   $grid.masonry();
// });
$(function(){
var $container = $('.container');
$container.imagesLoaded(function(){
$container.masonry(); 
});
});
