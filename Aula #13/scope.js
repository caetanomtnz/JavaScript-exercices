//const e let sao locais e so funcionam no escopo onde foi criada

const y=1


{

    const y= 0
    console.log('existe y antes do bloco?', y)
}
console.log('existe y antes do bloco?', y)



const y=0


consol.log('existe y antes do aa?', y)