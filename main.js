// Insert JavaScript here
// function deliveryAppear() {
//     var element = document.querySelector ('.delivery-container')
//     if (element.style.right === "-19rem") {
//         element.style.right = "0"
//     }
//     else (element.style.right = "-19rem")
// }

$("#deliveryday").click(function(){
    $(".delivery-container").toggleClass("show-delivery");
  });

  $("#delivery-date1").click(function(){
    $("#delivery-date1").toggleClass("selected-date");
  });

  $("#delivery-date2").click(function(){
    $("#delivery-date2").toggleClass("selected-date");
  });