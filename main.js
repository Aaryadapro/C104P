function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/bpfUutcq0/model.json", modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;
        
        document.getElementById("result_label").innerHTML = "detected voice is of -"+results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy -"+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+",)";


        if(results[0].label == "Dog")
        {
            img1.src = "pic2.jpg";
        }
        else if(results[0].label == "Cat")
        {
            img1.src = "pic1.jpg";   
        }
        else if(results[0].label == "Bird")
        {
            img1.src = "pic3.jpg";
        }
        else 
        {
            img1.src = "pic4.jpg"
        }
    }
}