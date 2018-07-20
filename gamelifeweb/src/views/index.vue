<template>
  <div id="linkstart" style="overflow:hidden"></div>
</template>

<script>
import linkstartS from './scene/linkstart'
export default {
  data () {
    return {}
  },
  mounted () {
    linkstartS.init(document.getElementById('linkstart'))
  }
}
</script>

<style>

</style>
