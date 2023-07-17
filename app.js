
var turn = 1;

$(".row").on("click", function () {
  
  console.log(turn);
  if (turn%2 === 0) {
    console.log("zero");
    $(this).addClass("zero");
  }else {
    console.log("cross");
    $(this).addClass("cross");
  }
  turn++;

})





