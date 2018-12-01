import * as jsapi from './jsapi'

export async function createMap () {
  const [
    MapView,
    Map
  ] = await jsapi.load([
    'esri/views/MapView',
    'esri/Map'
  ])
  const map = new Map({
    basemap: 'streets'
  })
  const view = new MapView({
    map: map,
    container: 'viewDiv',
    zoom: 7,
    center: [120, 30]
  })
}
