#js2yml

Конвертер JS-объекта в yml-формат для (Яндекс-Маркета)

### Установка:

``` sh
npm install js2yml
```

### Использование:

``` js
var js2yml = require('js2yml'),
    xmlString
;

xmlString = js2yml.createYmlSync({
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
      picture: "https://lh6.googleusercontent.com/-j8pBC9x_IOY.jpg",
      name: "Чайник Джу Ни",
      param: [{name: "объем", unit: "мл.", value: 110}]
    }
  ]
});

console.log(xmlString);
```

выведет:

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE yml_catalog "shops.dtd">
<yml_catalog date="2013-07-28 10:24">
  <shop>
    <name>TeaPots</name>
    <company>Teapots</company>
    <url>http://teapots.su</url>
    <currencies>
      <currency id="RUB" rate="1"/>
    </currencies>
    <categories>
      <category id="1">Чайники</category>
      <category id="2">Фигурки</category>
    </categories>
    <offers>
      <offer id="123" available="true" bid="21">
        <url>http://teapots.su/catalog/51f129b3d9eb0c0800000016</url>
        <price>5700</price>
        <currencyId>RUB</currencyId>
        <categoryId>1</categoryId>
        <picture>https://lh6.googleusercontent.com/-j8pBC9x_IOY.jpg</picture>
        <name>Чайник Джу Ни</name>
        <param name="объем" unit="мл.">110</param>
      </offer>
    </offers>
  </shop>
</yml_catalog>
```
