nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
difference=0;
function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,150); 
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modalLoaded);
    poseNet.on('pose',gotPoses)
}
function draw(){
    background('#FFD700');
    fill('gray');
    stroke('black');
    square(nosex,nosey,difference);
    document.getElementById("square_side").innerHTML="width and height of a square will be= "+difference+"px";
}
function modalLoaded(){
    console.log("poseNet is initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex= "+nosex+"nosey= "+nosey);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=leftwristx-rightwristx;
        console.log("leftwristx= "+leftwristx+"rightwristx= "+rightwristx+"difference= "+difference);
    }
}