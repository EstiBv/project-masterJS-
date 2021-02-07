$(document).ready(function () {
  // Slider
  $(".slider__galery").bxSlider({
    mode: "fade",
    captions: false,
    slideWidth: 1200,
    responsive: true,
    adaptiveHeight: true,
    touchEnabled: true,
    ticker: false,
    slideMargin: 0,
  });

  // Post
  let posts = [
    {
      title: "Test Title 0",
      date: "published " + moment().format("DDD MMMM YYYY "),
      content:
        "  Ahorarr te va a hasé pupitaa te voy a borrar el cerito quietooor caballo blanco caballo negroorl al ataquerl quietooor diodenoo. A peich ahorarr me cago en tus muelas pecador. A wan ese pedazo de no te digo trigo por no llamarte Rodrigor ese pedazo de caballo blanco caballo negroorl pecador de la pradera tiene musho peligro llevame al sircoo ese que llega se calle ustée.",
    },
    {
      title: "Test Title 1",
      date: "published " + moment().format("DDD MMMM YYYY "),
      content:
        "  Ahorarr te va a hasé pupitaa te voy a borrar el cerito quietooor caballo blanco caballo negroorl al ataquerl quietooor diodenoo. A peich ahorarr me cago en tus muelas pecador. A wan ese pedazo de no te digo trigo por no llamarte Rodrigor ese pedazo de caballo blanco caballo negroorl pecador de la pradera tiene musho peligro llevame al sircoo ese que llega se calle ustée.",
    },
    {
      title: "Test Title 2",
      date: "published " + moment().format("DDD MMMM YYYY "),
      content:
        "  Ahorarr te va a hasé pupitaa te voy a borrar el cerito quietooor caballo blanco caballo negroorl al ataquerl quietooor diodenoo. A peich ahorarr me cago en tus muelas pecador. A wan ese pedazo de no te digo trigo por no llamarte Rodrigor ese pedazo de caballo blanco caballo negroorl pecador de la pradera tiene musho peligro llevame al sircoo ese que llega se calle ustée.",
    },
    {
      title: "Test Title 3",
      date: "published " + moment().format("DDD MMMM YYYY "),
      content:
        "  Ahorarr te va a hasé pupitaa te voy a borrar el cerito quietooor caballo blanco caballo negroorl al ataquerl quietooor diodenoo. A peich ahorarr me cago en tus muelas pecador. A wan ese pedazo de no te digo trigo por no llamarte Rodrigor ese pedazo de caballo blanco caballo negroorl pecador de la pradera tiene musho peligro llevame al sircoo ese que llega se calle ustée.",
    },
  ];

  posts.forEach((item) => {
    let post = `<article class="contentPosts__article">
    <h2 class="contentPosts__article--title">${item.title}</h2>
    <span class="contentPosts__article--date">${item.date}</span>
    <p class="contentPosts__paragrapah">${item.content}</p>
    <a href="#" class="contentPosts__btnMore">Read more</a>
  </article>`;

    const postsArticles = $(".contentPosts");
    postsArticles.append(post);
  });

  // Theme Selector
  const blackWhiteTheme = $("#toBw");
  const blueTheme = $("#toBlue");
  const pinkTheme = $("#toPink");
  const themeSheet = $("#theme");

  blackWhiteTheme.click(function () {
    themeSheet.attr("href", "css/bw.css");
  });

  blueTheme.click(function () {
    themeSheet.attr("href", "css/blue.css");
  });

  pinkTheme.click(function () {
    themeSheet.attr("href", "css/pink.css");
  });

  // Scroll Go Up
  const selectGoUp = $(".up");
  selectGoUp.click(function (ev) {
    ev.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  // Login User fake
  const buttonSendDataLogin = $("#enter");
  const inputsForm = $(".inputName");

  buttonSendDataLogin.click(function () {
    let inputNameUser = inputsForm.val();
    localStorage.setItem("inputNameUser", inputNameUser);
  });

  let userSavedName = localStorage.getItem("inputNameUser");

  if (userSavedName !== null && userSavedName !== "undefined") {
    const textWhoIamParagraph = $(".aboutText");
    textWhoIamParagraph.html(
      "<h6><span> Welcome, " + userSavedName + "</span></h6>"
    );
    textWhoIamParagraph.append('<a href="#" class="logOut">Log out </a>');
    $("#login").hide();

    $(".logOut").click(function () {
      localStorage.clear();
      location.reload();
    });
  }

  // About Accordion
  const accordionContainer = $(".content__boxAccordion--accordion");
  accordionContainer.accordion();

  // Watch
  setInterval(function () {
    let watchContainer = $(".watch");
    const watch = moment().format("h:mm:ss");
    watchContainer.html(watch);
  }, 1000);
  let watch = $(".watchDragabble").draggable({ addClasses: false });

  // Validation Form
  const inputFormDataAge = $("#date");
  inputFormDataAge.datepicker({
    dateFormat: "dd-mm-yy",
  });

  if (window.location.href.indexOf("conctact") > -1) {
    $.validate({
      lang: "en",
      errorMessagePosition: "top",
    });
  }

  // CANVAS
  let miCanvas = document.querySelector("#pizarra");
  // evitar error en los otras pag.
  if (miCanvas !== null && miCanvas !== "undefined") {
    let lineas = [];
    let correccionX = 0;
    let correccionY = 0;
    let pintarLinea = false;

    // Marca el nuevo punto
    let nuevaPosicionX = 0;
    let nuevaPosicionY = 0;

    //Correcion X e Y cogen el valor de la posición de la linea respecto a la ventana de visualización con getBoundingClientRect
    let posicion = miCanvas.getBoundingClientRect();
    correccionX = posicion.x;
    correccionY = posicion.y;

    // px igual que en css
    miCanvas.width = 300;
    miCanvas.height = 300;

    // * Funcion que empieza a dibujar la linea
    // */
    function empezarDibujo() {
      pintarLinea = true;
      lineas.push([]);
    }

    // * Funcion que guarda la posicion de la nueva línea
    // */
    function guardarLinea() {
      lineas[lineas.length - 1].push({
        x: nuevaPosicionX,
        y: nuevaPosicionY,
      });
    }
    /* Funcion dibuja la linea*/

    function dibujarLinea(event) {
      event.preventDefault();

      if (pintarLinea) {
        //  parametro de contexto de render en dos dimensiones soportado por todos los navegadores, sobre el que se aplican los estilos.
        let ctx = miCanvas.getContext("2d");
        // Estilos de linea
        ctx.lineJoin = ctx.lineCap = "round";
        ctx.lineWidth = 5;
        // Color de la linea
        ctx.strokeStyle = "#fff";
        // Marca el nuevo punto
        if (event.changedTouches === undefined) {
          // Versión ratón
          nuevaPosicionX = event.layerX;
          nuevaPosicionY = event.layerY;
        }

        // Guarda la linea
        guardarLinea();
        // Redibuja todas las lineas guardadas, vacía y vuelve a pintar
        ctx.beginPath();
        lineas.forEach(function (segmento) {
          ctx.moveTo(segmento[0].x, segmento[0].y);
          segmento.forEach(function (punto, i) {
            ctx.lineTo(punto.x, punto.y);
          });
        });
        ctx.stroke();
      }
    }
    // * Funcion que deja de dibujar la linea
    // */
    function pararDibujar() {
      pintarLinea = false;
      guardarLinea();
    }
    // Eventos raton
    miCanvas.addEventListener("mousedown", empezarDibujo, false);
    miCanvas.addEventListener("mousemove", dibujarLinea, false);
    miCanvas.addEventListener("mouseup", pararDibujar, false);
  } else {
    console.log("no section canvas");
  }
});
