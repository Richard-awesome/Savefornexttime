import * as THREE from "three";
import {OrbitControls} from "jsm/controls/OrbitControls.js"
const w = window.innerWidth
const h = window.innerHeight
const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(w, h);

document.body.appendChild(renderer. domElement);

const fov = 75;
const aspect = w/h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;
const scene = new THREE.Scene();

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true;
controls.enableDampingFactor  = 0.03



const geo = new THREE.TorusKnotGeometry( 10, 3, 100, 16 )
const mat = new THREE.MeshStandardMaterial({
    color: 'orange',
    flatShading:true
})
const mesh = new THREE.Mesh(geo, mat)
scene.add(mesh)

const wireMat = new THREE.MeshBasicMaterial({
    color: 'pink',
    wireframe: true
})
const WireMesh = new THREE.Mesh(geo, wireMat)
mesh.add(WireMesh);

const HemiLight = new THREE.HemisphereLight('pink', 'purple')
scene.add(HemiLight)
function animate(t){
    requestAnimationFrame(animate);
    //mesh.rotation.y  = t * 0.001
    renderer.render(scene, camera)
    controls.update
};
animate()