resultsGotResults = [];
Status = "";
img = "";

function preload() {
    img = loadImage("books.png");
}

function back() {
    window.location = "index.html";
}

function setup() {
    canvas = createCanvas(380 , 380);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded");
    Status = true;
}

function gotResults(error , results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
    }
}

function draw() {
    image(img , 0 , 0 , 380 , 380);

    if(Status != "") {
        for(i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Objects detected";
            fill(255 , 255 , 255);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%" , objects[i].x + 15 , objects[i].y + 15);
            noFill();
            stroke(255 , 255 , 255);
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
        }
    }
}