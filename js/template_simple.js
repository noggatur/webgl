var scene = new THREE.Scene();
var renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer(); // Для отображения сцены в тех браузерах, в которых нет поддержки WebGL
var camera;

var stats = new Stats();

function init() {
  renderer.setClearColor(new THREE.Color(0xEEEEEE));
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("WebGL_output").appendChild(renderer.domElement);

  // камера
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

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



  render();
};

function render() {
  renderer.render(scene, camera);

  // обновление статистики
  stats.update();
}

window.onload = init;