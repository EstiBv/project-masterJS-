$(document).ready(function () {
  // Slider
  $(".galery").bxSlider({
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
    let post = `<article class="post">
    <h3>${item.title}</h3>
    <span class="date">${item.date}</span>
    <p>${item.content}</p>
    <a href="#" class="btnMore">Read more</a>
  </article>`;
    console.log(posts);

    const postsArticles = $(".posts");
    postsArticles.append(post);
    console.log(posts);
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
});
