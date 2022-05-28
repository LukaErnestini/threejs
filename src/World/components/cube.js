import {
  BoxBufferGeometry,
  Mesh,
  MeshStandardMaterial,
  MathUtils,
} from 'https://cdn.skypack.dev/three@0.140.2';

function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);

  // a physically correct "standard" material
  const material = new MeshStandardMaterial({ color: 'orchid' });

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.7);

  const radiansPerSecond = MathUtils.degToRad(6001);

  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    cube.rotation.z += radiansPerSecond * delta * 15;
    // cube.rotation.x += radiansPerSecond * delta;
    // cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
