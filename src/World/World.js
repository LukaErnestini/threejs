import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';
import { createCube } from './components/cube.js';
import { createSphere } from './components/sphere.js';
import { createLights } from './components/lights.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

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

    const cube2 = createCube();
    cube2.position.x = -3;

    const sphere = createSphere();
    sphere.position.set(5, 0, -8);

    const light = createLights();
    light.position.set(0, 5, 15);

    scene.add(cube, cube2, sphere, light);

    const resizer = new Resizer(container, camera, renderer);
    resizer.onResize = () => {
      this.render();
    };
  }

  // 2. Render the scene
  render() {
    renderer.render(scene, camera);
  }
}

export { World };
