// $(document).ready(function (){
//
// })

// faccio mouse in e mouseout su un elemento (e il suo div)
//al mouse in compare il div relativo a mauseout scompare
var hover = $(".target")
console.log(hover);

hover.mouseenter(function () {
  console.log("ahahahah");
  var element = $(this)
  element.addClass("active")
  element.css("color", "black");
})
.mouseleave(function () {
  //qua faccio quello che serve quando esce il mouse
})

hover.click(function () {
  console.log("ahahahah");
   //es variabile.show() (per i menu a tendina)
 })





 // $("#btn-addcss").click(function(){
 //        $("#para-addcss").css("color","red");
 //    });
