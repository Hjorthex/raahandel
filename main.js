// Insert JavaScript here
function basketAppear() {
    var element = document.querySelector ('.basket-dropdown')
    if (element.style.display === "flex") {
        element.style.display = "none"
    }
    else (element.style.display = "flex")
}

jQuery(document).mouseup(function(e) {
  var container = jQuery('.basket-dropdown');
  // if the target of the click isn't the container nor a descendant of the container
  if (!container.is(e.target) && container.has(e.target).length === 0) {
      jQuery('.basket-dropdown').fadeOut(20);
  }
});


$("#deliveryday").click(function(){
    $(".delivery-container").toggleClass("show-delivery");
  });
  
$("#deliveryday").click(function(){
   $("#deliveryday").toggleClass("current-page-link");
 });

  $("#delivery-date1").click(function(){
    $("#delivery-date1").toggleClass("selected-date");
  });

  $("#delivery-date2").click(function(){
    $("#delivery-date2").toggleClass("selected-date");
  });

  $("#add-to-cart__btn").click(function(){
    $(".add-product").addClass("show-added-product");
  });
  