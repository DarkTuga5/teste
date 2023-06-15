function submitForm(event) {
  event.preventDefault();

  // Obtenha os valores selecionados do menu e as informações do cliente
  var selectedMenu = document.getElementById("menu").value;
  var customerName = document.getElementById("name").value;
  var customerEmail = document.getElementById("email").value;

  // Preencha os elementos na página de confirmação
  document.getElementById("selectedMenu").textContent = selectedMenu;
  document.getElementById("customerName").textContent = "Nome: " + customerName;
  document.getElementById("customerEmail").textContent = "Email: "
