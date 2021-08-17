google.maps.event.addDomListener(window, 'load', init);
var activeEl = $('.branches-office .active a'),
	activeElLat = activeEl.data('lat'),
	activeElLng = activeEl.data('lng');
function init() {
	var mapOptions = {
		zoom: 15,
		center: new google.maps.LatLng(activeElLat, activeElLng),
		styles: [{
			"featureType": "landscape.man_made",
			"elementType": "geometry",
			"stylers": [{
				"color": "#f7f1df"
			}]
		}, {
			"featureType": "landscape.natural",
			"elementType": "geometry",
			"stylers": [{
				"color": "#d0e3b4"
			}]
		}, {
			"featureType": "landscape.natural.terrain",
			"elementType": "geometry",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "poi",
			"elementType": "labels",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "poi.business",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "poi.medical",
			"elementType": "geometry",
			"stylers": [{
				"color": "#fbd3da"
			}]
		}, {
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [{
				"color": "#bde6ab"
			}]
		}, {
			"featureType": "road",
			"elementType": "geometry.stroke",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road",
			"elementType": "labels",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#ffe15f"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#efd151"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#ffffff"
			}]
		}, {
			"featureType": "road.local",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "black"
			}]
		}, {
			"featureType": "transit.station.airport",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#cfb2db"
			}]
		}, {
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [{
				"color": "#a2daf2"
			}]
		}]
	};
	var mapElement = document.getElementById('branches-map');
	var map = new google.maps.Map(mapElement, mapOptions);
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(activeElLat, activeElLng),
		map: map,
		icon:'../icons/marker.svg'
	});
	if($('.branches-office').length){
		if($(window).width() < 992){
			$('.branches-office').slick({
				prevArrow:'<i class="icon-left">',
				nextArrow:'<i class="icon-right">',
			});
			$('.branches-office').on('afterChange', function(event, slick, currentSlide, nextSlide){
				$(this).find('.slick-slide').removeClass('active');
				$(this).find('.slick-active').addClass('active');
				var activeEl = $(this).find('.slick-active').children('a'),
					activeElLat = activeEl.data('lat'),
					activeElLng = activeEl.data('lng');
				map.setCenter({lat:+activeElLat,lng:+activeElLng});
				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(+activeElLat, +activeElLng),
					map: map,
					icon:'../icons/marker.svg'
				});
			});

		}else{
			$('.branches-office a').click(function(e){
				$('.branches-office li').removeClass('active');
				$(this).parent().addClass('active');
				e.preventDefault();
				var activeEl = $(this),
					activeElLat = activeEl.data('lat'),
					activeElLng = activeEl.data('lng');
				map.setCenter({lat:+activeElLat,lng:+activeElLng});
				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(+activeElLat, +activeElLng),
					map: map,
					icon:'../icons/marker.svg'
				});
			});
		}
	}
}
