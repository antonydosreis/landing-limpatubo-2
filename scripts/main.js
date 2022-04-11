$(document).ready(function () {
	$('.video-gallery').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		delegate: 'a',
		gallery: {
			enabled: true
		}
	})
})
