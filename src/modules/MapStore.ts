import initMap from '@/modules/initMap'
export default class MapStore {
  private map: any = null
  private mapView: any = null
  static mapStore: MapStore
  constructor () {
  }
  public async init () {
    const response = await initMap('viewDiv')
    this.map = response.map
    this.mapView = response.mapView
  }
  static getMapStore () {
    if (!this.mapStore) {
      this.mapStore = new MapStore()
    }
    return this.mapStore
  }
  public getMap () {
    return this.map
  }
  public getMapView () {
    return this.mapView
  }
}
