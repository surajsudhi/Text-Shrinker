
function setup(){
canvas=createCanvas(500, 450);
video = createCapture(VIDEO);
video.size(580, 500)
canvas.position(590, 150);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', GotResult)
}
function modelLoaded(){
console.log("PoseNet is prepared")    
}
function GotResult(result){
if(result.length > 0){
console.log(result);
}
else{
console.error("error");    
}
}