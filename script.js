function recommendCareer(){

    let interest =
    document.getElementById("interest").value;

    let career = "";

    if(interest === "Data Analysis"){
        career = "Data Analyst";
    }
    else if(interest === "Artificial Intelligence"){
        career = "AI Engineer";
    }
    else if(interest === "Business Strategy"){
        career = "Digital Transformation Consultant";
    }
    else{
        career = "Software Engineer";
    }

    document.getElementById("result").innerHTML =
    "Recommended Career: " + career;
}