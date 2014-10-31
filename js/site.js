
$(document).ready(function(){
		var red = TweenLite.to($("#redbox"), 1, {left:"632px"});
		var orange = TweenLite.to($("#orangebox"), 1.5, {top:"400px",ease:Bounce.easeOut});
		var yellowgreen = TweenLite.to($("#yellowgreenbox"), .5, {left:"542px", backgroundColor:"limegreen",borderBottomColor:"gold"});
		var blue = TweenLite.from($("#bluebox"), 1.6, {left:"542px"});

	$("#rBtn").on("click",function(){
		console.log("this")
		red.restart();
	});

	$("#oBtn").on("click",function(){
		console.log("this")
		orange.restart();
	});

	$("#ygBtn").on("click",function(){
		console.log("this")
		yellowgreen.restart();
	});

	$("#bBtn").on("click",function(){
		console.log("this")
		blue.restart();
	});
})
