function changeZIndex(i,id) {
	document.getElementById(id).style.zIndex=i;
}

var $pop1 = Popcorn( "#video" );

// hide our controls
$pop1.controls( false );

// pause d1 - decision1
$pop1.cue( 55, function() {
	$pop1.pause();
	changeZIndex(2, "decision1");
	changeZIndex(1, "d1gif");
});

// pause s1 - have sex
$pop1.cue( 65, function() {
	$pop1.pause();
	changeZIndex(2, "stats1a");
	changeZIndex(1, "s1gif");
});

// pause s2 - no sex, masturbate
$pop1.cue( 83, function() {
	$pop1.pause();
	changeZIndex(2, "stats2a");
	changeZIndex(1, "s2gif");
});

// pause d2 - Nora decides school or cafe
$pop1.cue( 123, function() {
	$pop1.pause();
	changeZIndex(2, "decision2");
	changeZIndex(1, "d2gif");
});

// pause s3 - go to school
$pop1.cue( 138, function() {
	$pop1.pause();
	changeZIndex(2, "stats3a");
	changeZIndex(1, "s3gif");
});

// pause s4 - go to cafe
$pop1.cue( 145, function() {
	$pop1.pause();
	changeZIndex(2, "stats4a");
	changeZIndex(1, "s4gif");
});

// pause d3 - banana? cheat?
$pop1.cue( 174, function() {
	$pop1.pause();
	changeZIndex(2, "decision3");
	changeZIndex(1, "d3gif");
});

// pause s5 - cheat
$pop1.cue( 191, function() {
	$pop1.pause();
	changeZIndex(2, "stats5a");
	changeZIndex(1, "s5gif");
});

// pause s6 - don't cheat
$pop1.cue( 206, function() {
	$pop1.pause();
	changeZIndex(2, "stats6a");
	changeZIndex(1, "s6gif");
});