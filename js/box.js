
function createBox(tate=10,yoko=10,takasa=10,x=0,y=0,z=0,roteteX=0,roteteY=0){
  //箱自体のスペック
  const geometry = new THREE.BoxGeometry(tate,yoko,takasa)//座標？
  const material = new THREE.MeshNormalMaterial()//質感？

  const box = new THREE.Mesh(geometry,material)
  box.position.x =x
  box.position.y =y
  box.position.z=z
  box.rotation.x=roteteX
  box.rotation.x=roteteY

  return box
}
