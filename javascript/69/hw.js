/* global google */
//(function () {
function initMap() {
  'use strict';

  let markers = [];
  const bounds = new google.maps.LatLngBounds();
  const startLocation = { lat: 40.095657332825816, lng: -74.22207079649733 };

  const map = new google.maps.Map(document.getElementById('map'), {
    center: startLocation,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });

  const infoWindow = new google.maps.InfoWindow();

  $('#searchbar button').click(() =>
    fetch(`http://api.geonames.org/wikipediaSearch?q=${$('#location').val()}&maxRows=10&username=naftolisimon&type=json`)
      .then(r => {
        if (!r.ok) {
          throw new Error(`${r.status} ${r.statusText}`);
        }
        return r.json();
      })
      .then(location => {
        console.log(location);
        clearOldResults();
        location.geonames.forEach(elem => {

          const newMarker = new google.maps.Marker({
            position: { lat: elem.lat, lng: elem.lng },
            center: { lat: elem.lat, lng: elem.lng },
            zoom: 18,
            map: map,
            animation: google.maps.Animation.DROP,
            title: elem.title,
            icon: {
              url: elem.thumbnailImg,
              scaledSize: new google.maps.Size(25, 25)
            }
          });
          markers.push(newMarker);
          displayInSidebar(elem);
          newMarker.addListener('click', () => {
            infoWindow.setContent(`${elem.summary}
                      <br>
                      <a target="_blank" href="https://${elem.wikipediaUrl}"> more info </a>
                    `);
            infoWindow.open(map, newMarker);
          });
          bounds.extend(newMarker.position);
        });


        map.fitBounds(bounds);
      })
      .catch(err => console.error(err))
  );
  function displayInSidebar(elem) {
    $(`<li>
         <!--img src="${elem.thumbnailImg}"-->
         <span>${elem.title}<span>
       </li>`)
      .appendTo('#searchbar ul')
      .click(() => {
        map.panTo({ lat: elem.lat, lng: elem.lng });
        //TODO: make map zoom closer to marker
      });
  }
  function clearOldResults() {
    $('#searchbar li').remove(); //clears sidebar list
    markers.forEach(marker => { // clears markers from map
      marker.setMap(null);
    });
  }

}
      //}());


/*
      some ideas TODO:
      let user enter amount of results each search returns (between 1 and 10?, maybe dropdown?)
      improve searchbar
      improve info on click(make it look nicer)
      (?change start location to user location?)
      fix icon error message where there is no icon data

      SUBMIT HW WITHOUT KEY!!! <---------------------------
*/