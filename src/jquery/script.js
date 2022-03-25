// Testes iniciais com jQuery
console.log($("h1"));

// Testando hide e show

setTimeout(() => {
  $(".title-hide").hide();
}, 1000 * 5);

// Eventos
let title01 = document.getElementById("event-test");

$("#event-test").click(() => {
  title01.innerHTML = "Titulo clicado";
});

$("#event-test").mouseenter(() => {
  title01.innerHTML = "Mouse entrou";
});

$("#event-test").mouseleave(() => {
  title01.innerHTML = "Mouse saiu";
});

$("#event-test").dblclick(() => {
  title01.innerHTML = "Titulo clicado 2x";
});

// Animações
$("#fade").click(() => {
  $(".square").fadeToggle();
});

$("#slide").click(() => {
  $(".square").slideToggle();
});

$("#animate").click(() => {
  $(".square").animate({ width: 200, height: 50 });
});

// Callback
$("#button-callback").click(() => {
  function callBack() {
    let para = document.getElementById("p-callback");
    para.innerHTML = "Quadrado escondido";
  }

  $(".square-callback").hide(4000, callBack);
});

// Children
// $("#children-ul-1").find().hide()
$("#children-hide-1").click(() => {
  $("#children-ul-1").children().hide(2000);
});

// Chaining
$("#button-chaining").click(() => {
  $(".square-chaining").hide(1000).show(1000).slideUp(1000).slideDown(1000);
});

// Lista de compras - Teste de leitura e modificação de elementos
$("#add-lista").click(() => {
  let input = $("#input-lista");
  $("#lista").html("<li>" + input.val() + "</li>");
  input.val("");
});
