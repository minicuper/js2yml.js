var fs = require('fs'),
    xml = require('xmlbuilder'),
    moment = require('moment'),
    _ = require("underscore")
;

exports.createYmlSync = function(obj){
  var result;

  // filtredObj = _.pick(obj, 'name', 'company', 'url', 'platform', 'version', 'agency', 'email', 'currencies', 'categories', 'local_delivery_cost', 'offers')

  // if ('currencies' in filtredObj) {
  //   filtredObj.currencies = _.pick(filtredObj.currencies, 'id', 'rate');
  // }

  // if ('categories' in filtredObj) {
  //   filtredObj.categories = _.pick(filtredObj.categories, 'id', 'parentId', 'name');
  // }

  // if ('offers' in filtredObj) {
  //   _.each(filtredObj.offers, function(offer, index, list){
  //     list[index] = _.pick(list[index],
  //       'id',
  //       'type',
  //       'available',
  //       'bid',
  //       'url',
  //       'price',
  //       'currencyId',
  //       'categoryId',
  //       'picture',
  //       'store',
  //       'pickup',
  //       'delivery',
  //       'local_delivery_cost',
  //       'author',
  //       'name',
  //       'publisher',
  //       'series',
  //       'year',
  //       'ISBN',
  //       'volume',
  //       'part',
  //       'language',
  //       'binding',
  //       'page_extent',
  //       'table_of_contents',
  //       'performed_by',
  //       'performance_type',
  //       'storage',
  //       'format',
  //       'artist',
  //       'media',
  //       'starring',
  //       'director',
  //       'originalName',
  //       'country',
  //       'title',
  //       'recording_length',
  //       'age',
  //       'typePrefix',
  //       'vendor',
  //       'vendorCode',
  //       'model',
  //       'description',
  //       'sales_notes',
  //       'manufacturer_warranty',
  //       'country_of_origin',
  //       'downloadable',
  //       'adult',
  //       'barcode',
  //       'worldRegion',
  //       'region',
  //       'days',
  //       'dataTour',
  //       'hotel_stars',
  //       'room',
  //       'meal',
  //       'included',
  //       'transport',
  //       'hall',
  //       'date',
  //       'is_premiere',
  //       'is_kids',
  //       'param' //Может быть массивом
  //     );
  //   });
  // }

  //currencies filter

  var root = xml.create('yml_catalog', {'version': '1.0', 'encoding': 'UTF-8'}, {ext: 'SYSTEM "shops.dtd"'});

  root.att('date', moment(new Date()).format('YYYY-MM-DD HH:mm'));

  var shop = root.ele('shop');

  _.each(obj, function(value, key){

    switch (key) {
      case 'currencies':
        var cur = shop.ele(key);
        _.each(value, function(item){
          cur.ele('currency', _.pick(item, 'id', 'rate', 'plus'));
        });
        break
      case 'categories':
        var cat = shop.ele(key);
        _.each(value, function(item){
          cat.ele('category', _.pick(item, 'id', 'parentId')).txt(item.name);
        });
        break
      case 'offers':
        var offers = shop.ele(key);
        _.each(value, function(item){
          var offer = offers.ele('offer', _.pick(item, 'id', 'type', 'available', 'bid'));

          _.each(_.omit(item, 'id', 'type', 'available', 'bid', 'param'), function(offerValue, offerKey){
            offer.ele(offerKey).txt(offerValue);
          });

          if ('param' in item) {
            //if param is array
            // if( Object.prototype.toString.call( item.param ) === '[object Array]' ) {

            // } else {

            // }

            _.each(item.param, function(param){
              offer.ele('param', _.pick(param, 'name', 'unit')).txt(param.value);
            });
          }
        });
        break
      default:
      shop.ele(key).txt(value);
    }


  });

  result = root.end({ 'pretty': true, 'indent': '  ', 'newline': '\n' });

  return result;
}

