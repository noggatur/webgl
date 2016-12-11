function init() {
  var scene = new THREE.Scene();

  var renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer(); // Для отображения сцены в тех браузерах, в которых нет поддержки WebGL
  renderer.setClearColor(new THREE.Color(0xEEEEEE));
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("WebGL_output").appendChild(renderer.domElement);

  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

  // прогать тут

  renderer.render(scene, camera);
};

window.onload = init;