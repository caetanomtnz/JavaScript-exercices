//callback function = função chamar de volta

function sayMyName(name){
    console.log('Antes de executar a função callback')

// é como se esse(***) viesse pra cá
name()

console.log('Depois de executar a função callback')
}

//   (***)
sayMyName(
    ()=>{
        console.log('Estou em uma callback')
    }
)