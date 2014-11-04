$(document).ready(function(){
//	var video = document.getElementById("video");
//	var play = document.getElementById("play");
//	var pause = document.getElementById("pause");
//	var currentTime = document.getElementById("currentTime");
//	var duration = document.getElementById("duration");
//	var volume = document.getElementById("volume");
//	var fullscreen = document.getElementById("fullscreen");
//
//	video.addEventListener("loadedmetadata", function (e) {
//		currentTime.value = this.currentTime;
//		duration.value = this.duration;
//	}, false);
//
//	video.addEventListener("timeupdate", function (e) {
//		currentTime.value = this.currentTime;
//		if (duration.value === "") {
//			duration.value = this.duration;
//		}
//	}, false);
//
//	play.addEventListener("click", function (e) {
//		video.play();
//	}, false);
//
//	pause.addEventListener("click", function (e) {
//		video.pause();
//	}, false);
//
//	volume.addEventListener("change", function (e) {
//		video.volume = this.value;
//	}, false);
//
//	fullscreen.addEventListener("click", function (e) {
//		if (video.webkitEnterFullscreen) {
//			video.webkitEnterFullscreen();
//		}
//	}, false);

	var $video = $("#video");
	var $scrubber = $("#scrubber");
	var $progress = $("#progress");

	$video.bind("timeupdate", videoTimeUpdateHandler);
	$scrubber.bind("mousedown", scrubberMouseDownHandler);
//	$scrubber.bind("mousedrag", scrubberMouseDownHandler);

	function videoTimeUpdateHandler(e) {
		var video = $video.get(0);
		var percent = video.currentTime / video.duration;
		updateProgressWidth(percent);
	}

	function scrubberMouseDownHandler(e) {
		var $this = $(this);
		var x = e.pageX - $this.offset().left;
		var percent = x / $this.width();
		updateProgressWidth(percent);
		updateVideoTime(percent);
	}

	function updateProgressWidth(percent) {
		$progress.width((percent * 100) + "%");
	}

	function updateVideoTime(percent) {
		var video = $video.get(0);
		video.currentTime = percent * video.duration;
	}
});
