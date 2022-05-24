function startClassification()
{
navigator.mediaDevices.getUserMedia({ audio: true, video:false});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/41xMydX2Z/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
var dog= 0;
var lion= 0;

function gotResults(error, results)
{
    if (error)
        {
            console.error(error);
        }
    else
    {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.gotElementById("result_label").innerHTML = 'detected voice is of - ' + results[0].label;
        document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected lion - '+ lion;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img= document.getElementById('animal_image');

        if (results[0].label == "barking")
        {
            img.src= "dog_img.png";
            dog= dog + 1;
        }
        else if (results[0].label= "roaring")
        {
            img.src= "Tiger_img.jpg";
            lion= lion + 1;
        }
        else
        {
            img.src= "default_img.jpg"
        }
    }
}

