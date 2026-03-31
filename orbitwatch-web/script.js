const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("earth").appendChild(renderer.domElement);

// Earth
const geometry = new THREE.SphereGeometry(5, 64, 64);
const material = new THREE.MeshBasicMaterial({color: 0x0077ff, wireframe: true});
const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

// Satellite
const satGeo = new THREE.SphereGeometry(0.2, 16, 16);
const satMat = new THREE.MeshBasicMaterial({color: 0xffffff});
const satellite = new THREE.Mesh(satGeo, satMat);
satellite.position.set(8, 0, 0);
scene.add(satellite);

camera.position.z = 12;

// Animation
function animate() {
    requestAnimationFrame(animate);

    earth.rotation.y += 0.002;

    satellite.position.x = 8 * Math.cos(Date.now() * 0.001);
    satellite.position.z = 8 * Math.sin(Date.now() * 0.001);

    renderer.render(scene, camera);
}

animate();