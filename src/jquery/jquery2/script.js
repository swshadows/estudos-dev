// Escondendo .target
$(".target").hide();

// Seletores
$("ul li a").hide(); // Escondendo 'a' dentro de 'li' dentro de 'ul'
$('a[href^="#"]').hide(); // Escondendo links que começam com #

// Verificar se o elemento existe
if ($(".elemento").length) {
  console.log("Elemento existe");
}

// Adicionar algo no final, dentro da tag
$("h2").append("Isso é um H2");
// Adicionando '.introducao p' a todos os outros parágrafos do site
$("p").append(".introducao p");
// Adicionando <p>paragrafo</p> a todas as li
$("<p>Paragrafo</p>").appendTo("li");

// Pegando o primeiro h1 do site e colocando numa variável
let primeiroParagrafo = $("p").html();

// SET
$("p").html("Trocando conteúdo de todos os parágrafos");

// Trocando somente o texto
$("p").text("<span>Span não renderiza</span>");

// Sem argumentos, vira get
let todosOsP = $("p").text();

//prepend e prepentTo()
$("p").prepend("Texto antes do p");
$("<span>Texto antes do p</span>").prependTo("p");
//  Adicionando conteúdo fora da tag e após
$("p").after("Texto após a tag p");
$("<span>Texto após a tag p</span>").prependTo("p");
// Envolver as tags selecionadas na tag atribuida
$("p").wrap('<div class="azul"></div>');
// Para remover as tags que envolvem
$("li a").unwrap();

// Adicionando evento de click para links
$("a").click(function () {
  $("a").text("Clicou");
});

// Similar a addEventListener com on
$("a").on("click", function () {
  $("a").text("Clicou");
});
// Previnir o comportamento padrão de algo com event.preventDefault
$("a").on("click", function (e) {
  e.preventDefault();
  $("a").text("Clicou");
});
// Quando o mouse entrar no link
$("a").on("mouseenter", function () {
  // Escrever função aqui
});

// Quando rolar a página
$(document).on("scroll", function () {
  // Escrever função aqui
});
// Quando mudar o tamanho da janela do browser
$(window).on("resize", function () {
  // Escrever função aqui
});

// Adicionar classes
$("a").on("mouseenter", function () {
  $(this).addClass("active");
});
// Remover classes
$("a").on("mouseleave", function () {
  $(this).removeClass("active");
});
// Remoção e adição automática
$("a").on("click", function (e) {
  $(this).toggleClass("active");
});
// Verificar existência de classes
$("a").click(function (e) {
  let condition = $(this).hasClass("active");
  if (condition) console.log("Possui a classe active");
});
// Pegar ou definir atributo
let href = $("a").attr("href"); // Seleciona atributo
$("a").attr("href", "https://www.google.com.br"); // Substitui todos os links da página para ir para o Google

// Remover atributo selecionado
$("img").removeAttr("src");

// Pegar values de inputs, textareas etcs.
let inputNome = $("input.nome").val();

// Para remover elementos
$("a").remove();

// Para remover elementos filhos
$("div").empty();

// Pegar propriedades CSS
let pFontSize = $("p").css("font-size");
console.log(pFontSize);

// Definindo propriedades CSS
$("p").css("font-size", "16px");
$("h1").css({
  "font-size": "20px",
  "background-color": "#ff0032",
});

// Pegando a distancia do scroll do topo da página
$(window).scroll(() => {
  console.log($(this).scrollTop());
});

// pegando todos os elementos
$(window).scroll(() => {
  $("div").each(() => {
    console.log("Sou uma div" + this);
  });
});

// Animate
$(".modal").animate({ height: 500, width: 100 }, 1000);
$(".test").animate(
  {
    height: "+=200",
    opacity: "toggle",
  },
  1000
);

// Fades, hides, slides
$(".test").fadeOut();
$(".test").fadeIn();
$(".test").hide();
$(".test").show();
$(".test").slideUp();
$(".test").slideDown();

// Toggles
$(".test").fadeToggle();
$(".test").toggle();
$(".test").slideToggle();
