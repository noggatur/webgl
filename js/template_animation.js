var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
var camera;

var stats = new Stats();

function init() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(new THREE.Color(0xEEEEEE));
  document.getElementById("WebGL_output").appendChild(renderer.domElement);

  // камера
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

  // отслеживание изменения размера окна браузера
  window.addEventListener("resize", function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });

  // статистика
  stats.setMode(0);
  document.getElementById("WebGL_output").appendChild(stats.domElement);

  // прогать тут



  // тест анимации
  // var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  // var cubeMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
  // var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  // cube.position.x = 0;
  // cube.position.y = 0;
  // cube.position.z = 0;
  // camera.position.z = 10;
  // scene.add(cube);

  render();
};

function render() {
  camera.rotation.z += 0.01;

  renderer.render(scene, camera);
  requestAnimationFrame(render);

  // обновление статистики
  stats.update();
}

window.onload = init;