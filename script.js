/* .js files add interaction to your website */
var afghanFactList = [ //afghan//
  "Over 24.4 million out of 41.7 million people in Afghanistan are in need of humanitarian aid",/*0*/
  "Extreme weather and climate change are worsening the condition of drought and hunger in Afghanistan",/*1*/
  "Starvation within Afghanistan could kill more people now then it has in the past 20 years"/*2*/
];


var fact = document.getElementById("fact");
var afghan = document.getElementById("afghan");
var count = 0;

if (afghan){
  afghan.addEventListener("click", afghanDisplayFact);
}

function afghanDisplayFact() {
  fact.innerHTML = afghanFactList[count];
  count++;
  if (count == afghanFactList.length){
    count = 0;
  }
}

var syriaFactList = [ //syria//
  "60% of Syrians are suffering of hunger which about 12 million people",/*0*/
  "Levels of food scarcity and increased rates of food prices in Syria are at an all time high",/*1*/
  "The Syrian Civil War has been going on for 11 years now"/*2*/
];


var facty = document.getElementById("facty");
var syria = document.getElementById("syria");
var count = 0;

if (syria){
  syria.addEventListener("click", syriaDisplayFact);
}

function syriaDisplayFact() {
  facty.innerHTML = syriaFactList[count];
  count++;
  if (count == syriaFactList.length){
    count = 0;
  }
}
