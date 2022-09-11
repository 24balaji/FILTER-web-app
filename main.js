
function preload(){
    clown_nose = loadImage('https://i.postimg.cc/637FhbyM/mustach-removebg-preview.png')
}

noseX =0;
noseY=0;

function setup(){
canvas = createCanvas(350 , 300);
canvas.center();
video = createCapture(VIDEO);
video.size(350,300);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw() {
    image(video,0,0,350,300);
    image(clown_nose, noseX-25,noseY,50,45)
}

function take_snapshot() {
    save('my Filtered Image.png');
}

function modelLoaded() {
    console.log('Posenet Is initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
       console.log(results);
       noseX = results[0].pose.nose.x;
       noseY = results[0].pose.nose.y;
      console.log("nose x = " + results[0].pose.nose.x);
      console.log("nose y = " + results[0].pose.nose.y);
    }
}

function Lipstick() {
    window.location = "index2.html"
}










