<template>
  <div class="esri-component esri-coordinate-conversion esri-widget">
    <div class="esri-coordinate-conversion__conversions-view">
      <ul
        class="esri-coordinate-conversion__conversion-list"
      >
        <li
          class="esri-coordinate-conversion__row"
        >
          <div
            aria-label="121.668512°, 29.344004°"
            class="esri-coordinate-conversion__display"
            role="listitem"
            tabindex="0"
            title="121.668512°, 29.344004°"
          >121.668512°, 29.344004°</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import load from '@/utils/jsapi'
import MapStore from '@/modules/MapStore'

@Component({
  async mounted() {
  const [CoordinateConversionViewModel] = await load([
    "esri/widgets/CoordinateConversion/CoordinateConversionViewModel"
    ]);
  const mapstore: MapStore = MapStore.getMapStore()
  let view = mapstore.getMapView();
  const vm = new CoordinateConversionViewModel({
    view
    });
  }
  })
export default class Coordinate extends Vue {}
</script>
