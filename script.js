function submitForm() {
  // Obtenha os valores selecionados do menu e as informações do cliente
  var selectedMenu = document.getElementById("menu").value;
  var customerName = document.getElementById("name").value;
  var customerEmail = document.getElementById("email").value;

  // Armazene os dados do pedido do menu no LocalStorage
  var menuData = {
    selectedMenu: selectedMenu,
    customerName: customerName,
    customerEmail: customerEmail
  };
  localStorage.setItem("menuData", JSON.stringify(menuData));

  //
