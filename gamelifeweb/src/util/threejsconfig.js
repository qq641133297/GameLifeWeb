import * as THREE from 'three'

(function () {
  'use strict'
  window.THREE = THREE
  require('three/examples/js/controls/OrbitControls')
  let Stats = require('three/examples/js/libs/stats.min')
  window.Stats = Stats
})()
export default THREE
