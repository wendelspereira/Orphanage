const options = {
    dragging: false,
    touchZoon: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    zoomControl: false,
}

var map = L.map("mapid", options).setView([-7.93017, -38.9687631], 16);

//
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});


//create end add marker
L.marker([-7.93017, -38.9687631], {icon})
  .addTo(map)
 

  //buttons

  //quando clicar no botão todos perdem a classe active
  function imageSelector(event){
    
    const button = event.currentTarget

    const buttons = document.querySelectorAll('.images button')

    buttons.forEach((button) => {
      button.classList.remove("active")
    })

    button.classList.add('active')

    const image = button.children[0]
    const imgContainer = document.querySelector('.orphanage-details > img')

    imgContainer.src = image.src

  }

  //o botão clicado recebe essa classe

  //orfanage details > image recebe a nova foto

