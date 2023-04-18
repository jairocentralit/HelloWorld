document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário
  
    // Obtém os valores dos campos de nome e sobrenome
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
  
    // Exibe uma mensagem de alerta com o nome e sobrenome
    alert('Nome: ' + nome + '\nSobrenome: ' + sobrenome);
  });