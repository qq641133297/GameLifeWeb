import THREE from '@/util/threejsconfig'

export default {
  init (el) {
    var scene = new THREE.Scene();// 生成一个场景
    // 生成一个相机
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);// 视场，长宽比，近面，远面
    camera.position.x = 0;
    camera.position.y = 100;
    camera.position.z = 0;
    camera.lookAt(scene.position);
    // 生成一个渲染器
    var render = new THREE.WebGLRenderer({antialias: true});
    render.setClearColor(0xEEEEEE);
    render.setSize(window.innerWidth, window.innerHeight);
    let cylinderMeshs = []
    let number = 100
    for (let i = 0; i < number; i++) {
      // 生成一个圆柱体
      let cylinderGeo = new THREE.CylinderGeometry(1, 1, 40, 40, 40);
      let cylinderMat = new THREE.MeshLambertMaterial({// 创建材料
        color: parseInt(Math.random() * 0x1000000),
        wireframe: false
      });
      // 创建圆柱体网格模型
      let cylinderMesh = new THREE.Mesh(cylinderGeo, cylinderMat);
      let radian = 2 * i * Math.PI / number
      let r = parseInt(Math.random() * 5 + 3) * 2
      let x = r * Math.sin(radian)
      let y = Math.random() * 100
      let z = r * Math.cos(radian)
      cylinderMesh.position.set(x, i % 2 ? y : -y, i % 2 ? z : -z)
      cylinderMeshs.push(cylinderMeshs)
      scene.add(cylinderMesh);
    }
    // 给场景添加光源
    // 自然光
    var ambientLight = new THREE.AmbientLight(0x606060);
    scene.add(ambientLight);
    // 平行光源
    var directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 0.75, 0.5).normalize();
    scene.add(directionalLight);
    // 将相机，渲染器，坐标轴，平面都追加到场景中，然后对场景和相机进行渲染

    scene.add(camera);
    scene.add(render);
    render.render(scene, camera);
    el.append(render.domElement);
  }
}
