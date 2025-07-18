mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: listing.geometry.coordinates, // [lng, lat]
  zoom: 9
});



// Add marker after map loads
map.on('load', () => {
  new mapboxgl.Marker({ color: 'red' })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }).setHTML(`<b><h4>${listing.title}</h4></b><p>Exact location  will be provided after booking </p>`)
    )
    .addTo(map)
    
});


