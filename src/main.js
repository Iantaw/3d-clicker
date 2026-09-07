console.log(">>> main.js EXECUTED <<<");

import "./style.css"

import * as THREE from "three"

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const container = document.getElementById('canvas-container');
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

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

// Cookie Counter
let counter = 0;

function update_counter() {
  counter += 1;
  console.log("+1, counter =", counter);

  const clicksCountText = document.getElementById("clicks-count");

  if (clicksCountText) {
    clicksCountText.setAttribute("count-text", `${counter} Clicks`);
  }
}

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    capsule.rotation.x += 0.01;
    capsule.rotation.y += 0.01;

    renderer.render(scene, camera);
}

document.getElementById("clicker").addEventListener("click", () => {
    update_counter();
});

animate();