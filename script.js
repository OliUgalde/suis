function loopNext(){
    $('#myCarousel').stop().animate({scrollLeft:'+=20'}, 'fast', 'linear', loopNext);
}

function loopPrev(){
    $('#myCarousel').stop().animate({scrollLeft:'-=20'}, 'fast', 'linear', loopPrev);
}

function stop(){
    $('#myCarousel').stop();
}


$('#next').hover(function () {
   loopNext();
},function () {
   stop();
});

$('#prev').hover(function () {
   loopPrev();
},function () {
   stop();
});