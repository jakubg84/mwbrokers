var mymap = L.map('mapid').setView([51.740795,18.088661499999944], 16);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);
	

	L.marker([51.740795,18.088661499999944]).addTo(mymap)
		.bindPopup('<b>MW Broker</b><br />ul. Polna 104, Kalisz<br />Telefon : 734 734 801<br>Czynne : 09:00 - 17:00<br>Jak dojechać ? <a href=/"https://www.google.pl/maps/place/Polna+104,+Kalisz/@51.740795,18.0864728,17z/data=!3m1!4b1!4m5!3m4!1s0x471ac5c4a1f27adf:0x9745a121661c2d7a!8m2!3d51.740795!4d18.0886615" target="_blank">Zobacz</a>').openPopup();

	
	

	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}

	mymap.on('click', onMapClick);