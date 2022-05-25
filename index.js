const quotes = {
  "-Nelson Mandela":
    "'Le courage n'est pas l'absence de peur, mais la capacité de la vaincre'",
  "-Louis-Ferdinand Céline":
    "'C'est peut-être de la peur qu'on a le plus souvent besoin pour se tirer d'affaire dans la vie'",
  "-Philippe Arnaud":
    "'Face. Tu dois faire face. Connaître le visage de ce qui va te faire peur'",
  "-Averroès ":
    "'L'ignorance mène à la peur, la peur mène à la haine et la haine conduit à la violence. Voilà l'équation'",
  "-Mahatma Gandhi":
    "'La vie est un mystère qu'il faut vivre, et non un problème à résoudre'",
  "-Proverbe africain":
    "'La femme est la ceinture qui tient le pantalon de l'homme'",
  "-Mahatma Gandhi":
    "'Tout bon mouvement traverse cinq phases : indifférence, raillerie, abus, répression et respect [...] Tout mouvement qui survit à la répression commande invariablement le respect, qui est une autre forme du succès.'",
  "-Mahatma Gandhi":
    "'Pour progresser, il ne faut pas répéter l'histoire, mais en produire une nouvelle. Il faut ajouter à l'héritage que nous ont laissé nos ancêtres.'",
  "-Mahatma Gandhi":
    "'Les religions sont autant de routes distinctes convergeant vers un même point. Qu'importe que nous suivions des routes différentes, du moment que nous atteignons le même but'",
  "-Mahatma Gandhi":
    "'Le rire sincère est l'éloquence vraie, il est plus efficace que la parole.'",
  "-Mahatma Gandhi":
    "'Si nous pouvions nous changer nous-mêmes, les tendances dans le monde changeraient. Dans la mesure où un homme qui change sa propre nature voit aussi l'attitude du monde changer vis-à-vis de lui. Nous ne devons pas attendre de voir ce que d'autres feront.'",
};

document.getElementById("generate").addEventListener("click", () => {
  let authors = Object.keys(quotes);
  let author = authors[Math.floor(Math.random() * authors.length)];
  let quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
});
