function loadRecipes() { 
    alert("import");
    fetch("./recipes.json") 
        .then((res) => { 
        return res.json(); 
    }) 
    .then((data) => console.log(data)); 
}