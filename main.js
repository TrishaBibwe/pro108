var dog =0;
var cat =0;
var cow =0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kF74x0iK8/',modelReady);

}

function modelReady(){
    classifier.classify(gotResults);

}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;
        
        document.getElementById("detected").innerHTML="Detected Dog-"+dog+", Detected Cat-"+cat+", Detected Cow-"+cow+"";
        document.getElementById("detected").style.color="rgb("+random_number_r +","+random_number_g+","+random_number_b+")";

        document.getElementById("animal_voices").innerHTML="Detected Voice Is Of-"+results[0].label;
        document.getElementById("animal_voices").style.color="rgb("+random_number_r +","+random_number_g+","+random_number_b+")";

        img=document.getElementById("animal_images");

        if (results[0].label=="dog"){
            img.src="dog.jpg";
           dog = dog + 1;
        }
        else if (results[0].label=="cat"){
            img.src="cat.jpg"
           cat = cat + 1;
        }
        else if (results[0].label=="cow"){
            img.src="cow.jpg";
           cow = cow + 1;
        }
        else {
            img.src="http://127.0.0.1:5501/ear.png";
           cow = cow + 1;
        }

    }
}