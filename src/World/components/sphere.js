import {
  SphereGeometry,
  Mesh,
  MeshBasicMaterial,
} from 'https://cdn.skypack.dev/three@0.140.2';

function createSphere() {
  // create a geometry
  const geometry = new SphereGeometry(2);

  // create a default (white) Basic material
  const material = new MeshBasicMaterial({ color: 0xffff00 });

  // create a Mesh containing the geometry and material
  const sphere = new Mesh(geometry, material);

  return sphere;
}

export { createSphere };
