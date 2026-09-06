import "./style.css"

import * as THREE from "three"

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer  = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

camera.position.z = 5;

const cube_geometry = new THREE.BoxGeometry();

const cube_material = new THREE.MeshStandardMaterial({ color: 0xdd1d0e });

const cube = new THREE.Mesh(cube_geometry, cube_material);
scene.add(cube);

const capsule_geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8, 1 );
const capsule_material = new THREE.MeshBasicMaterial( {color: 0x00ff0});
const capsule = new THREE.Mesh(capsule_geometry, capsule_material);
scene.add(capsule);
capsule.position.set(2, 0, 0);

scene.add(new THREE.AmbientLight(0xffffff, 0.5));

scene.add(new THREE.DirectionalLight(0xffffff, 1));

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    capsule.rotation.x += 0.01;
    capsule.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate()