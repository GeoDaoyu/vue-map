export const createMap = function (loader) {
  const esriLoader = loader
  esriLoader.dojoRequire(
    [
      'esri/views/MapView',
      'esri/Map'
    ],
    (
      MapView,
      Map
    ) => {
      const map = new Map({
        basemap: 'topo-vector'
      })
      const view = new MapView({
        map: map,
        container: 'viewDiv',
        zoom: zoom,
        center: center
      })
      // map.add(layer)
    }
  )
}
