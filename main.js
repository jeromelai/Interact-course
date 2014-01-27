var $pop1 = Popcorn( "#video" );

function jumpTo() {
	$pop1.play(15);
}

function changeZIndex(i,id) {
  document.getElementById(id).style.zIndex=i;
}

$pop1.play();

// pause 1
$pop1.cue( 56, function() {
	$pop1.pause();
	changeZIndex(2, "decision1");
	changeZIndex(1,'gif1');
    changeZIndex(0, "canvas");
});

// pause 2a - have sex
$pop1.cue( 72, function() {
	$pop1.pause();
	changeZIndex(10, "stats1");
	changeZIndex(3,'gif2');
    changeZIndex(0, "canvas");
});

