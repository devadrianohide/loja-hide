function start(){
    var valorrecebido = document.getElementById('valorproduto')
    var valorrecebido2 = Number(valorrecebido.value)

    
    
    var resultado1 = ((valorrecebido2*2.80)/100)+valorrecebido2
    var resultado2 = ((valorrecebido2*4.19)/100)+valorrecebido2
    var resultado3 = ((valorrecebido2*4.83)/100)+valorrecebido2
    var resultado4 = ((valorrecebido2*5.46)/100)+valorrecebido2
    var resultado5 = ((valorrecebido2*6.11)/100)+valorrecebido2
    var resultado6 = ((valorrecebido2*6.76)/100)+valorrecebido2
    var resultado7 = ((valorrecebido2*7.40)/100)+valorrecebido2
    var resultado8 = ((valorrecebido2*8.04)/100)+valorrecebido2
    var resultado9 = ((valorrecebido2*8.68)/100)+valorrecebido2
    var resultado10 = ((valorrecebido2*9.32)/100)+valorrecebido2
    var resultado11 = ((valorrecebido2*9.96)/100)+valorrecebido2
    var resultado12 = ((valorrecebido2*10.59)/100)+valorrecebido2


    var resultado22 = (valorrecebido2/2).toFixed(2)
    var resultado33 = (valorrecebido2/3).toFixed(2)
    var parcelado2 = (resultado2/2).toFixed(2)
    var parcelado3 = (resultado3/3).toFixed(2)
    var parcelado4 = (resultado4/4).toFixed(2)
    var parcelado5 = (resultado5/5).toFixed(2)
    var parcelado6 = (resultado6/6).toFixed(2)
    var parcelado7 = (resultado7/7).toFixed(2)
    var parcelado8 = (resultado8/8).toFixed(2)
    var parcelado9 = (resultado9/9).toFixed(2)
    var parcelado10 = (resultado10/10).toFixed(2)
    var parcelado11 = (resultado11/11).toFixed(2)
    var parcelado12 = (resultado12/12).toFixed(2)

    
    

    umax.innerHTML = `<p>1x - Total de: R$ ${valorrecebido2} - Sem juros!</p>`
    doisx.innerHTML = `<p>2x - Total de: R$ ${valorrecebido2}<br>Ficando 2x de: R$ ${resultado22} sem juros!</p>`
    tresx.innerHTML = `<p>3x - Total de: R$ ${valorrecebido2}<br>Ficando 3x de: R$ ${resultado33} sem juros!</p>`
    quatrox.innerHTML = `<p>4x - Total de: R$ ${resultado4}<br>Ficando 4x de: R$ ${parcelado4}</p>`
    cincox.innerHTML = `<p>5x - Total de: R$ ${resultado5}<br>Ficando 5x de: R$ ${parcelado5}</p>`
    seisx.innerHTML = `<p>6x - Total de: R$ ${resultado6}<br>Ficando 6x de: R$ ${parcelado6}</p>`
    setex.innerHTML = `<p>7x - Total de: R$ ${resultado7}<br>Ficando 7x de: R$ ${parcelado7}</p>`
    oitox.innerHTML = `<p>8x - Total de: R$ ${resultado8}<br>Ficando 8x de: R$ ${parcelado8}</p>`
    novex.innerHTML = `<p>9x - Total de: R$ ${resultado9}<br>Ficando 9x de: R$ ${parcelado9}</p>`
    dezx.innerHTML = `<p>10x - Total de: R$ ${resultado10}<br>Ficando 10x de: R$ ${parcelado10}</p>`
    onzex.innerHTML = `<p>11x - Total de: R$ ${resultado11}<br>Ficando 11x de: R$ ${parcelado11}</p>`
    dozex.innerHTML = `<p>12x - Total de: R$ ${resultado12}<br>Ficando 12x de: R$ ${parcelado12}</p>`
   
}