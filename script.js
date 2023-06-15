document.getElementById("booking-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var date = document.getElementById("date").value;
  
  // Aqui você pode adicionar a lógica para processar e armazenar as marcações de almoço

  // Exemplo: exibir uma mensagem de sucesso
  document.getElementById("booking-form").reset();
  document.getElementById("booking-success").classList.remove("hidden");
});

// Obtenha os valores selecionados do menu e as informações do cliente
var selectedMenu = document.getElementById("menu").value;
var customerName = document.getElementById("name").value;
var customerEmail = document.getElementById("email").value;

// Preencha os elementos na página de confirmação
document.getElementById("selectedMenu").textContent = selectedMenu;
document.getElementById("customerName").textContent = "Nome: " + customerName;
document.getElementById("customerEmail").textContent = "Email: " + customerEmail;
