import {
  SphereGeometry,
  Mesh,
  MeshStandardMaterial,
} from 'https://cdn.skypack.dev/three@0.140.2';

function createSphere() {
  // create a geometry
  const geometry = new SphereGeometry(2, 8, 8);

  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: 0xffff00 });

  // create a Mesh containing the geometry and material
  const sphere = new Mesh(geometry, material);

  return sphere;
}

export { createSphere };
