var $pop = Popcorn( "#video" );

// first pause
$pop.cue( 3, function() {
	$pop.pause();
});

//listen for timeupdate
$pop.on( "timeupdate", function( event ) {
    // if the video is paused
    if ( this.paused() ) {
        // add a footnote!
        this.footnote({
        	start: $pop.currentTime(),
        	end: $pop.currentTime() + 1  > $pop.duration() ? $pop.duration() : $pop.currentTime() + 1,
        	text: "Footnote at " + $pop.currentTime() + " ",
        	target: "footnote"
        });
    }
});
// end of list for timeupdate

$pop.webpage({
	id: "webpages-a",
	start: 1,
	end: 5,
	src: "http://www.google.com/",
	target: "webpagediv"
});

function jumpTo() {
	$pop.play(15);
}