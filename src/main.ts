import * as THREE from 'three';

// threejs默认右手坐标系，z轴指向屏幕外

// camera默认方向是负轴
// fov 角度
// aspect 宽高比
// near 近裁剪面
// far 远裁剪面
const camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);


// 添加cube
const cube = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(cube, material);
scene.add(mesh);

camera.position.z = 1

renderer.render(scene, camera);


document.getElementById('app')?.appendChild(renderer.domElement);
