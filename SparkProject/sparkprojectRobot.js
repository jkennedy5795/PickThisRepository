
const colorApiUrl = 'http://www.colr.org/json/color/random'
const factApiUrl = 'http://numbersapi.com/random?json'
let colorData;
let factData;
let robotImg = document.getElementById('frame')


getRobot = function(){
robotImg.setAttribute('src',`https://robohash.org/${nameInput}.png`)
}

getRobotName = function(){
    const nameInput = document.getElementById('inputs').value;
    const name = document.getElementById('nameOutput');
    name.innerText = (nameInput +'_Bot');
    console.log(nameInput +'_Bot');
    
    getRobot = function(){
    robotImg.setAttribute('src',`https://robohash.org/${nameInput}.png?`)
    }
    getRobot();
    getColor();
    getFact();

}

let getColor = async function(){
try {
    const colorResult = await fetch(colorApiUrl);
    colorData = await colorResult.json();

    console.log(colorData.colors[0].hex);
    console.log(colorData.colors[0].tags[0].name)
    updateColor();
}   catch (err){
    console.log('something went wrong. :(')
    console.log(err);
} 
}

updateColor = function() {
    const color = document.getElementById('colorOutput');
    color.innerText = ("#" + colorData.colors[0].hex);
}

let getFact = async function(){
try{
    const factResult = await fetch(factApiUrl);
    factData = await factResult.json();
    console.log(factData);
} catch (err){
    console.log('something went wrong. :(');
    console.log(err);
} 
updateFact ();
}

let updateFact = function(){    
    const fact = document.getElementById('factOutput');
    fact.innerText = ("'" + factData.text +"'")    
}

document.getElementById('robotButton').addEventListener('click',getRobotName);






