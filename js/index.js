const init = ()=>{
  const width = 960;
  const height = 640;
  
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
  camera.position.set(0,0,+1000)
  
  const boxes = []

  boxes.push(createBox(100,100,100,-200,200,200))
  boxes.push(createBox(100,100,100,200,200,200))
  boxes.push(createBox(100,100,100,-200,-200,200))
  boxes.push(createBox(100,100,100,200,-200,200))
  boxes.push(createBox(100,100,100,-200,200,-200))
  boxes.push(createBox(100,100,100,200,200,-200))
  boxes.push(createBox(100,100,100,-200,-200,-200))
  boxes.push(createBox(100,100,100,200,-200,-200))

  
  //シーンに箱を追加？
  boxes.map((box)=>{
    scene.add(box)
  })

  
  function tick(){
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
