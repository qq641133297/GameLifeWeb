<template>
  <div style="position:fixed;width:100%;height:100%;left:0;top:0">
    <div id="linkstart" style="overflow:hidden"></div>
    <div @click="start" class='jylee-btn' v-show='!isStart'>Link Start</div>
    <audio id="linkstartMP3" src="/static/audio/link_star.min.MP3"></audio>
  </div>
</template>

<script>
import linkstartS from './scene/linkstart'
export default {
  data () {
    return {
      isStart: false
    }
  },
  methods: {
    start () {
      this.isStart = true
      linkstartS.start();
      let audio = document.getElementById('linkstartMP3')
      console.log(audio)
      audio.play()
    }
  },
  mounted () {
    linkstartS.init(document.getElementById('linkstart'))
  }
}
</script>

<style>
.jylee-btn{
  position: fixed;
  width: 100px;
  height: 30px;
  line-height: 30px;
  right: 0;
  bottom: 0;
  color:#fff;
  background-color:royalblue;
}
</style>
