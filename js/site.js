
$(document).ready(function(){
	var tl = new TimelineLite({onUpdate:updateSlider});
	tl.set("#video-container", {visibility:"visible"})
		.from("#img_1", 1.5, {opacity:.6})
		.from("#car", 1, {right:-200, top:0}, "-=0.25")
		.to("#car", 1, {right:20, top:80}, "-=0.25")
		.staggerFrom("#car span", 0.5, {scale:0, autoAlpha:0}, 0.25, "stagger")
		.to("#img_1", 1, {scale: .25, left:-350, bottom:-70}, "-=.25")
		.from("#dlr", 1, {opacity:0}, "-=2") // autoAlpha handles both css properties visibility and opacity.
		.from("#liter", .5, {right:-100, autoAlpha:0}, "-=.25") // autoAlpha handles both css properties visibility and opacity.
		.to("#liter", 1, {right:20}, "-=.5") // autoAlpha handles both css properties visibility and opacity.
		.from("#trans", .5, {right:-100, autoAlpha:0}, "+=2") // autoAlpha handles both css properties visibility and opacity.
		.to("#trans", 1, {right:20}, "-=.5") // autoAlpha handles both css properties visibility and opacity.
		.from("#peace", .5, {right:-100, autoAlpha:0}, "+=2") // autoAlpha handles both css properties visibility and opacity.
		.to("#peace", 1, {right:20}, "-=.5") // autoAlpha handles both css properties visibility and opacity.
		.to("#img_1", 1, {opacity: 0,}, "-=.25")
		.from("#img_2", 1, {autoAlpha:0}, "-=2") // autoAlpha handles both css properties visibility and opacity.
		.to(".info", 1, {right:-100, opacity:0}, "+=5")
		.to("#car", 1, {right:-100, opacity:0}, "-=1")
		.to("#img_2", 1, {opacity:0}, "-=1")
		.from("#img_3 img", 2, {scale:.6, autoAlpha:0}, "-=1")
		.to("#dlr", .5, {opacity:0}) // autoAlpha handles both css properties visibility and opacity.
		.to("#car span", 1, {opacity:0}, "+=2")
		.to("#img_3 img", 1, {left:-650})
		.from("#img_4 img", 1, {right:-650, autoAlpha:0}, "-=1")
		.to("#img_4 img", 1, {right:0})
		.from("#img_5", 0.5, {scale:1.1, top:-500, autoAlpha: 0}, "+=2")
		.from("#miles", 0.5, {top:500, autoAlpha:0}, "+=3")
		.to("#img_5", 1, {scale:1, opacity:1}, "-=.5")
		.from("#img_6", 1, {right:-1000, rotation:"-=180", scale:1.1, autoAlpha:0}, "+=2.5")
		.to("#miles", 0.5, {left:-500, autoAlpha:0}, "-=1")
		.to("#img_6", 1, {scale:1, opacity:1}, "-=.5")
		.from("#img_7", 0.5, {scale:1.1, top:4000, autoAlpha:0}, "+=2")
		.to("#img_7", 1, {scale:1, opacity:1, top:0}, "-=.25")
		.from("#hondalink", 0.5, {top:-100}, "+=3")
		.from("#img_8", 1, {left:-1000,autoAlpha:0}, "+=2")
		.to("#hondalink", 0.5, {top:-100}, "+=3")
		.from("#img_9 img", 1, {left:-500, autoAlpha:0}, "+=2")
		.from("#img_10 img", 1, {left:500, autoAlpha:0}, "+=3")
//		.from("#img_11", 3, {left:50, bottom: -200, autoAlpha:0}, "-=.25")
//		.from("#img_12", 3, {left:50, bottom: -200, autoAlpha:0}, "-=.25")
//		.from("#img_13", 3, {left:50, bottom: -200, autoAlpha:0}, "-=.25")
//		.from("#img_14", 3, {left:50, bottom: -200, autoAlpha:0}, "-=.25")
//		.from("#feature", 0.5, {scale:0.5, autoAlpha:0}, "feature") // add feature label at start position of this tween
//		.from("#description", 0.5, {left:100, autoAlpha:0}, "feature+=0.25") // add tween 0.25 seconds after the feature label
//		.staggerFrom("#nav img", 0.5, {scale:0, rotation:-180, autoAlpha:0}, 0.2, "stagger");

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
