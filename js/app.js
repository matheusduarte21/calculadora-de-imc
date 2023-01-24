 const peso = document.getElementById('valor2').value
 const altura = document.getElementById('valor1').value
 const butao = document.getElementById('resultado')


 function resultado(){ 
    const peso =  document.getElementById('valor2').value
    const altura= document.getElementById('valor1').value
   

    const imc = (peso/(altura*altura)).toFixed(2)
    document.getElementById('resultado').value = imc
}

