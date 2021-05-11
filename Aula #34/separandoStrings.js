// Manipulando Strings e números

//Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do Array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
//   frase 
let phrase = "Eu quero ser rico"
//                   palavra q quero tirar
let myArray = phrase.split(" ")
//  frase com Underscore(_)    juntar(adicionar)
let pharaseWithUnderscore=myArray.join("_")
//                                Maiúsculo
console.log(pharaseWithUnderscore.toLocaleUpperCase())