function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}

body
{
  background-size: cover;	
}
function preload()
{
   song = loadSound("music.mp3");
   song = loadSound("music2.mp3"); 
}
function draw()
{
    image(video, 0, 0, 600, 500);
    fill("red");
    stroke("blue");
    if(scoreleftWrist > 0.2)
    {

    circle(leftWristx,leftWristy,20);
    inNumberleftwristy = Number(leftWristy);
    removeDecimals = floor(inNumberleftwristy);
    volume = removeDecimals/500;
    document.getElementById("volume").innerHTML = "volume = " + volume;
    song.setVolume(volume);
    }
}