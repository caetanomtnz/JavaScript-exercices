//function scope

let subject='create video'
//    cria um pensamento
function createThink(subject){
//              esse(subject)nesse escopo tem          
//              esse significado, se tirar ele vai busca outro

    subject='study'
    return subject
}

console.log(subject)
console.log(createThink(subject))