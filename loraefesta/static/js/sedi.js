var initialize = function() {
 
 
//MAP1 HK
  // fornisce latitudine e longitudine
  var latlng1 = new google.maps.LatLng(22.30821,114.22491);
  // imposta le opzioni di visualizzazione
  var options1 = { zoom: 14,
                  center: latlng1,
                  mapTypeId: google.maps.MapTypeId.ROADMAP,
				 panControl: false,
				zoomControl: true,
				scaleControl: false
                };
                 
  // crea l'oggetto map1
  var map1 = new google.maps.Map(document.getElementById('map1'), options1);
  
var image = {url: 'http://www.simoneicardi.com/wp-content/plugins/qtranslate/flags/it.png'};
  
  
  var marker = new google.maps.Marker({ position: latlng1,
                                      map: map1, 
                                      title: 'Hong Kong Main office',
									  icon: image
									  });

 
 
//MAP3 USA
  // fornisce latitudine e longitudine
  var latlng3 = new google.maps.LatLng(40.71416,-74.00494);
  // imposta le opzioni di visualizzazione
  var options3 = { zoom: 14,
                  center: latlng3,
                  mapTypeId: google.maps.MapTypeId.ROADMAP,
				 panControl: false,
				zoomControl: true,
				scaleControl: false
                };
                 
  // crea l'oggetto map1
  var map3 = new google.maps.Map(document.getElementById('map3'), options3);
  
  var marker = new google.maps.Marker({ position: latlng3,
                                      map: map3, 
                                      title: 'Tollegno 1900 USA Inc.',
									  icon: image
									  });
  
}
 
window.onload = initialize;