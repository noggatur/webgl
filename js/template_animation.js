var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
var camera;
var cube;
var i = 0;

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


  var light = new THREE.AmbientLight(0xffffff);
  var light_1 = new THREE.PointLight(0xffffff, 1, 1000);
  light_1.position.x = 0;
  light_1.position.y = 0;
  light_1.position.z = 0;

  scene.add(light);
  scene.add(light_1);
  // прогать тут



  // тест анимации
  var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000, ambient: 0xffffff});
  cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.x = 0;
  cube.position.y = 0;
  cube.position.z = 0;
  camera.position.z = 10;
  scene.add(cube);

  render();
};

function render() {
  // camera.rotation.z += 0.01;
  i++;
  cube.position.x = Math.cos(i * 0.05)*2;
  cube.position.y = Math.sin(i * 0.05)/2;
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  cube.rotation.y += 0.03;
  cube.rotation.z += 0.03;

  renderer.render(scene, camera);
  requestAnimationFrame(render);

  // обновление статистики
  stats.update();
}

window.onload = init;