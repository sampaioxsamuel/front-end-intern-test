(function () {
  // Elemento principal do formulário
  const contactForm = document.getElementById('contato_form');

  // Campos do formulário
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // "addEventListener" instrui o navegador a executar uma função sempre
  // que um evento específico acontece. Nesse caso, a função abaixo será
  // executada toda vez que o botão de envio for pressionado.
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // A propriedade "value" contém o valor atual de um input ou textarea
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;

    // A propriedade "length" contém o tamanho (em caracteres) de uma
    // uma string. Toda string contém essa propriedade.
    // const nameLength = nameValue.length;

    // "window" é um objeto global que representa a janela (ou aba) do
    // navegador que está executando o código do seu site. O método
    // "alert" simplesmente mostra um aviso para o usuário contendo a
    // mensagem provida.

    /* Verificação dos campos de Nome/Email/Mensagem */

    if (nameValue.trim() === '') {
      window.alert('O campo "Nome" não pode ficar vazio');
    } else if (emailValue.trim() === '') {
      window.alert('O campo "Email" não pode ficar vazio');
    } else if (messageValue.trim() === '') {
      window.alert('O campo "Mensagem" não pode ficar vazio');
    } else {
      window.alert('Mensagem enviada com sucesso!');
    }
    // Altere e complete essa função para validar os campos do formulário
    // de acordo com as especificações do teste. Boa sorte!
  });
})();
