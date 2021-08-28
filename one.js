function setup() {
    canvas = createCanvas(350,350)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    posenet = ml5.poseNet(video, modelLoaded); posenet.on('pose', gotPoses)
}
song = ""
function preload() {
    song = loadSound("music.mp3");
}
function Play() {
    song.play()
    song.setVolume(1)
    song.rate()
} 
  var rightWristX = 0; var rightWristY = 0; var leftWristY = 0; var leftWristX = 0;

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);rightWristX = results[0].pose.rightWrist.x; 
        rightWristY = results[0].pose.rightWrist.y;
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;}
}
function modelLoaded() {
    console.log("model is loaded at port 4400")
}   
function draw() {
    image(video,0,0,350,350)
}