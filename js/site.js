
$(document).ready(function(){
//	var red = TweenLite.to($("#redbox"), 1, {left:"632px"});
//	var orange = TweenLite.to($("#orangebox"), 1.5, {top:"400px",ease:Bounce.easeOut});
//	var yellowgreen = TweenLite.to($("#yellowgreenbox"), .5, {left:"542px", backgroundColor:"limegreen",borderBottomColor:"gold"});
//	var blue = TweenLite.from($("#bluebox"), 1.6, {left:"542px"});
//
//	$("#rBtn").on("click",function(){
//		console.log("this")
//		red.restart();
//	});
//
//	$("#oBtn").on("click",function(){
//		console.log("this")
//		orange.restart();
//	});
//
//	$("#ygBtn").on("click",function(){
//		console.log("this")
//		yellowgreen.restart();
//	});
//
//	$("#bBtn").on("click",function(){
//		console.log("this")
//		blue.restart();
//	});

	var tl = new TimelineLite({onUpdate:updateSlider});
	tl.set("#content", {visibility:"visible"})
	.from("h1", 0.5, {left:100, autoAlpha:0}) // autoAlpha handles both css properties visibility and opacity.
	.to("h1", 5, {left:0, autoAlpha:0}) // autoAlpha handles both css properties visibility and opacity.
	.from("h2", 0.5, {left:-100, autoAlpha:0}, "-=5") //add tween 0.25 seconds before previous tween ends
	.from("#feature", 0.5, {scale:0.5, autoAlpha:0}, "feature") // add feature label at start position of this tween
	.from("#description", 0.5, {left:100, autoAlpha:0}, "feature+=0.25") // add tween 0.25 seconds after the feature label
	.staggerFrom("#nav img", 0.5, {scale:0, rotation:-180, autoAlpha:0}, 0.2, "stagger");

	$("#play").click(function() {
		//play() only plays forward from current position. If timeline has finished, play() has nowhere to go.
		//if the timeline is not done then play() or else restart() (restart always restarts from the beginning).

		if(tl.progress() != 1){
			//carl just changed this again
			tl.play();
		} else {
			tl.restart();
		}
	});

	$("#pause").click(function() {
		tl.pause();
	});

	$("#reverse").click(function() {
		tl.reverse();
	});

	$("#resume").click(function() {
		tl.resume();
	});

	$("#restart").click(function() {
		tl.restart();
	});

	$("#slider").slider({
		range: true,
		min: 0,
		max: 100,
		step:.1,
		slide: function ( event, ui ) {
			tl.pause();
			//adjust the timeline's progress() based on slider value
			tl.progress( ui.value/100 );
		}
	});

	function updateSlider() {
		$("#slider").slider("value", tl.progress() *100);
	}
});
