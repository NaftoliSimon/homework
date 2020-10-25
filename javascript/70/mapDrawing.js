/* global google*/
window.initMap = function () {
    'use strict';
  
    const lakewood = { lat: 40.095657332825816, lng: -74.22207079649733 }; 
    const map = new google.maps.Map(document.getElementById('map'), {
      center: lakewood,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    });
    const infoWindow = new google.maps.InfoWindow({ maxWidth: 500 });
  
    const markers = [];
    const circles = [];
    const squares = [];
  
    const drawingManager = new google.maps.drawing.DrawingManager(); 
    drawingManager.setMap(map);
  
    google.maps.event.addListener(drawingManager, 'overlaycomplete', event => {
      console.log(event);
      if (event.type === 'marker') {
        console.log(event.overlay.position.lat(), event.overlay.position.lng()); 
  
        markers.push(event.overlay.position);
        localStorage.markers = JSON.stringify(markers);
      } // else if circle do circle code

    });
  
    /*google.maps.event.addListener(drawingManager, 'markercomplete', event => {
      
      markers.push({lat: event.overlay.position.lat(), lng: event.overlay.position.lng()});
        localStorage.markers = JSON.stringify(markers);
    });*/


    google.maps.event.addListener(drawingManager, 'circlecomplete', event => {
      //localStorage.circle = JSON.stringify({center: event.center, radius: event.radius});
      //console.log(event);

      circles.push({center: event.center, radius: event.radius});
      localStorage.circles = JSON.stringify(circles);
    });

    google.maps.event.addListener(drawingManager, 'rectanglecomplete', event => {
      
        squares.push({bounds: event.Sa/*TODO <------------------------------ */});
        localStorage.squares = JSON.stringify(squares);
      
    });

    /*google.maps.event.addListener(drawingManager, 'overlaycomplete', event => {
      console.log(event);
      if (event.type === 'rectangle') {
        squares.push();
        localStorage.squares = JSON.stringify(squares);
      } 
    });*/
  
//save data into local storage
/////////////////////////////////////////////////////// 
//use local saved data
    
    if (localStorage.markers) {
      const m = JSON.parse(localStorage.markers);
      m.forEach(pos => {
        new google.maps.Marker({
          position: pos,
          map: map,
          animation: google.maps.Animation.DROP
        });
      });
    }

     if (localStorage.circles) {
      const c = JSON.parse(localStorage.circles);
      c.forEach(circle => {
      new google.maps.Circle({
        map: map,
        center: circle.center,
        radius: circle.radius
      });
    });
  }
  /*function saveToLocalStorage(eventType, array ) {
    google.maps.event.addListener(drawingManager, 'overlaycomplete', event => {
      //console.log(event);
      if (event.type === eventType) {
  
        array.push({center: event.center, radius: event.radius});
        localStorage.array = JSON.stringify(array);
      } // else if circle do circle code
    });
  }/*

  /*function localStorageDisplay(array, Shape, shapeElem, shapeElem2) {
    if (localStorage.array) {
      const c = JSON.parse(localStorage.array);
      c.forEach(shape => {
      new google.maps.Shape({
        map: map,
        shapeElem: shape.shapeElem,
        shapeElem2: shape.shapeElem2
      });
    });
  }
  }*/
  };