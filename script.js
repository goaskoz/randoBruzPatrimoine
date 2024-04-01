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

    