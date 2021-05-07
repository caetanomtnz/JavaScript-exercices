//function hoisting

sayMyName()

  function sayMyName(){
      console.log('caetano')
  }

  //uma função criada desta forma sofre o hoisting(como se o JavaScript colocasse ela em cima do sayMyName)