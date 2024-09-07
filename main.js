import * as THREE from 'three'

//Scene
const scena = new THREE.Scene()


//objetos 

const group = new THREE.Group()
group.position.y=1
group.scale.y=2
group.rotation.y=1
scena.add(group)

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial({color:"red"})
)

group.add(cube1)

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial({color:"blue"})
)

cube2.position.x=-2
group.add(cube2)


const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial({color:"green"})
)

cube3.position.x=2
group.add(cube3)


/** 

//Cubo rojo
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:"#ff0000"})
const mesh = new THREE.Mesh(geometry,material)
scena.add(mesh)

//Position
//mesh.position.x = 0.7
//mesh.position.y = -0.6
//mesh.position.z = 1
mesh.position.set(0.7,-0.6,1)

//Scala
//mesh.scale.x = 2
//mesh.scale.y = .5
//mesh.scale.z = .5
mesh.scale.set(2,.5,.5)

//Rotation
mesh.rotation.reorder("YXZ")//orden de movimiento
mesh.rotation.x= Math.PI*.25
mesh.rotation.y= Math.PI*.25


//medida de vectorconsole.log(mesh.position.length()) 
//mesh.position.normalize()
*/


//Axes helpers
const axishelper = new THREE.AxesHelper(2)
scena.add(axishelper)


const sizes = {
  width:800,
  height:600
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 3
scena.add(camera)
 //mira eso sin calcular

//distancia de un vector3console.log(mesh.position.distanceTo(camera.position))


//Rendere
const canvas = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({
  canvas:canvas
})

renderer.setSize(sizes.width,sizes.height)

renderer.render(scena,camera)