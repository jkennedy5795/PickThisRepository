const colorApiUrl = 'http://www.colr.org/json/color/random'
let colorData;
let nameInput;
let robotImg = document.getElementById('frame')
getCatName = function(){
const nameInput = document.getElementById('inputs').value;
const name = document.getElementById('nameOutput');
name.innerText = (nameInput);
console.log(nameInput);
    
let catFact = function(){   
const fact = document.getElementById('factOutput');
fact.innerText = ('"meow" - ' + nameInput)  
}
        
getCat = function(){
robotImg.setAttribute('src',`https://robohash.org/${nameInput}.png?set=set4`)
}
getCat();
getCatColor();
catFact();   
}

let getCatColor = async function(){
try {
    const colorResult = await fetch(colorApiUrl);
    colorData = await colorResult.json();
    console.log(colorData.colors[0].tags[0].name)
    updateCatColor();
}   catch (err){
    console.log('something went wrong. :(')
    console.log(err);
} 
}
        
updateCatColor = function() {
    const color = document.getElementById('colorOutput');
    color.innerText = (colorData.colors[0].tags[0].name + " gray");
}
document.getElementById('catButton').addEventListener('click',getCatName);