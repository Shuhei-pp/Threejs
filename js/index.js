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
  
  //箱自体のスペック
  const geometry = new THREE.BoxGeometry(100,100,100)//座標？
  const material = new THREE.MeshNormalMaterial()//質感？

  //箱1を作成
  const box1 = new THREE.Mesh(geometry,material)
  box1.position.x =-400

  //箱2を作成
  const box2 = new THREE.Mesh(geometry,material)
  box2.position.x = 400

  
  //シーンに箱を追加？
  scene.add(box1,box2)

  
  function tick(){
    box1.rotation.y += 0.01
    box1.rotation.x += 0.01
    box2.rotation.y += 0.01
    box2.rotation.x += 0.01
    renderer.render(scene,camera)
    
    requestAnimationFrame(tick)//?
  }
  tick()
  
}
window.addEventListener('DOMContentLoaded', init);
