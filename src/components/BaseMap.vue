<script lang="ts">
import { Vue } from 'vue-property-decorator'
import createMap from '@/modules/tdtMap'

export default class Login extends Vue {
  mounted () {
    createMap('viewDiv')
  }
}
</script>
