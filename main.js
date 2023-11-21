function setup(){
    Webcam.set({
    width:250,
    height:250,
    image_format:"png",
    png_quality:90
});
}
            
camera = document.getElementById("camera");
 
Webcam.attach(camera);

function takeSnapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

    });
}

console.log("ml5 version is : ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/aIKn6gfR6/model.json", modelLoaded);



function modelLoaded(){
    console.log("model has loaded");
}

