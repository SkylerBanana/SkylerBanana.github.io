import { pokemons,typeColor } from "./PokemonData.js";

  
let rightanswer = new Audio("Sounds/Video Game Beep - Sound Effect.mp3");
let wronganswer = new Audio("Sounds/Wrong Answer - Sound Effect _HD_.mp3")
rightanswer.volume = .3;
wronganswer.volume = .25;
let score = 0;
let highscore = 0;
let answers = [];
function getRandomPokemon() {
  const randomPokemon = Math.floor(Math.random() * pokemons.length);
  return [pokemons[randomPokemon].Name,pokemons[randomPokemon]["Type 1"]]
}

let randomPokemon1 = getRandomPokemon();
let randomPokemon2 = getRandomPokemon();
let randomPokemon3 = getRandomPokemon();
let currentPokemon = getRandomPokemon();


function BeginPlay(){
  $("#overlay").css("display","none")
  $(".play-button").hide()
  $(".pokemans").attr("src", "Pokemon_imgs/" + currentPokemon[0] + ".webp").show();
      $("#Answer1").text(answers[0][0]).css("background-color",typeColor[answers[0][1]]).show();
      $("#Answer2").text(answers[1][0]).css("background-color",typeColor[answers[1][1]]).show();
      $("#Answer3").text(answers[2][0]).css("background-color",typeColor[answers[2][1]]).show();
      $("#Answer4").text(answers[3][0]).css("background-color",typeColor[answers[3][1]]).show();
      $("#Currentscore").show();
      $("#Highscore").show();


}


function Reset(){
randomPokemon1 = getRandomPokemon();
randomPokemon2 = getRandomPokemon();
randomPokemon3 = getRandomPokemon();
currentPokemon = getRandomPokemon();
answers = [];
answers.push(randomPokemon1,randomPokemon2,randomPokemon3,currentPokemon)
answers = check(answers);
answers = shuffle(answers);
 $(".pokemans").attr("src", "Pokemon_imgs/" + currentPokemon[0] + ".webp");
      $("#Answer1").text(answers[0][0]).css("background-color",typeColor[answers[0][1]]); 
      $("#Answer2").text(answers[1][0]).css("background-color",typeColor[answers[1][1]]);
      $("#Answer3").text(answers[2][0]).css("background-color",typeColor[answers[2][1]]);
      $("#Answer4").text(answers[3][0]).css("background-color",typeColor[answers[3][1]]);
  

}
answers.push(randomPokemon1,randomPokemon2,randomPokemon3,currentPokemon)

answers=check(answers);

answers=shuffle(answers);
console.log(typeColor[answers[0][1]])
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

   // While there remain elements to shuffle.
    while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
//score function
function scorefunction(Answer){
  $(Answer).click(function(){
    if($(this).text() != currentPokemon[0]){
      score=0;
      wronganswer.play()
    }
    else{
      score += 1;
      rightanswer.play();
    }
    if(score > highscore){
      highscore = score
    }
    $("#Currentscore").text("Score:" + score);
    $("#Highscore").text("Highscore:" + highscore);
    Reset();
  });
}

$(document).ready(function(){

      $(".pokemans").attr("src", "Pokemon_imgs/" + currentPokemon[0] + ".webp").hide();
      $("#Answer1").text(answers[0][0]).css("background-color",typeColor[answers[0][1]]).hide();
      $("#Answer2").text(answers[1][0]).css("background-color",typeColor[answers[1][1]]).hide();
      $("#Answer3").text(answers[2][0]).css("background-color",typeColor[answers[2][1]]).hide();
      $("#Answer4").text(answers[3][0]).css("background-color",typeColor[answers[3][1]]).hide();
      $("#Currentscore").hide();
      $("#Highscore").hide();
      $(".play-button").click(BeginPlay);
  
    //Score System
      scorefunction("#Answer1")
      scorefunction("#Answer2")
      scorefunction("#Answer3")
      scorefunction("#Answer4")

});
function check(answers){
 let yes = answers.filter((answer,index) => 
  answers.indexOf(answer) === index
  
 )
 if(yes.length < 4){
  yes.push(getRandomPokemon())
  
  yes = check(yes)
 }
 return yes;
}


    