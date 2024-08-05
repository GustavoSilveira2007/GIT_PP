var map = L.map('map').setView([-30.03283000, -51.23019000], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

var markers = [];


document.addEventListener('DOMContentLoaded', async () => {

    const response = await fetch('http://localhost:3000/api/get/mapa/');
    const result = await response.json();

    result.data.forEach(function(marcador) {
        addMarker(marcador.nome, marcador.lat, marcador.lng)
    })
    console.log(result)
})

document.getElementById('marker-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var name = document.getElementById('markername').value;
    var lat = parseFloat(document.getElementById('markerlat').value);
    var lng = parseFloat(document.getElementById('markerlng').value);

    if (!isNaN(lat) && !isNaN(lng)) {
        addMarker(name, lat, lng);
    } else {
        alert('Latitude e Longitude inválidas!');
    }
});

function addMarker(name, lat, lng) {
    var marker = L.marker([lat, lng]).addTo(map).bindPopup(name);
    markers.push(marker);

    var markerList = document.getElementById('marker-list');
    var markerItem = document.createElement('div');
    markerItem.className = 'marker-item';
    markerItem.innerHTML = `<span>${name} (${lat}, ${lng})</span><button onclick="removeMarker(${markers.length - 1})">Remover</button>`;
    markerList.appendChild(markerItem);
}

function removeMarker(index) {
    map.removeLayer(markers[index]);
    markers[index] = null;

    var markerList = document.getElementById('marker-list');
    markerList.removeChild(markerList.childNodes[index]);
}