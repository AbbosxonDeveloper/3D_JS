import * as THREE from 'three';

const cubeG = new THREE.BoxGeometry(2, 2, 2);
const cubeM = new THREE.MeshBasicMaterial();
export const cube = new THREE.Mesh(cubeG, cubeM);
cube.position.set(-5, 5, 5)