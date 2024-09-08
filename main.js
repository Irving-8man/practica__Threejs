import * as THREE from "three"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 2);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enablePan = false;
controls.minDistance = 2;
controls.maxDistance = 10;

let model;
const loader = new GLTFLoader();

loader.load('./models/cuencaMaya2.glb', (gltf) => {
    model = gltf.scene;
    console.log('Model loaded:', model);
    scene.add(model);

    model.traverse((child) => {
        if (child.isMesh) {
            console.log('Applying standard material to mesh:', child);
            
        }
    });
});

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(2, 2, 5);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const rotationSpeed = 0.28; // radians per second
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    const delta = clock.getDelta();
    if (model) {
        model.rotation.y += rotationSpeed * delta;
    }
    renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

/** 
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


///AQUI si sirve
*/





/*

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



/** 
 * 
 * AQUI si sirve
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
*/