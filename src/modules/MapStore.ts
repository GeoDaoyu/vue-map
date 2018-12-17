import initmap from '@/modules/initMap'
class MapStore {
  private map: any = null
  private mapView: any = null
  private instance: any = null
  constructor () {
    this.init()
  }
  private init () {
    if (!this.instance) {
      this.instance = initmap()
      { this.map, this.mapView } = this.instance
    }
  }
  public getMap () {
    return this.map
  }
  public getMapView () {
    return this.mapView
  }
}
export default new MapStore()