//Appel et configuration de la carte

var map = new mapboxgl.Map({
    container: "map",
    style: "https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/style.json", //Fond de carte
    zoom: 15.3, // Zoom
    center: [-1.747136, 48.024462], // Centrage
    pitch: 60, // Inclinaison
    bearing: -50, // Rotation
    minZoom: 14.5, // Zoom min
});

    // Wait for the map style to finish loading
    map.on('style.load', function() {
        // Call the function to add the markers
        addReperesRando();
    });


    // Ajouter la source de données
    function addReperesRando() {
        fetch("https://raw.githubusercontent.com/goaskoz/randoBruzPatrimoine/main/reperesRando.geojson")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                console.log("GeoJSON data:", data); // Log the fetched GeoJSON data
                map.addSource("reperesRando", {
                    type: "geojson",
                    data: data
                });

                map.addLayer({
                    id: "reperesRando",
                    type: "circle",
                    source: "reperesRando",
                    paint: {
                        "circle-stroke-color": "white",
                        "circle-stroke-width": 3,
                        "circle-radius": 6,
                        "circle-color": "#0074D9"
                    }
                });
            })
            .catch(error => {
                console.error("An error occurred while fetching or processing the data:", error);
            });
    }

// Sélectionner les boutons spécifiques
const buttonsToFlyTo = document.querySelectorAll("#Manoir, #Herverie, #Archi, #BruzCentre, #GrandLogis, #Cimetiere, #VauGaillard, #Providence, #JacquesPrevert, #2eRMAT, #QuartierGare, #GareBruz, #Boissousel, #Mine2GM, #Presbytere, #ChanoineRoullin");

// Configuration onglets géographiques
document.getElementById('Bruz').addEventListener('click', function () {
    map.flyTo({
        zoom: 12,
        center: [-1.672, 48.1043],
        pitch: 0,
        bearing: 0
    });
});

document.getElementById('Herverie').addEventListener('click', function () {
    map.flyTo({
        zoom: 16,
        center: [-1.750997908366768, 48.024475510946225],
        pitch: 0,
        bearing: 0
    });
});

document.getElementById('Manoir').addEventListener('click', function () {
    map.flyTo({
        zoom: 12,
        center: [-1.75183938548356, 48.021545588317458],
        pitch: 0,
        bearing: 0
    });
});

document.getElementById('Archi').addEventListener('click', function () {
    map.flyTo({
        zoom: 16,
        center: [-1.749047374624584, 48.023139111604912],
        pitch: 0,
        bearing: 0
    });
});

document.getElementById('BruzCentre').addEventListener('click', function () {
    map.flyTo({
        zoom: 12,
        center: [-1.747579017093493, 48.02457091521449],
        pitch: 0,
        bearing: 0
    });
});

document.getElementById('GrandLogis').addEventListener('click', function () {
    map.flyTo({
        zoom: 12,
        center: [-1.745197283999986, 48.023350426665438],
        pitch: 0,
        bearing: 0
    });
});

document.getElementById('Cimetiere').addEventListener('click', function () {
    map.flyTo({
        zoom: 12,
        center: [-1.74383721428459, 48.023611492130541],
        pitch: 0,
        bearing: 0
    });
});

document.getElementById('VauGaillard').addEventListener('click', function () {
    map.flyTo({
        zoom: 12,
        center: [-1.744925249220352, 48.025107783866694],
        pitch: 0,
        bearing: 0
    });
});

document.getElementById('Providence').addEventListener('click', function () {
    map.flyTo({
        zoom: 12,
        center: [-1.748200453216257, 48.026062695182603],
        pitch: 0,
        bearing: 0
    });
});

document.getElementById('JacquesPrevert').addEventListener('click', function () {
    map.flyTo({
        zoom: 12,
        center: [-1.748437883909554, 48.026561149499976],
        pitch: 0,
        bearing: 0
    });
});

document.getElementById('2eRMAT').addEventListener('click', function () {
    map.flyTo({
        zoom: 12,
        center: [-1.749233693997537, 48.027826219789361],
        pitch: 0,
        bearing: 0
    });
});

document.getElementById('QuartierGare').addEventListener('click', function () {
    map.flyTo({
        zoom: 12,
        center: [-1.75031145978612, 48.027790984498168],
        pitch: 0,
        bearing: 0
    });
});

document.getElementById('GareBruz').addEventListener('click', function () {
    map.flyTo({
        zoom: 12,
        center: [-1.751391555444828, 48.028467414780486],
        pitch: 0,
        bearing: 0
    });
});

document.getElementById('Boissousel').addEventListener('click', function () {
    map.flyTo({
        zoom: 12,
        center: [-1.752644997570135, 48.025797765650523],
        pitch: 0,
        bearing: 0
    });
});

document.getElementById('Mine2GM').addEventListener('click', function () {
    map.flyTo({
        zoom: 12,
        center: [-1.74994231600716, 48.024082071504317],
        pitch: 0,
        bearing: 0
    });
});

document.getElementById('Presbytere').addEventListener('click', function () {
    map.flyTo({
        zoom: 12,
        center: [-1.748559802614701, 48.024049317640575],
        pitch: 0,
        bearing: 0
    });
});

document.getElementById('ChanoineRoullin').addEventListener('click', function () {
    map.flyTo({
        zoom: 12,
        center: [-1.747879264407958, 48.024153684658955],
        pitch: 0,
        bearing: 0
    });
});


