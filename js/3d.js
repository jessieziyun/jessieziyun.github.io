import * as THREE from '/js/three.module.js';
import { MarchingCubes } from '/js/MarchingCubes.js';

// SCENE SETUP
let container;
let camera, scene, renderer;

// LANDING PAGE
const blobSpeed = 0.75;
const numBlobs = 10;
const clock = new THREE.Clock();
let time = 0;

// MARCHING CUBES
const resolution = 64;
let effect;

// RUN CODE
main();

// LANDING PAGE
function main() {
    startThree();
    renderLoadingGraphic();
}

function startThree() {
    container = document.getElementById('scene');
    scene = new THREE.Scene();

    createCamera();
    createLights();
    createRenderer();
    createMetaballs();
    window.addEventListener('resize', onWindowResize, false);
}

// RENDER LOADING SCREEN GRAPHIC
function renderLoadingGraphic() {
    requestAnimationFrame(renderLoadingGraphic);
    const delta = clock.getDelta();
    time += delta * blobSpeed * 0.5;
    effect.reset();
    const subtract = 12;
    const strength = 1.2 / ((Math.sqrt(numBlobs) - 1) / 4 + 1);
    for (let i = 0; i < numBlobs; i++) {
        const ballx = Math.sin(i + 1.26 * time * (1.03 + 0.5 * Math.cos(0.21 * i))) * 0.27 + 0.5;
        const bally = Math.abs(Math.cos(i + 1.12 * time * Math.cos(1.22 + 0.1424 * i))) * 0.27 + 0.5;
        const ballz = Math.cos(i + 1.32 * time * 0.1 * Math.sin((0.92 + 0.53 * i))) * 0.27 + 0.5;
        effect.addBall(ballx, bally, 0, strength, subtract);
    }
    renderer.render(scene, camera);
}

// CREATE MARCHING CUBES METABALLS AND ADD TO SCENE
function createMetaballs() {
    const material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        // specular: 0xffffff,
        // shininess: 2,
        vertexColors: true
    });
    effect = new MarchingCubes(resolution, material, false, false);
    effect.position.set(0, 0, 0);
    effect.scale.set(700, 700, 700);
    effect.isolation = 150;
    scene.add(effect);
}

// CREATE CAMERA
function createCamera() {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 250, 200);
}

// CREATE LIGHTS
function createLights() {
    const ambientLight = new THREE.AmbientLight(0xc9ebff, 20);
    scene.add(ambientLight);

    const light = new THREE.DirectionalLight(0xffd9ef, 0.5);
    light.position.set(1, 1, 0);
    scene.add(light);
}

// CREATE RENDERER
function createRenderer() {
    renderer = new THREE.WebGLRenderer({ alpha: true });
                renderer.setClearColor(0xffffff, 0);
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
}

// UPDATE IF WINDOW RESIZED
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}