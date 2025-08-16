async function init() {
    Cesium.Ion.defaultAccessToken = 'TU_TOKEN_AQUI'; // Pon tu token aquí

    const viewer = new Cesium.Viewer('cesiumContainer', {
        terrainProvider: Cesium.createWorldTerrain()
    });

    try {
        const dataSource = await Cesium.CzmlDataSource.load('ciudades_formas.czml');
        viewer.dataSources.add(dataSource);
        await viewer.zoomTo(dataSource);
    } catch (error) {
        console.error('Error cargando CZML:', error);
    }
}

init();
