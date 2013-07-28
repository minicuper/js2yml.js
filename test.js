var js2yml = require('./js2yml');


console.log(js2yml.createYmlSync({
  name: "TeaPots",
  company: "Teapots",
  url: "http://teapots.su",
  currencies: [{id: 'RUB', rate: '1'}],
  categories: [
    {id: '1',  name: 'Чайники'},
    {id: '2',  name: 'Фигурки'}
  ],
  offers: [
    {
      id: "123",
      available: true,
      bid: 21,
      url: "http://teapots.su/catalog/51f129b3d9eb0c0800000016",
      price: 5700,
      currencyId: "RUB",
      categoryId: "1",
      picture: "https://lh6.googleusercontent.com/-j8pBC9x_IOY/UfEpQc8ThzI/AAAAAAAACNQ/50qT3AFYuMg/s870/8.jpg",
      name: "Чайник Джу Ни",
      param: [{name: "объем", unit: "мл.", value: 110}]
    }
  ]
}));

