export const categories = [
  {
    name: "Пиццы",
  },
  {
    name: "Завтрак",
  },
  {
    name: "Закуски",
  },
  {
    name: "Десерты",
  },
  {
    name: "Напитки",
  },
];

export const _ingredients = [
  {
    name: "Сырный бортик",
    price: 179,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png",
  },
  {
    name: "Сливочная моцарелла",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png",
  },
  {
    name: "Сыры чеддер и пармезан",
    price: 79,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796",
  },
  {
    name: "Острый перец халапеньо",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png",
  },
  {
    name: "Нежный цыпленок",
    price: 79,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A",
  },
  {
    name: "Шампиньоны",
    price: 59,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324",
  },
  {
    name: "Ветчина",
    price: 79,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61",
  },
  {
    name: "Пикантная пепперони",
    price: 79,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3",
  },
  {
    name: "Острая чоризо",
    price: 79,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027",
  },
  {
    name: "Маринованные огурчики",
    price: 59,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B",
  },
  {
    name: "Свежие томаты",
    price: 59,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67",
  },
  {
    name: "Красный лук",
    price: 59,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C",
  },
  {
    name: "Сочные ананасы",
    price: 59,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0",
  },
  {
    name: "Итальянские травы",
    price: 39,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png",
  },
  {
    name: "Сладкий перец",
    price: 59,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B",
  },
  {
    name: "Кубики брынзы",
    price: 79,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349",
  },
  {
    name: "Митболы",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "Омлет с ветчиной и грибами",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.webp",
    categoryId: 2,
  },
  {
    name: "Омлет с пепперони",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE94ECF33B0C46BA410DEC1B1DD6F8.webp",
    categoryId: 2,
  },
  {
    name: "Какао",
    imageUrl: "https://media.dodostatic.net/image/r:760x760/0195922c4ad07090a7e2a0d20844639f.avif",
    categoryId: 2,
  },
  {
    name: "Дэнвич ветчина и сыр",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.webp",
    categoryId: 3,
  },
  {
    name: "Куриные наггетсы",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D618B5C7EC29350069AE9532C6E.webp",
    categoryId: 3,
  },
  {
    name: "Картофель из печи с соусом",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EED646A9CD324C962C6BEA78124F19.webp",
    categoryId: 3,
  },
  {
    name: "Додстер",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.webp",
    categoryId: 3,
  },
  {
    name: "Острый Додстер",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE796FD3B594068F7A752DF8161D04.webp",
    categoryId: 3,
  },
  {
    name: "Банановый молочный коктейль",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EEE20B8772A72A9B60CFB20012C185.webp",
    categoryId: 4,
  },
  {
    name: "Карамельное яблоко молочный коктейль",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE79702E2A22E693D96133906FB1B8.webp",
    categoryId: 4,
  },
  {
    name: "Молочный коктейль с печеньем Орео",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp",
    categoryId: 4,
  },
  {
    name: "Классический молочный коктейль",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE796F93FB126693F96CB1D3E403FB.webp",
    categoryId: 4,
  },
  {
    name: "Карамельный чизкейк",
    imageUrl: "https://media.dodostatic.net/image/r:760x760/019592118e4076b486f441404702ef2b.avif",
    categoryId: 4,
  },
  {
    name: "Черничный маффин",
    imageUrl: "https://media.dodostatic.net/image/r:760x760/01959208214376459ac0ea89deba9f41.avif",
    categoryId: 4,
  },
  {
    name: "Тирамису",
    imageUrl: "https://media.dodostatic.net/image/r:760x760/0195920f126b72208ce364b4c459364f.avif",
    categoryId: 4,
  },
  {
    name: "Эклеры-мини с заварным кремом",
    imageUrl: "https://media.dodostatic.net/image/r:760x760/11ef8c972951d9a193b3f3901197b8da.avif",
    categoryId: 4,
  },
  {
    name: "Ирландский Капучино",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61999EBDA59C10E216430A6093.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Карамельный капучино",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Кокосовый латте",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Американо",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Латте",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp",
    categoryId: 5,
  },
];

export const pizzasNames = [
  {
    name: "Креветка и песто",
    imageUrl: "https://media.dodostatic.net/image/r:760x760/019591b65300735382df265607f4f75a.avif",
  },
  {
    name: "Четыре сыра",
    imageUrl: "https://media.dodostatic.net/image/r:760x760/11ee7d612a81468c99a6038db62dd54a.avif",
  },
  {
    name: "Чилл Грилл",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/019591c6ae147092bab65405e08e005b.avif",
  },
  {
    name: "Креветки блю чиз",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/0195ca1dda067488a0f6ac9260753e88.avif",
  },
  {
    name: "Сырная",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11ee7d610d91679bb519f38c3f45880f.avif",
  },
  {
    name: "Пепперони фреш",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11ee7d6130241e75b0ab33725248c0d0.avif",
  },
  {
    name: "Чоризо фреш",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11ee7d6170d5f99c89e91a2b3b91d16e.avif",
  },
  {
    name: "Ветчина и грибы",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11ee7d611ff4e070bc833c66d67f2e44.avif",
  },
  {
    name: "Двойной цыпленок",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11ee7d614d1bb6cb8ded93790d79e466.avif",
  },
  {
    name: "Ветчина и сыр",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11ee7d60fdfc92f19d5a6c8dee6ddb9b.avif",
  },
  {
    name: "Баварская",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/019591a2f375703390252bbac9bf1cc6.avif",
  },
  {
    name: "Аррива",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/019591a041db716ab6c22e7d675722bd.avif",
  },
  {
    name: "Креветки со сладким чили",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/0194d4fd4ba4798887defbdb3bc48750.avif",
  },
  {
    name: "Бефстроганов",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/01953cece9107770849481f54187a17f.avif",
  },
  {
    name: "Карбонара",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/019591b14a2e7663a8daf17169cfd23f.avif",
  },
  {
    name: "Жюльен",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11ee7d61762b28a4adbcb9a502d3e644.avif",
  },
];
