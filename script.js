document.getElementById("booking-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var date = document.getElementById("date").value;
  
  // Aqui você pode adicionar a lógica para processar e armazenar as marcações de almoço

  // Exemplo: exibir uma mensagem de sucesso
  document.getElementById("booking-form").reset();
  document.getElementById("booking-success").classList.remove("hidden");
});
