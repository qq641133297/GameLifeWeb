import THREE from '@/util/threejsconfig'

export default {
  scene: null,
  camera: null,
  render: null,

  init (el) {
    this.scene = new THREE.Scene();// 生成一个场景
    // 生成一个相机
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);// 视场，长宽比，近面，远面
    this.camera.position.x = 0;
    this.camera.position.y = 2000;
    this.camera.position.z = 0;
    this.camera.lookAt(this.scene.position);
    // 生成一个渲染器
    this.render = new THREE.WebGLRenderer({antialias: true});
    this.render.setClearColor(0xEEEEEE);
    this.render.setSize(window.innerWidth, window.innerHeight);
    let cylinderMeshs = []
    let number = 150
    for (let i = 0; i < number; i++) {
      // 生成一个圆柱体
      let cylinderGeo = new THREE.CylinderGeometry(1, 1, 300, 40, 40);
      let cylinderMat = new THREE.MeshLambertMaterial({// 创建材料
        color: parseInt(Math.random() * 0x1000000),
        wireframe: false
      });
      // 创建圆柱体网格模型
      let cylinderMesh = new THREE.Mesh(cylinderGeo, cylinderMat);
      let radian = 2 * i * Math.PI / number
      let r = parseInt(Math.random() * 5 + 3) * 2
      let x = r * Math.sin(radian)
      let y = Math.random() * 2000
      let z = r * Math.cos(radian)
      cylinderMesh.position.set(x, i % 2 ? y : -y, i % 2 ? z : -z)
      cylinderMeshs.push(cylinderMeshs)
      console.log(i)
      this.scene.add(cylinderMesh);
    }
    // 给场景添加光源
    // 自然光
    var ambientLight = new THREE.AmbientLight(0x606060);
    this.scene.add(ambientLight);
    // 平行光源
    var directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 0.75, 0.5).normalize();
    // 生成一个状态参数
    this.stats = new window.Stats()
    this.stats.domElement.style.position = 'absolute'
    this.stats.domElement.style.left = '0px'
    this.stats.domElement.style.top = '0px'

    // 将相机，渲染器，坐标轴，平面都追加到场景中，然后对场景和相机进行渲染
    this.scene.add(directionalLight);
    this.scene.add(this.camera);
    // scene.add(this.render);
    el.append(this.render.domElement);
    el.append(this.stats.domElement);
    this.render.render(this.scene, this.camera);
  },
  start () {
    let speed = 1
    let renderScene = () => {
      speed += 1 / 30
      this.camera.position.y -= speed
      if (this.camera.position.y > -1800) {
        requestAnimationFrame(renderScene)
      } else {
        window.$router.replace({name: 'shijieRPG'})
      }
      this.render.render(this.scene, this.camera);
      this.stats.update()
    }
    renderScene()
  }
}
