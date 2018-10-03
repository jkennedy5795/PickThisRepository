const colorApiUrl = 'http://www.colr.org/json/color/random'
const chuckApiUrl = 'http://api.icndb.com/jokes/random?exclude=[explicit]'
let colorData;
let robotImg = document.getElementById('frame')
getMonsterName = function(){
const nameInput = document.getElementById('inputs').value;
const name = document.getElementById('nameOutput');
name.innerText = (nameInput);
console.log(nameInput);
    
getMonster = function(){
robotImg.setAttribute('src',`https://robohash.org/${nameInput}.png?set=set2`)
}
getMonster();
getMonsterColor();
getChuck();
}
let getMonsterColor = async function(){
try {
    const colorResult = await fetch(colorApiUrl);
    colorData = await colorResult.json();
    console.log(colorData);
    console.log(colorData.colors[0].tags[0].name)
    updateMonsterColor();
}catch (err){
    console.log('something went wrong. :(')
    console.log(err);
} 
}
        
updateMonsterColor = function() {
    const color = document.getElementById('colorOutput');
    color.innerText = (colorData.colors[0].tags[0].name);
}

let getChuck = async function(){
try{
    const chuckResult = await fetch(chuckApiUrl);
    chuckData = await chuckResult.json();
    console.log(chuckData.value.joke);
} catch (err){
    console.log('something went wrong. :(');
    console.log(err);
} 
updateChuck ();
}
    
let updateChuck = function(){    
    const fact = document.getElementById('factOutput');
    fact.innerText = (chuckData.value.joke)    
}
    
       
document.getElementById('monsterButton').addEventListener('click',getMonsterName);