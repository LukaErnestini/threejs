import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';
import { createCube } from './components/cube.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { createSphere } from './components/sphere.js';

// WARNING! 2 instances of World would overwrite these variables. They're shared between all instances of World.
let camera;
let scene;
let renderer;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const cube = createCube();
    scene.add(cube);

    const cube2 = createCube();
    scene.add(cube2);
    cube2.position.x = -3;

    const sphere = createSphere();
    scene.add(sphere);
    sphere.position.set(5, 0, -8);

    const resizer = new Resizer(container, camera, renderer);
  }

  // 2. Render the scene
  render() {
    renderer.render(scene, camera);
  }
}

export { World };
