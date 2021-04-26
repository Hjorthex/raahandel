// Insert JavaScript here
function basketAppear() {
    var element = document.querySelector ('.basket-dropdown')
    element.style.display === "none"
    element.style.display = "flex"
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

// Products Campaign Carousel

$(".products-campaigns__move-right").click(function(){
  $("#carousel-container-slider").addClass("carousel-container-slider__slide-left");
});

$(".products-campaigns__move-left").click(function(){
  $("#carousel-container-slider").removeClass("carousel-container-slider__slide-left");
});

function iconExplainOpen() {
  var element = document.querySelector ('.icon-explain__container')
  element.style.display === "none"
  element.style.display = "flex"

  var element = document.querySelector ('.products-aside-icon-explain__close')
  element.style.display === "none"
  element.style.display = "flex"
}

function iconExplainClose() {
  var element = document.querySelector ('.icon-explain__container')
  element.style.display === "flex"
  element.style.display = "none"

  var element = document.querySelector ('.products-aside-icon-explain__close')
  element.style.display === "flex"
  element.style.display = "none"
}



// Set the date we're counting down to
var countDownDate = new Date("Apr 27, 2021 06:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + " dage " + hours + " timer "
  + minutes + " minutter " + seconds + " sekunder ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
