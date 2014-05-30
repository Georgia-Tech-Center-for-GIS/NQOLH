
var colors = ['#FFFFFF','#FFFFFF'];
    var map;	  
    var query;
    var layer22;
    var marker1;
	var marker2;
	var marker3;
	var marker4;
	var marker5;
	var marker6;
	var marker7;
	var marker8;
	var marker9;
	var marker10;
	var marker11;
	var marker12;
	var marker13;
	var marker14;
	var marker15;
	var marker16;
	var marker17;
	var marker18;
	var marker19;
	var marker20;
	var marker21;
	var marker22;
	var marker23;
	var marker24;
	var marker25;
	var geocoder = null;
	var marker = null;
    var address = null;
function initialize22() {
geocoder = new google.maps.Geocoder();

geocoder.geocode( { 'address': address}, geocoderCallback ); 

 map = new google.maps.Map(document.getElementById('map-canvas22'), {
          center: new google.maps.LatLng(33.765627,-84.417272),
          zoom: 11,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
	  disableDoubleClickZoom:true,
	  draggable:false,
	  scrollwheel:false
        });	
		


layer22 = new google.maps.FusionTablesLayer();

filterMap22(layer22, map);
	google.maps.event.addDomListener(document.getElementById('address2'), 'change', function() {
				document.getElementById("chart").style.opacity = "1";
				codeAddress(); 
				});	
		
 var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = "SELECT NPU_1, geometry FROM 1rjIHGlAQCxcNY6aGZXMXTL0XGVuVEYSykaSmTJc WHERE NPU_1 ='A'";
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap');
        url.push('&key=AIzaSyCw5lbOSElOqXCALHbMg9P9fqUzJrnP7WY');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		
		 var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = "SELECT NPU_1, geometry FROM 1rjIHGlAQCxcNY6aGZXMXTL0XGVuVEYSykaSmTJc WHERE NPU_1 ='B'";
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap2');
        url.push('&key=AIzaSyCw5lbOSElOqXCALHbMg9P9fqUzJrnP7WY');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		
		 var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = "SELECT NPU_1, geometry FROM 1rjIHGlAQCxcNY6aGZXMXTL0XGVuVEYSykaSmTJc WHERE NPU_1 ='C'";
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap3');
        url.push('&key=AIzaSyCw5lbOSElOqXCALHbMg9P9fqUzJrnP7WY');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		
		 var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = "SELECT NPU_1, geometry FROM 1rjIHGlAQCxcNY6aGZXMXTL0XGVuVEYSykaSmTJc WHERE NPU_1 ='D'";
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap4');
        url.push('&key=AIzaSyCw5lbOSElOqXCALHbMg9P9fqUzJrnP7WY');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		
		 var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = "SELECT NPU_1, geometry FROM 1rjIHGlAQCxcNY6aGZXMXTL0XGVuVEYSykaSmTJc WHERE NPU_1 ='E'";
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap5');
        url.push('&key=AIzaSyCw5lbOSElOqXCALHbMg9P9fqUzJrnP7WY');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		
		 var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = "SELECT NPU_1, geometry FROM 1rjIHGlAQCxcNY6aGZXMXTL0XGVuVEYSykaSmTJc WHERE NPU_1 ='F'";
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap6');
        url.push('&key=AIzaSyCw5lbOSElOqXCALHbMg9P9fqUzJrnP7WY');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		
		 var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = "SELECT NPU_1, geometry FROM 1rjIHGlAQCxcNY6aGZXMXTL0XGVuVEYSykaSmTJc WHERE NPU_1 ='G'";
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap7');
        url.push('&key=AIzaSyCw5lbOSElOqXCALHbMg9P9fqUzJrnP7WY');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		
		 var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = "SELECT NPU_1, geometry FROM 1rjIHGlAQCxcNY6aGZXMXTL0XGVuVEYSykaSmTJc WHERE NPU_1 ='H'";
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap8');
        url.push('&key=AIzaSyCw5lbOSElOqXCALHbMg9P9fqUzJrnP7WY');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		
		 var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = "SELECT NPU_1, geometry FROM 1rjIHGlAQCxcNY6aGZXMXTL0XGVuVEYSykaSmTJc WHERE NPU_1 ='I'";
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap9');
        url.push('&key=AIzaSyCw5lbOSElOqXCALHbMg9P9fqUzJrnP7WY');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		
		 var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = "SELECT NPU_1, geometry FROM 1rjIHGlAQCxcNY6aGZXMXTL0XGVuVEYSykaSmTJc WHERE NPU_1 ='J'";
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap10');
        url.push('&key=AIzaSyCw5lbOSElOqXCALHbMg9P9fqUzJrnP7WY');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		
		 var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = "SELECT NPU_1, geometry FROM 1rjIHGlAQCxcNY6aGZXMXTL0XGVuVEYSykaSmTJc WHERE NPU_1 ='K'";
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap11');
        url.push('&key=AIzaSyCw5lbOSElOqXCALHbMg9P9fqUzJrnP7WY');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		
		 var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = "SELECT NPU_1, geometry FROM 1rjIHGlAQCxcNY6aGZXMXTL0XGVuVEYSykaSmTJc WHERE NPU_1 ='L'";
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap12');
        url.push('&key=AIzaSyCw5lbOSElOqXCALHbMg9P9fqUzJrnP7WY');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		
		 var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = "SELECT NPU_1, geometry FROM 1rjIHGlAQCxcNY6aGZXMXTL0XGVuVEYSykaSmTJc WHERE NPU_1 ='M'";
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap13');
        url.push('&key=AIzaSyCw5lbOSElOqXCALHbMg9P9fqUzJrnP7WY');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		
		 var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = "SELECT NPU_1, geometry FROM 1rjIHGlAQCxcNY6aGZXMXTL0XGVuVEYSykaSmTJc WHERE NPU_1 ='N'";
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap14');
        url.push('&key=AIzaSyCw5lbOSElOqXCALHbMg9P9fqUzJrnP7WY');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		
		 var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = "SELECT NPU_1, geometry FROM 1rjIHGlAQCxcNY6aGZXMXTL0XGVuVEYSykaSmTJc WHERE NPU_1 ='O'";
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap15');
        url.push('&key=AIzaSyCw5lbOSElOqXCALHbMg9P9fqUzJrnP7WY');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		
		 var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = "SELECT NPU_1, geometry FROM 1rjIHGlAQCxcNY6aGZXMXTL0XGVuVEYSykaSmTJc WHERE NPU_1 ='P'";
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap16');
        url.push('&key=AIzaSyCw5lbOSElOqXCALHbMg9P9fqUzJrnP7WY');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		
		 var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = "SELECT NPU_1, geometry FROM 1rjIHGlAQCxcNY6aGZXMXTL0XGVuVEYSykaSmTJc WHERE NPU_1 ='Q'";
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap17');
        url.push('&key=AIzaSyCw5lbOSElOqXCALHbMg9P9fqUzJrnP7WY');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		
		 var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = "SELECT NPU_1, geometry FROM 1rjIHGlAQCxcNY6aGZXMXTL0XGVuVEYSykaSmTJc WHERE NPU_1 ='R'";
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap18');
        url.push('&key=AIzaSyCw5lbOSElOqXCALHbMg9P9fqUzJrnP7WY');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		
		 var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = "SELECT NPU_1, geometry FROM 1rjIHGlAQCxcNY6aGZXMXTL0XGVuVEYSykaSmTJc WHERE NPU_1 ='S'";
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap19');
        url.push('&key=AIzaSyCw5lbOSElOqXCALHbMg9P9fqUzJrnP7WY');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		
		 var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = "SELECT NPU_1, geometry FROM 1rjIHGlAQCxcNY6aGZXMXTL0XGVuVEYSykaSmTJc WHERE NPU_1 ='T'";
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap20');
        url.push('&key=AIzaSyCw5lbOSElOqXCALHbMg9P9fqUzJrnP7WY');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		
		 var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = "SELECT NPU_1, geometry FROM 1rjIHGlAQCxcNY6aGZXMXTL0XGVuVEYSykaSmTJc WHERE NPU_1 ='V'";
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap21');
        url.push('&key=AIzaSyCw5lbOSElOqXCALHbMg9P9fqUzJrnP7WY');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		
		 var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = "SELECT NPU_1, geometry FROM 1rjIHGlAQCxcNY6aGZXMXTL0XGVuVEYSykaSmTJc WHERE NPU_1 ='W'";
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap22');
        url.push('&key=AIzaSyCw5lbOSElOqXCALHbMg9P9fqUzJrnP7WY');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		
		 var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = "SELECT NPU_1, geometry FROM 1rjIHGlAQCxcNY6aGZXMXTL0XGVuVEYSykaSmTJc WHERE NPU_1 ='X'";
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap23');
        url.push('&key=AIzaSyCw5lbOSElOqXCALHbMg9P9fqUzJrnP7WY');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		
		 var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = "SELECT NPU_1, geometry FROM 1rjIHGlAQCxcNY6aGZXMXTL0XGVuVEYSykaSmTJc WHERE NPU_1 ='Y'";
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap24');
        url.push('&key=AIzaSyCw5lbOSElOqXCALHbMg9P9fqUzJrnP7WY');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		
		 var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = "SELECT NPU_1, geometry FROM 1rjIHGlAQCxcNY6aGZXMXTL0XGVuVEYSykaSmTJc WHERE NPU_1 ='Z'";
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap25');
        url.push('&key=AIzaSyCw5lbOSElOqXCALHbMg9P9fqUzJrnP7WY');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		
      }

function drawMap(data) {
        var rows = data['rows'];
		
        for (var i in rows) {
          if (rows[i][0] != 'Antarctica') {
		  
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
			
            if (geometries) {
              for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));

              }
            } else {
              newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
			  
            }
            var randomnumber = 1;
			

            var country = new google.maps.Polygon({
              paths: newCoordinates,
              strokeColor: colors[randomnumber],
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: colors[randomnumber],
              fillOpacity: 0
            });		
			
  marker1 = new google.maps.Marker({
  position: new google.maps.LatLng(33.856767,-84.423795),
  icon: "http://maps.google.com/mapfiles/kml/paddle/A.png",
  map: map,
  visible: false
});

	    google.maps.event.addListener(country, 'mouseover', function(e) {  
              this.setOptions({fillOpacity: 0.5});
             marker1.setOptions({visible: true});
            });
			
				    google.maps.event.addListener( marker1, 'mouseover', function(e) {  
             this.setOptions({visible: true});
			 country.setOptions({fillOpacity: 0.5});
            });
			
			            google.maps.event.addListener(marker1, 'mouseout', function() {
			 this.setOptions({visible: false});
			 country.setOptions({fillOpacity: 0});
            });
			
            google.maps.event.addListener(country, 'mouseout', function() {
              this.setOptions({fillOpacity: 0});
			 marker1.setOptions({visible: false});
            });
            country.setMap(map);
			
	    google.maps.event.addListener(country, 'mousedown', function() {
            window.open('../About_NPUs/A/index.html','_self');
            });
			
				    google.maps.event.addListener(marker1, 'mousedown', function() {
            window.open('../About_NPUs/A/index.html','_self');
            });
			
          }
        }
      }

function drawMap2(data) {
        var rows = data['rows'];
		
        for (var i in rows) {
          if (rows[i][0] != 'Antarctica') {
		  
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
			
            if (geometries) {
              for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));

              }
            } else {
              newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
			  
            }
            var randomnumber = 1;
			

            var country = new google.maps.Polygon({
              paths: newCoordinates,
              strokeColor: colors[randomnumber],
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: colors[randomnumber],
              fillOpacity: 0
            });		
			
			  marker2 = new google.maps.Marker({
  position: new google.maps.LatLng(33.839837,-84.366331),
  icon: "http://maps.google.com/mapfiles/kml/paddle/B.png",
  map: map,
  visible: false
});
				    google.maps.event.addListener( marker2, 'mouseover', function(e) {  
             this.setOptions({visible: true});
			 country.setOptions({fillOpacity: 0.5});
            });
			
			            google.maps.event.addListener(marker2, 'mouseout', function() {
			 this.setOptions({visible: false});
			 country.setOptions({fillOpacity: 0});
            });
			    google.maps.event.addListener(country, 'mouseover', function(e) {  
              this.setOptions({fillOpacity: 0.5});
			 marker2.setOptions({visible: true});
            });
			
            google.maps.event.addListener(country, 'mouseout', function() {
              this.setOptions({fillOpacity: 0});
			 marker2.setOptions({visible: false});
            });
			
            country.setMap(map);
			google.maps.event.addListener(country, 'mousedown', function() {
              window.open('../About_NPUs/B/index.html','_self');
            });
			
						google.maps.event.addListener(marker2, 'mousedown', function() {
              window.open('../About_NPUs/B/index.html','_self');
            });
			
          }
        }
      }

function drawMap3(data) {
        var rows = data['rows'];
		
        for (var i in rows) {
          if (rows[i][0] != 'Antarctica') {
		  
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
			
            if (geometries) {
              for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));

              }
            } else {
              newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
			  
            }
            var randomnumber = 1;
			

             var country = new google.maps.Polygon({
              paths: newCoordinates,
              strokeColor: colors[randomnumber],
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: colors[randomnumber],
              fillOpacity: 0
            });		
			
						  marker3 = new google.maps.Marker({
  position: new google.maps.LatLng(33.822512,-84.41474),
  icon: "http://maps.google.com/mapfiles/kml/paddle/C.png",
  map: map,
  visible: false
});
				    google.maps.event.addListener( marker3, 'mouseover', function(e) {  
             this.setOptions({visible: true});
			 country.setOptions({fillOpacity: 0.5});
            });
			
			 google.maps.event.addListener(marker3, 'mouseout', function() {
			 this.setOptions({visible: false});
			 country.setOptions({fillOpacity: 0});
            });
			    google.maps.event.addListener(country, 'mouseover', function(e) {  
              this.setOptions({fillOpacity: 0.5});
			 marker3.setOptions({visible: true});
            });
            google.maps.event.addListener(country, 'mouseout', function() {
              this.setOptions({fillOpacity: 0});
			 marker3.setOptions({visible: false});
            });
            country.setMap(map);
			google.maps.event.addListener(country, 'mousedown', function() {
              window3.open('../About_NPUs/C/index.html','_self');
            });
			
						google.maps.event.addListener(marker3, 'mousedown', function() {
              window3.open('../About_NPUs/C/index.html','_self');
            });
			
          }
        }
      }	  

function drawMap4(data) {
        var rows = data['rows'];
		
        for (var i in rows) {
          if (rows[i][0] != 'Antarctica') {
		  
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
			
            if (geometries) {
              for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));

              }
            } else {
              newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
			  
            }
            var randomnumber = 1;
			

            var country = new google.maps.Polygon({
              paths: newCoordinates,
              strokeColor: colors[randomnumber],
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: colors[randomnumber],
              fillOpacity: 0
            });		
									  marker4 = new google.maps.Marker({
  position: new google.maps.LatLng(33.805326,-84.441519),
  icon: "http://maps.google.com/mapfiles/kml/paddle/D.png",
  map: map,
  visible: false
});
				    google.maps.event.addListener( marker4, 'mouseover', function(e) {  
             this.setOptions({visible: true});
			 country.setOptions({fillOpacity: 0.5});
            });
			
			            google.maps.event.addListener(marker4, 'mouseout', function() {
			 this.setOptions({visible: false});
			 country.setOptions({fillOpacity: 0});
            });
			    google.maps.event.addListener(country, 'mouseover', function(e) {  
              this.setOptions({fillOpacity: 0.5});
			 marker4.setOptions({visible: true});
            });
            google.maps.event.addListener(country, 'mouseout', function() {
              this.setOptions({fillOpacity: 0});
			 marker4.setOptions({visible: false});
            });
            country.setMap(map);
			google.maps.event.addListener(country, 'mousedown', function() {
              window.open('../About_NPUs/D/index.html','_self');
            });
			
						google.maps.event.addListener(marker4, 'mousedown', function() {
              window.open('../About_NPUs/D/index.html','_self');
            });
			
          }
        }
      }	 
	
function drawMap5(data) {
        var rows = data['rows'];
		
        for (var i in rows) {
          if (rows[i][0] != 'Antarctica') {
		  
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
			
            if (geometries) {
              for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));

              }
            } else {
              newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
			  
            }
            var randomnumber = 1;
			

            var country = new google.maps.Polygon({
              paths: newCoordinates,
              strokeColor: colors[randomnumber],
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: colors[randomnumber],
              fillOpacity: 0
            });		
			
												  marker5 = new google.maps.Marker({
  position: new google.maps.LatLng(33.786638,-84.390965),
  icon: "http://maps.google.com/mapfiles/kml/paddle/E.png",
  map: map,
  visible: false
});
				    google.maps.event.addListener( marker5, 'mouseover', function(e) {  
             this.setOptions({visible: true});
			 country.setOptions({fillOpacity: 0.5});
            });
			
			            google.maps.event.addListener(marker5, 'mouseout', function() {
			 this.setOptions({visible: false});
			 country.setOptions({fillOpacity: 0});
            });
			    google.maps.event.addListener(country, 'mouseover', function(e) {  
              this.setOptions({fillOpacity: 0.5});
			 marker5.setOptions({visible: true});
            });
            google.maps.event.addListener(country, 'mouseout', function() {
              this.setOptions({fillOpacity: 0});
			 marker5.setOptions({visible: false});
            });
            country.setMap(map);
			google.maps.event.addListener(country, 'mousedown', function() {
              window.open('../About_NPUs/E/index.html','_self');
            });
			
						google.maps.event.addListener(marker5, 'mousedown', function() {
              window.open('../About_NPUs/E/index.html','_self');
            });
			
          }
        }
      }	

function drawMap6(data) {
        var rows = data['rows'];
		
        for (var i in rows) {
          if (rows[i][0] != 'Antarctica') {
		  
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
			
            if (geometries) {
              for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));

              }
            } else {
              newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
			  
            }
            var randomnumber = 1;
			

            var country = new google.maps.Polygon({
              paths: newCoordinates,
              strokeColor: colors[randomnumber],
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: colors[randomnumber],
              fillOpacity: 0
            });		
			
															  marker6 = new google.maps.Marker({
  position: new google.maps.LatLng(33.796339,-84.359636),
  icon: "http://maps.google.com/mapfiles/kml/paddle/F.png",
  map: map,
  visible: false
});
				    google.maps.event.addListener( marker6, 'mouseover', function(e) {  
             this.setOptions({visible: true});
			 country.setOptions({fillOpacity: 0.5});
            });
			
			            google.maps.event.addListener(marker6, 'mouseout', function() {
			 this.setOptions({visible: false});
			 country.setOptions({fillOpacity: 0});
            });
			    google.maps.event.addListener(country, 'mouseover', function(e) {  
              this.setOptions({fillOpacity: 0.5});
			 marker6.setOptions({visible: true});
            });
            google.maps.event.addListener(country, 'mouseout', function() {
              this.setOptions({fillOpacity: 0});
			 marker6.setOptions({visible: false});
            });
            country.setMap(map);
			google.maps.event.addListener(country, 'mousedown', function() {
              window.open('../About_NPUs/F/index.html','_self');
            });
			
						google.maps.event.addListener(marker6, 'mousedown', function() {
              window.open('../About_NPUs/F/index.html','_self');
            });
			
          }
        }
      }	 	  
	  
function drawMap7(data) {
        var rows = data['rows'];
		
        for (var i in rows) {
          if (rows[i][0] != 'Antarctica') {
		  
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
			
            if (geometries) {
              for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));

              }
            } else {
              newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
			  
            }
            var randomnumber = 1;
			

            var country = new google.maps.Polygon({
              paths: newCoordinates,
              strokeColor: colors[randomnumber],
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: colors[randomnumber],
              fillOpacity: 0
            });		
			
																		  marker7 = new google.maps.Marker({
  position: new google.maps.LatLng(33.798372,-84.478941),
  icon: "http://maps.google.com/mapfiles/kml/paddle/G.png",
  map: map,
  visible: false
});
				    google.maps.event.addListener( marker7, 'mouseover', function(e) {  
             this.setOptions({visible: true});
			 country.setOptions({fillOpacity: 0.5});
            });
			
			            google.maps.event.addListener(marker7, 'mouseout', function() {
			 this.setOptions({visible: false});
			 country.setOptions({fillOpacity: 0});
            });
			    google.maps.event.addListener(country, 'mouseover', function(e) {  
              this.setOptions({fillOpacity: 0.5});
			 marker7.setOptions({visible: true});
            });
            google.maps.event.addListener(country, 'mouseout', function() {
              this.setOptions({fillOpacity: 0});
			 marker7.setOptions({visible: false});
            });
            country.setMap(map);
			google.maps.event.addListener(country, 'mousedown', function() {
              window.open('../About_NPUs/G/index.html','_self');
            });
			
						google.maps.event.addListener(marker7, 'mousedown', function() {
              window.open('../About_NPUs/G/index.html','_self');
            });
			
          }
        }
      }	 
	  
function drawMap8(data) {
        var rows = data['rows'];
		
        for (var i in rows) {
          if (rows[i][0] != 'Antarctica') {
		  
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
			
            if (geometries) {
              for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));

              }
            } else {
              newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
			  
            }
            var randomnumber = 1;
			

            var country = new google.maps.Polygon({
              paths: newCoordinates,
              strokeColor: colors[randomnumber],
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: colors[randomnumber],
              fillOpacity: 0
            });		
			
																					  marker8 = new google.maps.Marker({
  position: new google.maps.LatLng(33.753496,-84.513102),
  icon: "http://maps.google.com/mapfiles/kml/paddle/H.png",
  map: map,
  visible: false
});
				    google.maps.event.addListener( marker8, 'mouseover', function(e) {  
             this.setOptions({visible: true});
			 country.setOptions({fillOpacity: 0.5});
            });
			
			            google.maps.event.addListener(marker8, 'mouseout', function() {
			 this.setOptions({visible: false});
			 country.setOptions({fillOpacity: 0});
            });
			    google.maps.event.addListener(country, 'mouseover', function(e) {  
              this.setOptions({fillOpacity: 0.5});
			 marker8.setOptions({visible: true});
            });
            google.maps.event.addListener(country, 'mouseout', function() {
              this.setOptions({fillOpacity: 0});
			 marker8.setOptions({visible: false});
            });
            country.setMap(map);
			google.maps.event.addListener(country, 'mousedown', function() {
              window.open('../About_NPUs/H/index.html','_self');
            });
			
						google.maps.event.addListener(marker8, 'mousedown', function() {
              window.open('../About_NPUs/H/index.html','_self');
            });
			
          }
        }
      }	 
	  
function drawMap9(data) {
        var rows = data['rows'];
		
        for (var i in rows) {
          if (rows[i][0] != 'Antarctica') {
		  
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
			
            if (geometries) {
              for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));

              }
            } else {
              newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
			  
            }
            var randomnumber = 1;
			

            var country = new google.maps.Polygon({
              paths: newCoordinates,
              strokeColor: colors[randomnumber],
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: colors[randomnumber],
              fillOpacity: 0
            });		
			
																								  marker9 = new google.maps.Marker({
  position: new google.maps.LatLng(33.741471,-84.471087),
  icon: "http://maps.google.com/mapfiles/kml/paddle/I.png",
  map: map,
  visible: false
});
				    google.maps.event.addListener( marker9, 'mouseover', function(e) {  
             this.setOptions({visible: true});
			 country.setOptions({fillOpacity: 0.5});
            });
			
			            google.maps.event.addListener(marker9, 'mouseout', function() {
			 this.setOptions({visible: false});
			 country.setOptions({fillOpacity: 0});
            });
			    google.maps.event.addListener(country, 'mouseover', function(e) {  
              this.setOptions({fillOpacity: 0.5});
			 marker9.setOptions({visible: true});
            });
            google.maps.event.addListener(country, 'mouseout', function() {
              this.setOptions({fillOpacity: 0});
			 marker9.setOptions({visible: false});
            });
            country.setMap(map);
			google.maps.event.addListener(country, 'mousedown', function() {
              window.open('../About_NPUs/I/index.html','_self');
            });
			
						google.maps.event.addListener(marker9, 'mousedown', function() {
              window.open('../About_NPUs/I/index.html','_self');
            });
			
          }
        }
      }	 
	  
function drawMap10(data) {
        var rows = data['rows'];
		
        for (var i in rows) {
          if (rows[i][0] != 'Antarctica') {
		  
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
			
            if (geometries) {
              for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));

              }
            } else {
              newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
			  
            }
            var randomnumber = 1;
			

            var country = new google.maps.Polygon({
              paths: newCoordinates,
              strokeColor: colors[randomnumber],
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: colors[randomnumber],
              fillOpacity: 0
            });		
			
																											  marker10 = new google.maps.Marker({
  position: new google.maps.LatLng(33.770729,-84.456882),
  icon: "http://maps.google.com/mapfiles/kml/paddle/J.png",
  map: map,
  visible: false
});
				    google.maps.event.addListener( marker10, 'mouseover', function(e) {  
             this.setOptions({visible: true});
			 country.setOptions({fillOpacity: 0.5});
            });
			
			            google.maps.event.addListener(marker10, 'mouseout', function() {
			 this.setOptions({visible: false});
			 country.setOptions({fillOpacity: 0});
            });
			    google.maps.event.addListener(country, 'mouseover', function(e) {  
              this.setOptions({fillOpacity: 0.5});
			 marker10.setOptions({visible: true});
            });
            google.maps.event.addListener(country, 'mouseout', function() {
              this.setOptions({fillOpacity: 0});
			 marker10.setOptions({visible: false});
            });
            country.setMap(map);
			google.maps.event.addListener(country, 'mousedown', function() {
              window.open('../About_NPUs/J/index.html','_self');
            });	
						google.maps.event.addListener(marker10, 'mousedown', function() {
              window.open('../About_NPUs/J/index.html','_self');
            });	
			
          }
        }
      }	 
	  
function drawMap11(data) {
        var rows = data['rows'];
		
        for (var i in rows) {
          if (rows[i][0] != 'Antarctica') {
		  
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
			
            if (geometries) {
              for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));

              }
            } else {
              newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
			  
            }
            var randomnumber = 1;
			

            var country = new google.maps.Polygon({
              paths: newCoordinates,
              strokeColor: colors[randomnumber],
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: colors[randomnumber],
              fillOpacity: 0
            });		
			
																														  marker11 = new google.maps.Marker({
  position: new google.maps.LatLng(33.764503,-84.422808),
  icon: "http://maps.google.com/mapfiles/kml/paddle/K.png",
  map: map,
  visible: false
});
				    google.maps.event.addListener( marker11, 'mouseover', function(e) {  
             this.setOptions({visible: true});
			 country.setOptions({fillOpacity: 0.5});
            });
			
			            google.maps.event.addListener(marker11, 'mouseout', function() {
			 this.setOptions({visible: false});
			 country.setOptions({fillOpacity: 0});
            });
			    google.maps.event.addListener(country, 'mouseover', function(e) {  
              this.setOptions({fillOpacity: 0.5});
			 marker11.setOptions({visible: true});
            });
            google.maps.event.addListener(country, 'mouseout', function() {
              this.setOptions({fillOpacity: 0});
			 marker11.setOptions({visible: false});
            });
            country.setMap(map);
			google.maps.event.addListener(country, 'mousedown', function() {
              window.open('../About_NPUs/K/index.html','_self');
            });
			
						google.maps.event.addListener(marker11, 'mousedown', function() {
              window.open('../About_NPUs/K/index.html','_self');
            });
			
          }
        }
      }	 
	  
function drawMap12(data) {
        var rows = data['rows'];
		
        for (var i in rows) {
          if (rows[i][0] != 'Antarctica') {
		  
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
			
            if (geometries) {
              for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));

              }
            } else {
              newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
			  
            }
            var randomnumber = 1;
			

            var country = new google.maps.Polygon({
              paths: newCoordinates,
              strokeColor: colors[randomnumber],
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: colors[randomnumber],
              fillOpacity: 0
            });		
			
																																	  marker12 = new google.maps.Marker({
  position: new google.maps.LatLng(33.764414,-84.411521),
  icon: "http://maps.google.com/mapfiles/kml/paddle/L.png",
  map: map,
  visible: false
});
				    google.maps.event.addListener( marker12, 'mouseover', function(e) {  
             this.setOptions({visible: true});
			 country.setOptions({fillOpacity: 0.5});
            });
			
			            google.maps.event.addListener(marker12, 'mouseout', function() {
			 this.setOptions({visible: false});
			 country.setOptions({fillOpacity: 0});
            });
			    google.maps.event.addListener(country, 'mouseover', function(e) {  
              this.setOptions({fillOpacity: 0.5});
			 marker12.setOptions({visible: true});
            });
            google.maps.event.addListener(country, 'mouseout', function() {
              this.setOptions({fillOpacity: 0});
			 marker12.setOptions({visible: false});
            });
            country.setMap(map);
			google.maps.event.addListener(country, 'mousedown', function() {
              window.open('../About_NPUs/L/index.html','_self');
            });
			
						google.maps.event.addListener(marker12, 'mousedown', function() {
              window.open('../About_NPUs/L/index.html','_self');
            });
			
          }
        }
      }	 
	  
function drawMap13(data) {
        var rows = data['rows'];
		
        for (var i in rows) {
          if (rows[i][0] != 'Antarctica') {
		  
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
			
            if (geometries) {
              for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));

              }
            } else {
              newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
			  
            }
            var randomnumber = 1;
			

            var country = new google.maps.Polygon({
              paths: newCoordinates,
              strokeColor: colors[randomnumber],
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: colors[randomnumber],
              fillOpacity: 0
            });		
			
																																				  marker13 = new google.maps.Marker({
  position: new google.maps.LatLng(33.75842,-84.386244),
  icon: "http://maps.google.com/mapfiles/kml/paddle/M.png",
  map: map,
  visible: false
});
				    google.maps.event.addListener( marker13, 'mouseover', function(e) {  
             this.setOptions({visible: true});
			 country.setOptions({fillOpacity: 0.5});
            });
			
			            google.maps.event.addListener(marker13, 'mouseout', function() {
			 this.setOptions({visible: false});
			 country.setOptions({fillOpacity: 0});
            });
			    google.maps.event.addListener(country, 'mouseover', function(e) {  
              this.setOptions({fillOpacity: 0.5});
			 marker13.setOptions({visible: true});
            });
            google.maps.event.addListener(country, 'mouseout', function() {
              this.setOptions({fillOpacity: 0});
			 marker13.setOptions({visible: false});
            });
            country.setMap(map);
			google.maps.event.addListener(country, 'mousedown', function() {
              window.open('../About_NPUs/M/index.html','_self');
            });
			
						google.maps.event.addListener(marker13, 'mousedown', function() {
              window.open('../About_NPUs/M/index.html','_self');
            });
			
          }
        }
      }	 
	  
function drawMap14(data) {
        var rows = data['rows'];
		
        for (var i in rows) {
          if (rows[i][0] != 'Antarctica') {
		  
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
			
            if (geometries) {
              for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));

              }
            } else {
              newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
			  
            }
            var randomnumber = 1;
			

            var country = new google.maps.Polygon({
              paths: newCoordinates,
              strokeColor: colors[randomnumber],
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: colors[randomnumber],
              fillOpacity: 0
            });		
			
																																							  marker14 = new google.maps.Marker({
  position: new google.maps.LatLng(33.764878,-84.349165),
  icon: "http://maps.google.com/mapfiles/kml/paddle/N.png",
  map: map,
  visible: false
});
				    google.maps.event.addListener( marker14, 'mouseover', function(e) {  
             this.setOptions({visible: true});
			 country.setOptions({fillOpacity: 0.5});
            });
			
			            google.maps.event.addListener(marker14, 'mouseout', function() {
			 this.setOptions({visible: false});
			 country.setOptions({fillOpacity: 0});
            });
			    google.maps.event.addListener(country, 'mouseover', function(e) {  
              this.setOptions({fillOpacity: 0.5});
			 marker14.setOptions({visible: true});
            });
            google.maps.event.addListener(country, 'mouseout', function() {
              this.setOptions({fillOpacity: 0});
			 marker14.setOptions({visible: false});
            });
            country.setMap(map);
			google.maps.event.addListener(country, 'mousedown', function() {
              window.open('../About_NPUs/N/index.html','_self');
            });
			
						google.maps.event.addListener(marker14, 'mousedown', function() {
              window.open('../About_NPUs/N/index.html','_self');
            });
			
          }
        }
      }	 
	  
function drawMap15(data) {
        var rows = data['rows'];
		
        for (var i in rows) {
          if (rows[i][0] != 'Antarctica') {
		  
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
			
            if (geometries) {
              for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));

              }
            } else {
              newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
			  
            }
            var randomnumber = 1;
			

            var country = new google.maps.Polygon({
              paths: newCoordinates,
              strokeColor: colors[randomnumber],
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: colors[randomnumber],
              fillOpacity: 0
            });		
			
																																										  marker15 = new google.maps.Marker({
  position: new google.maps.LatLng(33.753282,-84.32569),
  icon: "http://maps.google.com/mapfiles/kml/paddle/O.png",
  map: map,
  visible: false
});
				    google.maps.event.addListener( marker15, 'mouseover', function(e) {  
             this.setOptions({visible: true});
			 country.setOptions({fillOpacity: 0.5});
            });
			
			            google.maps.event.addListener(marker15, 'mouseout', function() {
			 this.setOptions({visible: false});
			 country.setOptions({fillOpacity: 0});
            });
			    google.maps.event.addListener(country, 'mouseover', function(e) {  
              this.setOptions({fillOpacity: 0.5});
			 marker15.setOptions({visible: true});
            });
            google.maps.event.addListener(country, 'mouseout', function() {
              this.setOptions({fillOpacity: 0});
			 marker15.setOptions({visible: false});
            });
            country.setMap(map);
			google.maps.event.addListener(country, 'mousedown', function() {
              window.open('../About_NPUs/O/index.html','_self');
            });
			
						google.maps.event.addListener(marker15, 'mousedown', function() {
              window.open('../About_NPUs/O/index.html','_self');
            });
			
          }
        }
      }	 
	  
function drawMap16(data) {
        var rows = data['rows'];
		
        for (var i in rows) {
          if (rows[i][0] != 'Antarctica') {
		  
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
			
            if (geometries) {
              for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));

              }
            } else {
              newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
			  
            }
            var randomnumber = 1;
			

            var country = new google.maps.Polygon({
              paths: newCoordinates,
              strokeColor: colors[randomnumber],
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: colors[randomnumber],
              fillOpacity: 0
            });		
																																													  marker16 = new google.maps.Marker({
  position: new google.maps.LatLng(33.688639,-84.514346),
  icon: "http://maps.google.com/mapfiles/kml/paddle/P.png",
  map: map,
  visible: false
});
				    google.maps.event.addListener( marker16, 'mouseover', function(e) {  
             this.setOptions({visible: true});
			 country.setOptions({fillOpacity: 0.5});
            });
			
			            google.maps.event.addListener(marker16, 'mouseout', function() {
			 this.setOptions({visible: false});
			 country.setOptions({fillOpacity: 0});
            });
			    google.maps.event.addListener(country, 'mouseover', function(e) {  
              this.setOptions({fillOpacity: 0.5});
			 marker16.setOptions({visible: true});
            });
            google.maps.event.addListener(country, 'mouseout', function() {
              this.setOptions({fillOpacity: 0});
			 marker16.setOptions({visible: false});
            });
            country.setMap(map);
			google.maps.event.addListener(country, 'mousedown', function() {
              window.open('../About_NPUs/P/index.html','_self');
            });
			
						google.maps.event.addListener(marker16, 'mousedown', function() {
              window.open('../About_NPUs/P/index.html','_self');
            });
			
          }
        }
      }	 
	  
function drawMap17(data) {
        var rows = data['rows'];
		
        for (var i in rows) {
          if (rows[i][0] != 'Antarctica') {
		  
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
			
            if (geometries) {
              for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));

              }
            } else {
              newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
			  
            }
            var randomnumber = 1;
			

            var country = new google.maps.Polygon({
              paths: newCoordinates,
              strokeColor: colors[randomnumber],
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: colors[randomnumber],
              fillOpacity: 0
            });		
																																																  marker17 = new google.maps.Marker({
  position: new google.maps.LatLng(33.725803,-84.532843),
  icon: "http://maps.google.com/mapfiles/kml/paddle/Q.png",
  map: map,
  visible: false
});
				    google.maps.event.addListener( marker17, 'mouseover', function(e) {  
             this.setOptions({visible: true});
			 country.setOptions({fillOpacity: 0.5});
            });
			
			            google.maps.event.addListener(marker17, 'mouseout', function() {
			 this.setOptions({visible: false});
			 country.setOptions({fillOpacity: 0});
            });
			    google.maps.event.addListener(country, 'mouseover', function(e) {  
              this.setOptions({fillOpacity: 0.5});
			 marker17.setOptions({visible: true});
            });
            google.maps.event.addListener(country, 'mouseout', function() {
              this.setOptions({fillOpacity: 0});
			 marker17.setOptions({visible: false});
            });
            country.setMap(map);
			google.maps.event.addListener(country, 'mousedown', function() {
              window.open('../About_NPUs/Q/index.html','_self');
            });
			
						google.maps.event.addListener(marker17, 'mousedown', function() {
              window.open('../About_NPUs/Q/index.html','_self');
            });
			
          }
        }
      }	 
	  
function drawMap18(data) {
        var rows = data['rows'];
		
        for (var i in rows) {
          if (rows[i][0] != 'Antarctica') {
		  
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
			
            if (geometries) {
              for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));

              }
            } else {
              newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
			  
            }
            var randomnumber = 1;
			

            var country = new google.maps.Polygon({
              paths: newCoordinates,
              strokeColor: colors[randomnumber],
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: colors[randomnumber],
              fillOpacity: 0
            });		
			
																																																			  marker18 = new google.maps.Marker({
  position: new google.maps.LatLng(33.702296,-84.476109),
  icon: "http://maps.google.com/mapfiles/kml/paddle/R.png",
  map: map,
  visible: false
});
				    google.maps.event.addListener( marker18, 'mouseover', function(e) {  
             this.setOptions({visible: true});
			 country.setOptions({fillOpacity: 0.5});
            });
			
			            google.maps.event.addListener(marker18, 'mouseout', function() {
			 this.setOptions({visible: false});
			 country.setOptions({fillOpacity: 0});
            });
			    google.maps.event.addListener(country, 'mouseover', function(e) {  
              this.setOptions({fillOpacity: 0.5});
			 marker18.setOptions({visible: true});
            });
            google.maps.event.addListener(country, 'mouseout', function() {
              this.setOptions({fillOpacity: 0});
			 marker18.setOptions({visible: false});
            });
            country.setMap(map);
			google.maps.event.addListener(country, 'mousedown', function() {
              window.open('../About_NPUs/R/index.html','_self');
            });
			
						google.maps.event.addListener(marker18, 'mousedown', function() {
              window.open('../About_NPUs/R/index.html','_self');
            });
			
          }
        }
      }	 
	  
function drawMap19(data) {
        var rows = data['rows'];
		
        for (var i in rows) {
          if (rows[i][0] != 'Antarctica') {
		  
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
			
            if (geometries) {
              for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));

              }
            } else {
              newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
			  
            }
            var randomnumber = 1;
			

            var country = new google.maps.Polygon({
              paths: newCoordinates,
              strokeColor: colors[randomnumber],
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: colors[randomnumber],
              fillOpacity: 0
            });		
			
																																																						  marker19 = new google.maps.Marker({
  position: new google.maps.LatLng(33.722501,-84.437528),
  icon: "http://maps.google.com/mapfiles/kml/paddle/S.png",
  map: map,
  visible: false
});
				    google.maps.event.addListener( marker19, 'mouseover', function(e) {  
             this.setOptions({visible: true});
			 country.setOptions({fillOpacity: 0.5});
            });
			
			            google.maps.event.addListener(marker19, 'mouseout', function() {
			 this.setOptions({visible: false});
			 country.setOptions({fillOpacity: 0});
            });
			    google.maps.event.addListener(country, 'mouseover', function(e) {  
              this.setOptions({fillOpacity: 0.5});
			 marker19.setOptions({visible: true});
            });
            google.maps.event.addListener(country, 'mouseout', function() {
              this.setOptions({fillOpacity: 0});
			 marker19.setOptions({visible: false});
            });
            country.setMap(map);
			google.maps.event.addListener(country, 'mousedown', function() {
              window.open('../About_NPUs/S/index.html','_self');
            });
			
						google.maps.event.addListener(marker19, 'mousedown', function() {
              window.open('../About_NPUs/S/index.html','_self');
            });
			
          }
        }
      }	 
	  
function drawMap20(data) {
        var rows = data['rows'];
		
        for (var i in rows) {
          if (rows[i][0] != 'Antarctica') {
		  
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
			
            if (geometries) {
              for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));

              }
            } else {
              newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
			  
            }
            var randomnumber = 1;
			

            var country = new google.maps.Polygon({
              paths: newCoordinates,
              strokeColor: colors[randomnumber],
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: colors[randomnumber],
              fillOpacity: 0
            });		
			
																																																									  marker20 = new google.maps.Marker({
  position: new google.maps.LatLng(33.741542,-84.424331),
  icon: "http://maps.google.com/mapfiles/kml/paddle/T.png",
  map: map,
  visible: false
});
				    google.maps.event.addListener( marker20, 'mouseover', function(e) {  
             this.setOptions({visible: true});
			 country.setOptions({fillOpacity: 0.5});
            });
			
			            google.maps.event.addListener(marker20, 'mouseout', function() {
			 this.setOptions({visible: false});
			 country.setOptions({fillOpacity: 0});
            });
			    google.maps.event.addListener(country, 'mouseover', function(e) {  
              this.setOptions({fillOpacity: 0.5});
			 marker20.setOptions({visible: true});
            });
            google.maps.event.addListener(country, 'mouseout', function() {
              this.setOptions({fillOpacity: 0});
			 marker20.setOptions({visible: false});
            });
            country.setMap(map);
			google.maps.event.addListener(country, 'mousedown', function() {
              window.open('../About_NPUs/T/index.html','_self');
            });
			
						google.maps.event.addListener(marker20, 'mousedown', function() {
              window.open('../About_NPUs/T/index.html','_self');
            });
			
          }
        }
      }	 
	  
function drawMap21(data) {
        var rows = data['rows'];
		
        for (var i in rows) {
          if (rows[i][0] != 'Antarctica') {
		  
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
			
            if (geometries) {
              for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));

              }
            } else {
              newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
			  
            }
            var randomnumber = 1;
			

            var country = new google.maps.Polygon({
              paths: newCoordinates,
              strokeColor: colors[randomnumber],
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: colors[randomnumber],
              fillOpacity: 0
            });		
			
																																																												  marker21 = new google.maps.Marker({
  position: new google.maps.LatLng(33.736153,-84.39781),
  icon: "http://maps.google.com/mapfiles/kml/paddle/V.png",
  map: map,
  visible: false
});
				    google.maps.event.addListener( marker21, 'mouseover', function(e) {  
             this.setOptions({visible: true});
			 country.setOptions({fillOpacity: 0.5});
            });
			
			            google.maps.event.addListener(marker21, 'mouseout', function() {
			 this.setOptions({visible: false});
			 country.setOptions({fillOpacity: 0});
            });
			    google.maps.event.addListener(country, 'mouseover', function(e) {  
              this.setOptions({fillOpacity: 0.5});
			 marker21.setOptions({visible: true});
            });
            google.maps.event.addListener(country, 'mouseout', function() {
              this.setOptions({fillOpacity: 0});
			 marker21.setOptions({visible: false});
            });
            country.setMap(map);
			google.maps.event.addListener(country, 'mousedown', function() {
              window.open('../About_NPUs/V/index.html','_self');
            });
			
						google.maps.event.addListener(marker21, 'mousedown', function() {
              window.open('../About_NPUs/V/index.html','_self');
            });
			
          }
        }
      }	 
	  
function drawMap22(data) {
        var rows = data['rows'];
		
        for (var i in rows) {
          if (rows[i][0] != 'Antarctica') {
		  
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
			
            if (geometries) {
              for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));

              }
            } else {
              newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
			  
            }
            var randomnumber = 1;
			

            var country = new google.maps.Polygon({
              paths: newCoordinates,
              strokeColor: colors[randomnumber],
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: colors[randomnumber],
              fillOpacity: 0
            });		
			
																							  marker22= new google.maps.Marker({
  position: new google.maps.LatLng(33.73221,-84.354508),
  icon: "http://maps.google.com/mapfiles/kml/paddle/W.png",
  map: map,
  visible: false
});
				    google.maps.event.addListener( marker22, 'mouseover', function(e) {  
             this.setOptions({visible: true});
			 country.setOptions({fillOpacity: 0.5});
            });
			
			            google.maps.event.addListener(marker22, 'mouseout', function() {
			 this.setOptions({visible: false});
			 country.setOptions({fillOpacity: 0});
            });
			    google.maps.event.addListener(country, 'mouseover', function(e) {  
              this.setOptions({fillOpacity: 0.5});
			 marker22.setOptions({visible: true});
            });
            google.maps.event.addListener(country, 'mouseout', function() {
              this.setOptions({fillOpacity: 0});
			 marker22.setOptions({visible: false});
            });
            country.setMap(map);
			google.maps.event.addListener(country, 'mousedown', function() {
              window.open('../About_NPUs/W/index.html','_self');
            });
			
						google.maps.event.addListener(marker22, 'mousedown', function() {
              window.open('../About_NPUs/W/index.html','_self');
            });
			
          }
        }
      }
	  
function drawMap23(data) {
        var rows = data['rows'];
		
        for (var i in rows) {
          if (rows[i][0] != 'Antarctica') {
		  
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
			
            if (geometries) {
              for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));

              }
            } else {
              newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
			  
            }
            var randomnumber = 1;
			

            var country = new google.maps.Polygon({
              paths: newCoordinates,
              strokeColor: colors[randomnumber],
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: colors[randomnumber],
              fillOpacity: 0
            });		
			
																								  marker23 = new google.maps.Marker({
  position: new google.maps.LatLng(33.711346,-84.412422),
  icon: "http://maps.google.com/mapfiles/kml/paddle/X.png",
  map: map,
  visible: false
});
				    google.maps.event.addListener( marker23, 'mouseover', function(e) {  
             this.setOptions({visible: true});
			 country.setOptions({fillOpacity: 0.5});
            });
			
			            google.maps.event.addListener(marker23, 'mouseout', function() {
			 this.setOptions({visible: false});
			 country.setOptions({fillOpacity: 0});
            });
			    google.maps.event.addListener(country, 'mouseover', function(e) {  
              this.setOptions({fillOpacity: 0.5});
			 marker23.setOptions({visible: true});
            });
            google.maps.event.addListener(country, 'mouseout', function() {
              this.setOptions({fillOpacity: 0});
			 marker23.setOptions({visible: false});
            });
            country.setMap(map);
			google.maps.event.addListener(country, 'mousedown', function() {
              window.open('../About_NPUs/X/index.html','_self');
            });
			
						google.maps.event.addListener(marker23, 'mousedown', function() {
              window.open('../About_NPUs/X/index.html','_self');
            });
			
          }
        }
      }
	  
function drawMap24(data) {
        var rows = data['rows'];
		
        for (var i in rows) {
          if (rows[i][0] != 'Antarctica') {
		  
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
			
            if (geometries) {
              for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));

              }
            } else {
              newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
			  
            }
            var randomnumber = 1;
			

            var country = new google.maps.Polygon({
              paths: newCoordinates,
              strokeColor: colors[randomnumber],
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: colors[randomnumber],
              fillOpacity: 0
            });	

																								  marker24 = new google.maps.Marker({
  position: new google.maps.LatLng(33.70849,-84.387531),
  icon: "http://maps.google.com/mapfiles/kml/paddle/Y.png",
  map: map,
  visible: false
});
							    google.maps.event.addListener( marker24, 'mouseover', function(e) {  
             this.setOptions({visible: true});
			 country.setOptions({fillOpacity: 0.5});
            });
			
			            google.maps.event.addListener(marker24, 'mouseout', function() {
			 this.setOptions({visible: false});
			 country.setOptions({fillOpacity: 0});
            });
			    google.maps.event.addListener(country, 'mouseover', function(e) {  
              this.setOptions({fillOpacity: 0.5});
			 marker24.setOptions({visible: true});
            });
            google.maps.event.addListener(country, 'mouseout', function() {
              this.setOptions({fillOpacity: 0});
			 marker24.setOptions({visible: false});
            });
            country.setMap(map);
			google.maps.event.addListener(country, 'mousedown', function() {
              window.open('../About_NPUs/Y/index.html','_self');
            });
			
						google.maps.event.addListener(marker24, 'mousedown', function() {
              window.open('../About_NPUs/Y/index.html','_self');
            });
			
          }
        }
      }
	  
function drawMap25(data) {
        var rows = data['rows'];
		
        for (var i in rows) {
          if (rows[i][0] != 'Antarctica') {
		  
            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];
			
            if (geometries) {
              for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));

              }
            } else {
              newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
			  
            }
            var randomnumber = 1;
			

            var country = new google.maps.Polygon({
              paths: newCoordinates,
              strokeColor: colors[randomnumber],
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: colors[randomnumber],
              fillOpacity: 0
            });		
																												  marker25 = new google.maps.Marker({
  position: new google.maps.LatLng(33.67264,-84.369936),
  icon: "http://maps.google.com/mapfiles/kml/paddle/Z.png",
  map: map,
  visible: false
});
				    google.maps.event.addListener( marker25, 'mouseover', function(e) {  
             this.setOptions({visible: true});
			 country.setOptions({fillOpacity: 0.5});
            });
			
			            google.maps.event.addListener(marker25, 'mouseout', function() {
			 this.setOptions({visible: false});
			 country.setOptions({fillOpacity: 0});
            });
			    google.maps.event.addListener(country, 'mouseover', function(e) {  
              this.setOptions({fillOpacity: 0.5});
			 marker25.setOptions({visible: true});
            });
            google.maps.event.addListener(country, 'mouseout', function() {
              this.setOptions({fillOpacity: 0});
			 marker25.setOptions({visible: false});
            });
            country.setMap(map);
			google.maps.event.addListener(country, 'mousedown', function() {
              window.open('../About_NPUs/Z/index.html','_self');
            });
			
						google.maps.event.addListener(marker25, 'mousedown', function() {
              window.open('../About_NPUs/Z/index.html','_self');
            });
			
          }
        }
      }

function constructNewCoordinates(polygon) {
        var newCoordinates = [];
        var coordinates = polygon['coordinates'][0];
		
        for (var i in coordinates) {
          newCoordinates.push(
              new google.maps.LatLng(coordinates[i][1], coordinates[i][0]));
        }
        return newCoordinates;
      }
	  

	  
	
function filterMap22(layer, map) {

          if (!layer22.getMap()) {
            layer22.setMap(map);
          }
          layer22.setOptions({
            query: {
              select: 'geometry',
              from: '1M1FqUA7aKiTgQNsGaHsl8VA8VnGxRk4g-zL7Lsc'
            },styles: [{ 
			polygonOptions: {
fillColor: "#E7B325",
		strokeOpacity:0.1,
	strokeWeight:0.1,
    fillOpacity: 0.5
            }
  }],
	    suppressInfoWindows:true
          });
          
      }
  
function codeAddress() {
    var address = document.getElementById("address2").value + 'Atlanta,Georgia,USA';
    geocoder.geocode( { 'address': address}, geocoderCallback ); 	
  }


function geocoderCallback (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
       
        var lat = results[0].geometry.location.lat();
        var lng = results[0].geometry.location.lng();
        if (marker) marker.setMap(null);
        marker = new google.maps.Marker({
            map: map, 
            position: results[0].geometry.location
        });		
 
if (!layer22.getMap()) {
            layer22.setMap(map);
          }
          layer22.setOptions({
            query: {
              select: 'geometry',
              from: '1M1FqUA7aKiTgQNsGaHsl8VA8VnGxRk4g-zL7Lsc' 
              },
		styles: [{ 
			polygonOptions: {			
    fillColor: "#DEAE29",
    strokeOpacity:0.1,
  strokeWeight:0.1,
    fillOpacity: 0.3
  }
  },{
  where: 'ST_INTERSECTS(geometry, CIRCLE(LATLNG(' + lat + ', ' + lng + '),1))',
            polygonOptions: {
              fillColor: '#E7B325',
          strokeOpacity:0.1,
  strokeWeight:0.1,
        fillOpacity: 0.7
            }
          }]
          });    
      } 
}
 
	  
google.maps.event.addDomListener(window, 'load', initialize22);





