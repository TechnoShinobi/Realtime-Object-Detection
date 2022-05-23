
status = ""
objects = []

function preload(){




}



function setup(){
canvas = createCanvas(380,380);
canvas.center();
video = createCapture(VIDEO)
video.size(380,380)
video.hide()
objectdetector = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML = "Status = Loading and Detecting Objects - This WILL take a FEW SECONDS please wait PATIENTLY.";
}

function modelLoaded(){
console.log("Model Loaded!!:D");
status = true;

}

function gotResult(error,results){
if (error) {
console.log("GO TO THE CODE AND FIX THE DAMN ERROR!!!!!");
} else {
console.log(results);

objects = results;
}



}


function draw(){
image(video,0,0,380,380);
if (status!= "") {
objectdetector.detect(video,gotResult);
for (i = 1; i < objects.length; i++) {
    r = random(255);
    g = random(255);
    b = random(255);

    fill(r,g,b);
    
    percent = floor(objects[i].confidence * 100)
    text(objects[i].label + " " + percent + "%",objects[i].x-15,objects[i].y-15);
    
    stroke(r,g,b);

    noFill();
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    document.getElementById("status").innerHTML = "Status = Object Detected";
    document.getElementById("nob").innerHTML = "Number Of Objects Detected Are... = "+objects.length;
    
}
}


}




