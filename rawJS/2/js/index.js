const init = ()=>{
  const width = window.innerWidth;
  const height = window.innerHeight;

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#myCanvas")
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(width,height)

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(100,width/height)
  camera.position.set(0,-1000,1000)
  const controls = new THREE.OrbitControls(camera,renderer.domElement)

  controls.enableDamping =true
  controls.danpingFacter = 0.2

  const geometry = new THREE.BoxGeometry(20,20,1500)
  const material = new THREE.MeshNormalMaterial()

  const stick = new THREE.Mesh(geometry,material)

  const planeGeometry = new THREE.PlaneGeometry(10000,10000)
  const planeMaterial = new THREE.MeshBasicMaterial({color: 0xcccccc})
  const plane = new THREE.Mesh(planeGeometry,planeMaterial)
  plane.position.z = -50

  scene.add(stick,plane)

  const tick=()=>{
    controls.update()
    renderer.render(scene,camera)

    requestAnimationFrame(tick)
  }
  tick()
}

window.addEventListener("DOMContentLoaded",init)