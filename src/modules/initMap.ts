import load from '@/utils/jsapi'
import MapStore from '@/modules/MapStore'
export default async function init () {
  const [
    Map, MapView
  ] = await load([
    'esri/Map',
    'esri/views/MapView',
  ])
  const map = new Map()
  const mapView = new MapView({
    container: 'viewDiv',
    map: map
  })
  return {map, mapView}
}
