const init = ()=>{
  const width = 960;
  const height = 640;

  //レンダラーにシーン(箱が入ってる)とカメラを入れる
  
  //レンダラー(レンダリングする場所の設定？)を作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#myCanvas")
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(width,height)
  
  //シーン(空間？)の作成
  const scene = new THREE.Scene()

  //カメラを作成
  const camera = new THREE.PerspectiveCamera(55, width/height)
  camera.position.set(0,0,+1000)//初期位置
  const controls = new THREE.OrbitControls(camera,renderer.domElement)//カメラコントロールの設定

  controls.enableDamping = true
  controls.danpingFacter = 0.2
  
  const boxes = []

  boxes.push(createBox(100,100,100,-200,200,200))
  boxes.push(createBox(100,100,100,0,200,200))
  boxes.push(createBox(100,100,100,200,200,200))
  boxes.push(createBox(100,100,100,-200,0,200))
  boxes.push(createBox(100,100,100,0,0,200))
  boxes.push(createBox(100,100,100,200,0,200))
  boxes.push(createBox(100,100,100,-200,-200,200))
  boxes.push(createBox(100,100,100,0,-200,200))
  boxes.push(createBox(100,100,100,200,-200,200))

  boxes.push(createBox(100,100,100,-200,200,0))
  boxes.push(createBox(100,100,100,0,200,0))
  boxes.push(createBox(100,100,100,200,200,0))
  boxes.push(createBox(100,100,100,-200,0,0))
  boxes.push(createBox(100,100,100,0,0,0))
  boxes.push(createBox(100,100,100,200,0,0))
  boxes.push(createBox(100,100,100,-200,-200,0))
  boxes.push(createBox(100,100,100,0,-200,0))
  boxes.push(createBox(100,100,100,200,-200,0))
  

  boxes.push(createBox(100,100,100,-200,200,-200))
  boxes.push(createBox(100,100,100,0,200,-200))
  boxes.push(createBox(100,100,100,200,200,-200))
  boxes.push(createBox(100,100,100,-200,0,-200))
  boxes.push(createBox(100,100,100,0,0,-200))
  boxes.push(createBox(100,100,100,200,0,-200))
  boxes.push(createBox(100,100,100,-200,-200,-200))
  boxes.push(createBox(100,100,100,0,-200,-200))
  boxes.push(createBox(100,100,100,200,-200,-200))

  
  //シーンに箱を追加？
  boxes.map((box)=>{
    scene.add(box)
  })

  
  function tick(){
    controls.update()
    boxes.map((box)=>{
      box.rotation.x += 0.01
      box.rotation.y += 0.01
    })
    renderer.render(scene,camera)
    
    requestAnimationFrame(tick)//?
  }
  tick()
  
}
window.addEventListener('DOMContentLoaded', init);
