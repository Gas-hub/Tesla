//=require ../blocks/**/*.js
$(document).ready(function () {

	var rellax = new Rellax('.rellax');

	new WOW().init();

});

window.onload = function() {
	const videoLink = document.getElementById('video-link');
	const video = document.querySelector('.video')
	const btnCloseVideo = this.document.querySelector('.fa-times')

	videoLink.addEventListener('click', (e)=>{
		e.preventDefault() 
		video.style.display = 'block';
		
	})
	btnCloseVideo.addEventListener('click',()=>{
		video.style.display = 'none';
	})
	
	this.console.log(video);
	
  };