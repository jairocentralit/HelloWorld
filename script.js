document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário
  
    // Obtém os valores dos campos de nome e sobrenome
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
  
    // Exibe uma mensagem de alerta com o nome e sobrenome
    alert('Nome: ' + nome + '\nSobrenome: ' + sobrenome);

    // Função que é chamada quando o botão de submit é clicado
    function exibirMensagem() {
    // Obtém os valores digitados nos campos de nome e sobrenome
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    
    // Obtém o valor digitado no campo de mensagem
    var mensagem = document.getElementById("mensagem").value;
  
    // Concatena os valores de nome e sobrenome em uma mensagem
    var nomeCompleto = nome + " " + sobrenome;
  
    // Insere a mensagem no campo de mensagem
    document.getElementById("mensagem").value = "Olá, " + nomeCompleto + "! " + mensagem;
  }
  });