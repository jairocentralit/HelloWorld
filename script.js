// Função que é chamada quando o botão de submit é clicado
function exibirMensagem() {
    // Obtém os valores digitados nos campos de nome e sobrenome
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    
    // Obtém o valor digitado no campo de mensagem
    var mensagem = document.getElementById("mensagem").value;
  
    // Concatena os valores de nome e sobrenome em uma mensagem
    var nomeCompleto = nome + " " + sobrenome;
  
    // Cria um objeto FormData para armazenar os dados do formulário
    var formData = new FormData();
    formData.append("nome", nome);
    formData.append("sobrenome", sobrenome);
    formData.append("mensagem", mensagem);
  
    // Cria uma instância do objeto XMLHttpRequest para fazer a requisição HTTP
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/HelloWorld/"); // Atualize com a URL do seu servidor
    xhr.send(formData);
  }
  
