import * as THREE from 'three';
import gsap from 'gsap';

//Scene
const scena = new THREE.Scene()

//Cubo rojo
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: "#ff0000" })
const mesh = new THREE.Mesh(geometry, material)
scena.add(mesh)

const sizes = {
  width: 800,
  height: 600
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scena.add(camera)

//Rendere
const canvas = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scena, camera)

//Animation

//const clock = new THREE.Clock

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 })
const tick = () => {
  /** 
  const elapstime = clock.getElapsedTime()

  //Actualizar objetos
  camera.position.y = Math.sin(elapstime)
  camera.position.x = Math.cos(elapstime)
  camera.lookAt(mesh.position)
*/
//Hay que actulizar los frames
  renderer.render(scena,camera)
  window.requestAnimationFrame(tick)
}

tick()