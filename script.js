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
const buttonsToFlyTo = document.querySelectorAll("#Manoir Noë, #Parc de la Herverie, #Cabinet architecture, #Bruz-Centre, #Grand Logis, #Cimetière, #Vau Gaillard, #La Providence, #Jacques Prévert, #2e RMAT, #Quartier de gare, #Gare de Bruz, #Rue Boissousel, #Mine 2GM, #Presbytère, #Pl. C. Roullin");

// Configuration des événements pour chaque bouton
document.getElementById('Manoir Noë').addEventListener('click', function () {
    flyToLocation(12, [-1.750997908366768, 48.024475510946225], 0, 0);
});

document.getElementById('Parc de la Herverie').addEventListener('click', function () {
    flyToLocation(12, [-1.750997908366768, 48.024475510946225], 0, 0);
});

document.getElementById('Cabinet architecture').addEventListener('click', function () {
    flyToLocation(12, [-1.749047374624584, 48.023139111604912], 0, 0);
});

document.getElementById('Bruz-Centre').addEventListener('click', function () {
    flyToLocation(12, [-1.747579017093493, 48.02457091521449], 0, 0);
});

document.getElementById('Grand Logis').addEventListener('click', function () {
    flyToLocation(12, [-1.745197283999986, 48.023350426665438], 0, 0);
});

document.getElementById('Cimetière').addEventListener('click', function () {
    flyToLocation(12, [-1.74383721428459, 48.023611492130541], 0, 0);
});

document.getElementById('Vau Gaillard').addEventListener('click', function () {
    flyToLocation(12, [-1.744925249220352, 48.025107783866694], 0, 0);
});

document.getElementById('La Providence').addEventListener('click', function () {
    flyToLocation(12, [-1.748200453216257, 48.026062695182603], 0, 0);
});

document.getElementById('Jacques Prévert').addEventListener('click', function () {
    flyToLocation(12, [-1.748437883909554, 48.026561149499976], 0, 0);
});

document.getElementById('2e RMAT').addEventListener('click', function () {
    flyToLocation(12, [-1.749233693997537, 48.027826219789361], 0, 0);
});

document.getElementById('Quartier de gare').addEventListener('click', function () {
    flyToLocation(12, [-1.75031145978612, 48.027790984498168], 0, 0);
});

document.getElementById('Gare de Bruz').addEventListener('click', function () {
    flyToLocation(12, [-1.751391555444828, 48.028467414780486], 0, 0);
});

document.getElementById('Rue Boissousel').addEventListener('click', function () {
    flyToLocation(12, [-1.752644997570135, 48.025797765650523], 0, 0);
});

document.getElementById('Mine 2GM').addEventListener('click', function () {
    flyToLocation(12, [-1.74994231600716, 48.024082071504317], 0, 0);
});

document.getElementById('Presbytère').addEventListener('click', function () {
    flyToLocation(12, [-1.748559802614701, 48.024049317640575], 0, 0);
});

document.getElementById('Pl. C. Roullin').addEventListener('click', function () {
    flyToLocation(12, [-1.747879264407958, 48.024153684658955], 0, 0);
});



