// Função para calcular desconto e frete
function aplicarDesconto(valor, desconto){
    if(desconto > valor) return 0;
    return valor - desconto;
 }
 function somarDesconto(valor, desconto){
    if(desconto > valor) return 0;
    return valor + desconto;
 }


  

 module.exports = { aplicarDesconto, somarDesconto, }

 

 
