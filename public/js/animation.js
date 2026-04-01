let scene, camera, renderer, group;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;

    const container = document.getElementById('animation-container');
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    group = new THREE.Group();
    const geometry = new THREE.IcosahedronGeometry(1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00f2ff, wireframe: true });

    for (let i = 0; i < 15; i++) {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set((Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 10);
        group.add(mesh);
    }
    scene.add(group);
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    group.rotation.y += 0.003;
    group.rotation.x += 0.002;
    renderer.render(scene, camera);
}

init();