import * as THREE from 'three'

const sphereGeometry = new THREE.SphereGeometry(4);
const sphereMaterial = new THREE.MeshStandardMaterial({
    color: 0x0000FF,
});
export const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(-15, 30, 0);
sphere.castShadow = true;