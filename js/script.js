// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetfilterBtns();
  $(this).addclass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter.button.group').find('button');
function resetfilterBtns(){
    filterBtns.each(function(){
        $(this).removeclass('active-filter-btn');      
    });
}