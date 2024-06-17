img=""
status = "";
objects = [];

function preload(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function modelLoaded(){
    console.log("Model Loaded!");
    statusl = true;
}

function getResult(error, results){
    if (error) {
        console.log(error);

    }}