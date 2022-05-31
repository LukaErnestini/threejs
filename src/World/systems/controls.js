import { OrbitControls } from '/vendor/three/examples/jsm/controls/OrbitControls.js';

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.enableZoom = true;

  controls.tick = () => controls.update();

  return controls;
}

export { createControls };
