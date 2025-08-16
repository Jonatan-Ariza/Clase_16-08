Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MTM2YmJhMS1kYjM0LTRlOGUtODcyMC1hNjIyMTQxMTUxZDMiLCJpZCI6MzMxMzYzLCJpYXQiOjE3NTUzNTMxNDl9.HLzTE34y1aBteO93OcVBtNj92RU38HV767tSaQUpKMY';

const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain()
});

viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(-74.0721, 4.711, 500000), // Bogotá, vista más amplia
    orientation: {
        heading: Cesium.Math.toRadians(0.0),
        pitch: Cesium.Math.toRadians(-45.0),
        roll: 0.0
    }
});

// Agregar cajas para ciudades (lat, lon, tamaño en metros)
const ciudades = [
    { nombre: "Bogotá", coords: [-74.0721, 4.711], color: Cesium.Color.RED, size: 60000 },
    { nombre: "Medellín", coords: [-75.5636, 6.2442], color: Cesium.Color.GREEN, size: 40000 },
    { nombre: "Barranquilla", coords: [-74.7964, 10.9685], color: Cesium.Color.BLUE, size: 30000 }
];

ciudades.forEach(ciudad => {
    viewer.entities.add({
        name: ciudad.nombre,
        position: Cesium.Cartesian3.fromDegrees(...ciudad.coords),
        box: {
            dimensions: new Cesium.Cartesian3(ciudad.size, ciudad.size, ciudad.size),
            material: ciudad.color.withAlpha(0.5),
            outline: true,
            outlineColor: Cesium.Color.BLACK
        }
    });
});
