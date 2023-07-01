BABYLON.SceneLoader.ImportMeshAsync(model_name, folder_path, file_name, scene);


BABYLON.SceneLoader.ImportMeshAsync("", "/relative path/", "myFile"); //Empty string loads all meshes
BABYLON.SceneLoader.ImportMeshAsync("model1", "/relative path/", "myFile"); //Name of the model loads one model
BABYLON.SceneLoader.ImportMeshAsync(["model1", "model2"], "/relative path/", "myFile"); //Array of model names

BABYLON.SceneLoader.ImportMeshAsync("", "/relative path/", "myFile").then((result) => {
  result.meshes[1].position.x = 20;
  const myMesh1 = scene.getMeshByName("myMesh_1");
  myMesh1.rotation.y = Math.PI / 2;
});

var createScene = function () {
  var scene = new BABYLON.Scene(engine);

  // Add a camera to the scene and attach it to the canvas
  // Add a lights to the scene

  //Your Code

  return scene;
};


