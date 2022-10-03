const init = ()=>{
  const width = window.innerWidth;
  const height = window.innerHeight;

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
  const camera = new THREE.PerspectiveCamera(100, width/height)
  camera.position.set(0,0,+1000)//初期位置
  const controls = new THREE.OrbitControls(camera,renderer.domElement)//カメラコントロールの設定

  controls.enableDamping = true
  controls.danpingFacter = 0.2
  
  const boxes = []

  const boxXYZ = [-400,-200,0,200,400]

  boxXYZ.map((x)=>{
    boxXYZ.map((y)=>{
      boxXYZ.map((z)=>{
        boxes.push(createBox(100,100,100,x,y,z))
      })
    })
  })

  //シーンに箱を追加？
  boxes.map((box)=>{
    scene.add(box)
  })

  function tick(){//毎フレームごとに実行
    controls.update()
    boxes.map((box)=>{
      box.rotation.x += 0.01
      box.rotation.y += 0.01
    })
    renderer.render(scene,camera)
    
    requestAnimationFrame(tick)//?
  }
  tick()

  function clickBox(event){//クリック時の処理
    const x = event.clientX
    const y = event.clientY

    const mouse = new THREE.Vector2()
    mouse.x = (x/width)*2-1
    mouse.y = -(y/height)*2+1

    const rayCaster = new THREE.Raycaster()//光を投げる？光線的なのを定義
    rayCaster.setFromCamera(mouse,camera)

    const intersects = rayCaster.intersectObjects(scene.children)//raycasterとintersect(交わる)したものを取得？笑

    if(intersects[0])
      scene.remove(intersects[0].object)
  }
  //マウスクリックベント作成
  document.addEventListener('mousedown', clickBox,false)
}
window.addEventListener('DOMContentLoaded', init);



