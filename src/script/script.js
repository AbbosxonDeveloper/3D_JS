import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { ambientLight, directionalLight, spotLight } from './utils/light.js';
import { gridHelper } from './materials/grid.js';
import { sphere } from './materials/sphere.js';
import { plane } from './materials/plane.js';
import { cube } from './materials/cubebg.js';
import * as THREE from 'three';
import * as dat from 'dat.gui'

import cosmos from '../img/cosmos.jpeg'
import space from '../img/space.png'

const renderer = new THREE.WebGLRenderer();

renderer.shadowMap.enabled = true;

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const orbit = new OrbitControls(camera, renderer.domElement);

const textureLoader = new THREE.TextureLoader();
scene.background = textureLoader.load(cosmos)

const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

camera.position.set(-10, 10, 10);
orbit.update();

const gui = new dat.GUI();
const options = {
    sphereColor: '#ffea00',
    wireframe: false,
    speed: 0.01,
    angle: 0.2,
    penumbra: 0,
    intensity: 1
}

gui.addColor(options, 'sphereColor').onChange(function (e) {
    sphere.material.color.set(e)
})
gui.add(options, 'wireframe').onChange((e) => sphere.material.wireframe = e)

gui.add(options, 'speed', 0, 0.1);

const boxGeometry = new THREE.BoxGeometry(4, 5, 4);
const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x00F000 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.set(6, 4, 2)

const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);

const dLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);

cube.material.map = textureLoader.load(space)

const testG = new THREE.SphereGeometry(5);
const testM = new THREE.MeshBasicMaterial({color: "gray"})
const testCube = new THREE.Mesh(testG, testM)
testCube.position.set(5,5,10)

scene.add(testCube)
scene.add(box, plane, gridHelper, sphere, cube, ambientLight, directionalLight, dLightHelper, dLightShadowHelper, spotLight)
spotLight.position.set(-100, 100, 30);
spotLight.castShadow = true;
spotLight.angle = 0.2;

let step = 0;
function animation(time) {
    // box.rotation.x = time / 1000;
    // box.rotation.y = time / 1000;

    step += options.speed;
    sphere.position.y = 10 * Math.abs(Math.sin(step))

    renderer.render(scene, camera)
}

renderer.setAnimationLoop(animation);