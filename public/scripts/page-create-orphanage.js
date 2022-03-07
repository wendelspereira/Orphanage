var map = L.map("mapid").setView([-7.93017, -38.9687631], 16);

//
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

let marker;

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  marker && map.removeLayer(marker);

  //create end add marker
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// photos upload

function addImageField() {
  //pega o conteiner de fotos
  const container = document.querySelector(["#images"]);

  //pega o container de campo
  const fieldsContainer = document.querySelectorAll([".new-upload"]);

  //criar uma cópias do container de campo anterior
  const newContainerField = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //pega o elemento campo 'input' do último container de campo 
  const input = newContainerField.children[0];

  //verifica se o campo está vasio
  if (input.value == "") return;

  //limpar o campo de texto1
  input.value = "";

  //adciona ao container
  container.appendChild(newContainerField);
}

function removeField(event) {
  const span = event.currentTarget;
  span.parentNode.remove()
}
