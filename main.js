var $pop1 = Popcorn( "#video" );

function changeZIndex(i,id) {
  document.getElementById(id).style.zIndex=i;
}

// $pop1.play();
$pop1.autoplay(56);

// pause d1 - decision1
$pop1.cue( 56, function() {
	$pop1.pause();
	changeZIndex(2, "decision1");
	changeZIndex(1, "d1gif");
});

// pause s1 - have sex
$pop1.cue( 72, function() {
	$pop1.pause();
	changeZIndex(2, "stats1a");
	changeZIndex(1, "s1gif");
});

// pause s2 - no sex, masturbate
$pop1.cue( 89, function() {
	$pop1.pause();
	changeZIndex(2, "stats2a");
	changeZIndex(1, "s2gif");
});

// pause d2 - Nora decides school or cafe
$pop1.cue( 131, function() {
	$pop1.pause();
	changeZIndex(2, "decision2");
	changeZIndex(1, "d2gif");
});

// pause s3 - go to school
$pop1.cue( 145, function() {
	$pop1.pause();
	changeZIndex(2, "stats3a");
	changeZIndex(1, "s3gif");
});

// pause s4 - go to cafe
$pop1.cue( 153, function() {
	$pop1.pause();
	changeZIndex(2, "stats4");
	changeZIndex(1, "s4gif");
});

// pause d3 - banana? cheat?
$pop1.cue( 189, function() {
	$pop1.pause();
	changeZIndex(2, "decision3");
	changeZIndex(1, "d3gif");
});

// pause s5 - cheat
$pop1.cue( 205, function() {
	$pop1.pause();
	changeZIndex(2, "stats5");
	changeZIndex(1, "s5gif");
});

// pause s6 - don't cheat
$pop1.cue( 222, function() {
	$pop1.pause();
	changeZIndex(2, "stats6");
	changeZIndex(1, "s6gif");
});