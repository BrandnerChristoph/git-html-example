function loadRecipes() { 
    alert("import");
    fetch("./recipes.json") 
        .then((res) => { 
        return res.json(); 
    }) 
    .then((data) => console.log(data)); 

    document.getElementById("suggestTxt").innerHTML ="";
    document.getElementById("suggestTxt").innerHTML = "<p>Name: " + data[20].Name + "</p>";
}