import * as TREE from 'three'

export const ambientLight = new TREE.AmbientLight(0x333444);
export const directionalLight = new TREE.DirectionalLight(0xFFFFFF, 0.8);
directionalLight.position.set(-30, 50, 0);
directionalLight.castShadow = true;
directionalLight.shadow.camera.bottom = -12;

export const spotLight = new TREE.SpotLight(0xFFDFFF)