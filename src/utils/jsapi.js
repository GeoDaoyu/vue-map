import esriLoader from 'esri-loader'

const apiRoot = 'https://js.arcgis.com/4.9/init.js'
const dojoConfig = {
  async: true,
  deps: ['@dojo/framework/shim/main'],
  has: {
    'esri-promise-compatibility': 1, // Use native Promises by default
    'esri-featurelayer-webgl': 1 // Enable FeatureLayer WebGL capabilities
  }
}

function configEsriLoader () {
  esriLoader.utils.Promise = Promise
}

export default function preload () {
  return esriLoader.loadScript({
    dojoConfig,
    url: apiRoot
  })
}

export function load (modules) {
  configEsriLoader()
  return esriLoader.loadModules(modules, {
    dojoConfig,
    url: apiRoot
  })
}
