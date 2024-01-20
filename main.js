import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { ARButton } from "https://unpkg.com/three@0.126.0/examples/jsm/webxr/ARButton.js";

console.log(ARButton);
const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha:true });
const arbtn = ARButton.createButton(renderer)
console.log(arbtn);
document.body.appendChild(arbtn)
document.body.appendChild(renderer.domElement);
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.xr.enabled = true;

const container=  document.createElement('div'); document.body.appendChild(container);


// let camera= new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.01, 401);

renderer.setPixelRatio(window.devicePixelRatio); renderer.setSize(window.innerWidth, window.innerHeight);

// This next line is important to to enable the renderer for WebXR container.appendChild(renderer.domElement);





// const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;




var mesh = new THREE.Mesh(geometry, material)
mesh.position.set(0 ,0 , -0.5)
console.log(mesh);
scene.add(mesh)
// const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
// groundGeometry.rotateX(-Math.PI / 2);
// const groundMaterial = new THREE.MeshStandardMaterial({
//   color: 'green',
//   side: THREE.DoubleSide
// });
// const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
// groundMesh.castShadow = false;
// groundMesh.receiveShadow = true;
// // scene.add(groundMesh);

// const spotLight = new THREE.SpotLight(0xffffff,  3, 100, 0.22, 1);
// spotLight.position.set(0, 55, 10);
// spotLight.castShadow = true;
// spotLight.shadow.bias = -0.0001;
// // scene.add(spotLight);

// const loader = new GLTFLoader().setPath('public/');
// loader.load('scene.gltf', (gltf) => {
//   const mesh = gltf.scene;

//   mesh.traverse((child) => {
//     if (child.isMesh) {
//       child.castShadow = true;
//       child.receiveShadow = true;
//     }
//   });

//   mesh.position.set(0, 0.05, -7);
//   scene.add(mesh);

//   document.getElementById('progress-container').style.display = 'none';
// }, ( xhr ) => {
//   document.getElementById('progress').innerHTML = `LOADING ${Math.max(xhr.loaded / xhr.total, 1) * 100}/100`;
// },);

// const cube = new THREE.Mesh( groundGeometry, groundMaterial );
// scene.add( cube );

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  requestAnimationFrame(animate);
  // controls.update();
  renderer.render(scene, camera);
}

animate();