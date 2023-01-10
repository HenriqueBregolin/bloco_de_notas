var texto = window.document.getElementById('bloco_texto')
var tela = window.document.getElementById('tela_texto')

function limpar(){
   if (tela.innerHTML == '' && texto.value == '' ){
      window.alert("Já está tudo LIMPO!")
   }
   tela.innerHTML = ''
   texto.value = ''
   texto.focus()
}
tela.innerHTML = ''

function adicionar (){
   if(texto.value == ''){
      window.alert("Digite um texto")
      texto.focus()
      
   } else{
      tela.innerHTML += "[" + texto.value + "]" + "<br><br><br>"
   }
   texto.value = '';
   texto.focus() 
   
}