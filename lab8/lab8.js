//jshint ex

let wordLst=["Defualt", "Value"];

/**
* draw a graph based on the String array;
* input: String array;
* output: none;
*/
let generateGraph = function(wordLst){
    
    let canvas = document.getElementById("chart");
    let ctx=canvas.getContext("2d");
    let vowels =["A", "E", "I", "O", "U"];
    ctx.clearRect(0,0,400,400);
    
    let heightUnit = 20;
    let height = 11;
    let widthUnit = 20;
    let width = 11;
    
    ctx.save();
    ctx.translate(50,350);
    
    // draw x/y axis
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0, -1*height*heightUnit);
    ctx.moveTo(0,0);
    ctx.lineTo(width*widthUnit ,0);
    ctx.stroke();
    
    // draw values y axis
    for (let index = 0; index < height; index ++){
        ctx.fillText(index,-15,-1*index*heightUnit);
        
        ctx.beginPath();
        ctx.arc(0, -1*index*heightUnit, 1.5, 0, 2*Math.PI);
        ctx.fill();
    }
    
    // draw values x axis
    for (let index = 0; index < width; index ++){
        ctx.beginPath();
        ctx.arc(index*widthUnit, 0, 1.5, 0, 2*Math.PI);
        ctx.fill();
    }
    
    // draw the vowels
    for (let index=0; index < vowels.length; index++){
        ctx.beginPath();
        ctx.fillText(vowels[index], (1.25+2*index)*widthUnit, 15);
    }
    
    //draw bars
    ctx.fillStyle="blue";
    
    for (let index=0; index < vowels.length; index++){
        let barHeight = letterInWordWLst(vowels[index], wordLst)*heightUnit;
        ctx.fillRect((1+2*index)*widthUnit,-1*barHeight,widthUnit,barHeight);
    }
    
    ctx.restore();

};

/**
* event handler: to add word to the wordLst;
* input: String array;
* output: none;
*/
let addWord = function (wordLst) {
    let input = document.getElementById("input_text");
    let word=input.value;
    
    if (validInput(word)){
        wordLst.push(word);
        updateWordLst();
    }else{
        alert("Invalid input!, try again!"+"\nAvoid spaces, numbers, symbols and punctuations!");
    }
       
};

/**
* check if a string contains non-characters;
* input: String;
* output: true/false;
*/
let validInput = function(word){
    let flag = true;
    for (let index =0; index< word.length; index++){
         if (word.charAt(index)<"A"|| word.charAt(index)>"z"){
            flag = false;
            console.log("the character is:" + word.charAt(index));
        }
    }
    return flag;
};


/**
* event handler: to rease the last word from the wordLst;
* input: String array;
* output: none;
*/
let eraseLastWord = function(wordLst){
    wordLst.pop();
    updateWordLst();
};

/**
* event handler: to rease all the words from the wordLst;
* input: String array;
* output: none;
*/
let eraseAllWords = function(){
    wordLst=[];
    console.log("erased list is:"+wordLst);
    updateWordLst();
};


/**
* change a String list to a string of words devided by comma;
* input: String array;
* output: String;
*/
let combineStringList = function(wordLst){
    let output = "";
    for (let index = 0; index< wordLst.length;index++){
        output += wordLst[index];
        if (index<wordLst.length-1)
            output += ", ";
       
    }
    return output;
};

/**
* count how many letters in a word;
* input: letter String, and a word String;
* output: integer;
*/
let letterInWords = function (letter, word) {
    let count = 0;
    for (let index =0; index < word.length; index++){
        if(letter == word.charAt(index).toUpperCase())
            count ++;
    }
    return count;
};

/**
* count how many letters in a word array;
* input: letter String, and a word array;
* output: integer;
*/
let letterInWordWLst = function (letter, wordLst) {
    let count = 0;
    for (let index = 0; index < wordLst.length; index++){
        count+= letterInWords(letter, wordLst[index]);
    }
    return count
};


/**
* print the word list on html page;
* input: None;
* output: none;
*/
let updateWordLst =  function (){
    let content = document.getElementById("words");
    content.innerHTML = combineStringList(wordLst);
    console.log("wordLst is:" + wordLst);
    
};

//console.log(letterInWords("i", "absa"));
//console.log(letterInWordWLst("i", wordLst));
//console.log(combineStringList(wordLst));
//console.log(wordLst);

