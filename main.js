nose_x=0
nose_y=0
left_wrist_x=0
right_wrist_x=0
difference=0
function setup(){
video=createCapture(VIDEO)
video.size(500,500)
canvas=createCanvas(500,500)
canvas.position(750,200)
video.position(200,200)
posenet=ml5.poseNet(video,modelloaded)
posenet.on("pose",gotposes)
}
function preload(){

}
function draw(){
background("yellowgreen")
fill("greenyellow")
stroke("tomato")
strokeWeight(5)
//Code For Drawing A Square
//square(x,y,side)
square(nose_x,nose_y,difference)
document.getElementById("size").innerHTML="Side of Square = "+difference+"px"
}
function modelloaded(){
    console.log("Model Loaded")
}
function gotposes(results){
    if(results.length >0){
        console.log(results)
        nose_x=results[0].pose.nose.x
        nose_y=results[0].pose.nose.y
        console.log("nose_x= "+nose_x)
        console.log("nose_y= "+nose_y)
        left_wrist_x=results[0].pose.leftWrist.x
        right_wrist_x=results[0].pose.rightWrist.x
        console.log("left_wrist_x= "+left_wrist_x)
        console.log("right_wrist_x= "+right_wrist_x)
        difference=floor(left_wrist_x-right_wrist_x)
        console.log("difference= "+difference)
        
    }
}