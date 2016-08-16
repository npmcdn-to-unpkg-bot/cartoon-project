/**
* @Author: Roxy Chen <VanitaxMacbookPro>
* @Date:   2016-08-16T16:53:31+08:00
* @Last modified by:   VanitaxMacbookPro
* @Last modified time: 2016-08-16T16:53:31+08:00
* @License: Copyright (c) by Giftpack Inc. All Rights Reserved.
*/



$(document).ready(function(){

  //waterfall
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  });


  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry();
  });

})
