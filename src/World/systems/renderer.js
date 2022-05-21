import { WebGLRenderer } from 'https://cdn.skypack.dev/three@0.140.2';

function createRenderer() {
  const renderer = new WebGLRenderer();

  return renderer;
}

export { createRenderer };
