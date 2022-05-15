let camera, scene, renderer, cube;

function init() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);

	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

	const geometry = new THREE.BoxGeometry(3, 3, 3);

	// const texture = new THREE.TextureLoader().load('textures/sweden.jpg');
	// const material = new THREE.MeshBasicMaterial({ map: texture });

	const materials = [
		new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/headshot.jpg')}),
		new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/code.jpg')}),
		new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/military_satellite.jpg')}),
		new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/neuschwanstein_castle.jpg')}),
		new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/sweden.jpg')}),
		new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('textures/switzerland.jpg')}),
	]

	cube = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
	scene.add(cube);

	camera.position.z = 5;
}

function animate() {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();