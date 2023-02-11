function aplicarDesconto(valor, desconto){
    if(desconto > valor) return 0;
    return valor - desconto;
 }
 function somarDesconto(valor, desconto){
    if(desconto > valor) return 0;
    return valor + desconto;
 }
 function freteGratis (valor) {
    return valor >= 150
  }
 module.exports = { aplicarDesconto, somarDesconto, freteGratis }



 
