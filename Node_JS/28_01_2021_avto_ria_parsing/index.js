const request = require('request');
const http = require('http');

const url = 'https://auto.ria.com/uk/search/?indexName=auto,order_auto,newauto_search&body.id[4]=2&year[0].gte=2012&year[0].lte=2012&categories.main.id=1&brand.id[0]=6&price.currency=1&gearbox.id[1]=2&gearbox.id[2]=3&fuel.id[1]=2&drive.id[0]=1&abroad.not=0&custom.not=1&page=0&size=50';

request(url, (error, response, body) => {
  let cars = [];

  const price = 'data-main-price';
  const mark = 'data-mark-name';
  const model = 'data-model-name';
  const year = 'data-year';

  cars = body.split('ticket-item new__ticket t ')
    .filter((el) => el.includes(price))
    .map((el) => {
      const tempObj = {};

      // eslint-disable-next-line prefer-destructuring
      tempObj.price = el.split('<')
        // eslint-disable-next-line no-shadow
        .filter((el) => el.includes(price))
        // eslint-disable-next-line no-shadow
        .map((el) => el.slice(el.lastIndexOf('=') + 2))
        // eslint-disable-next-line no-shadow
        .map((el) => el.slice(0, el.lastIndexOf('"')))
        // eslint-disable-next-line no-unexpected-multiline
        [0];

      // eslint-disable-next-line prefer-destructuring
      tempObj.mark = el.split('<')
        // eslint-disable-next-line no-shadow
        .filter((el) => el.includes(mark))
        // eslint-disable-next-line no-shadow
        .map((el) => el.slice(el.indexOf(mark) + mark.length + 2, el.indexOf(model) - 2))
        // eslint-disable-next-line no-unexpected-multiline
        [0];

      // eslint-disable-next-line prefer-destructuring
      tempObj.model = el.split('<')
        // eslint-disable-next-line no-shadow
        .filter((el) => el.includes(model))
        // eslint-disable-next-line no-shadow
        .map((el) => el.slice(el.indexOf(model) + model.length + 2, el.indexOf(year) - 2))
        // eslint-disable-next-line no-unexpected-multiline
        [0];

      // eslint-disable-next-line prefer-destructuring
      tempObj.year = el.split('<')
        // eslint-disable-next-line no-shadow
        .filter((el) => el.includes(year))
        // eslint-disable-next-line no-shadow
        .map((el) => el.slice(el.indexOf(year) + year.length + 2, el.indexOf('data-expire-date') - 2))
        // eslint-disable-next-line no-unexpected-multiline
        [0];

      return tempObj;
    });

  // eslint-disable-next-line no-shadow
  const generateHtml = (cars) => {
    let str = '<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>28_01_2021</title>\n</head>\n<div class="table" style="margin: 100px 500px;">\n<table><tr><th>Price</th><th>Mark</th><th>Model</th><th>Year</th></tr>\n</div>';
    cars.forEach((car) => {
      str = `${str}
      <tr>
      <td>${car.price}</td>
      <td>${car.mark}</td>
      <td>${car.model}</td>
      <td>${car.year}</td>
      </tr>
      `;
    });
    return str;
  };

  const server = http.createServer((req, res) => {
  // eslint-disable-next-line no-use-before-define
    res.write(generateHtml(cars));
    res.end();
  }).listen(5500, () => {
    console.log('opened server', server.address().port);
  });
});

// const request = require('request');
// const cheerio = require('cheerio');

// const url = 'https://auto.ria.com/uk/search/?indexName=auto,order_auto,newauto_search&body.id[4]=2&year[0].gte=2012&year[0].lte=2012&categories.main.id=1&brand.id[0]=6&price.currency=1&gearbox.id[1]=2&gearbox.id[2]=3&fuel.id[1]=2&drive.id[0]=1&abroad.not=0&custom.not=1&page=0&size=50';

// request(url, (error, response, body) => {
//   const str1 = 'ticket-item new__ticket t';
//   const out = body.split(str1)
//     .filter((el) => el.includes('data-main-price'))
//     .map(el => {
//       // eslint-disable-next-line no-unused-vars
//       let tempArr = [];
//       let che = cheerio.load(el);
//       console.log(che('.price-ticket').attribs);
//     });
//   // console.log(out.length);
// });

// // request('https://auto.ria.com/uk/search/?indexName=auto,order_auto,newauto_search&body.id[4]=2&year[0].gte=2012&year[0].lte=2012&categories.main.id=1&brand.id[0]=6&price.currency=1&gearbox.id[1]=2&gearbox.id[2]=3&fuel.id[1]=2&drive.id[0]=1&abroad.not=0&custom.not=1&page=0&size=50', (error, response, body) => {
// //   if (error) {
// //     console.log('ERROR!');
// //   } else {
// //     const str = body;
// //     const strLen = 'content'.length;
// //     // const tempArr = str.split('>')
// //     //   .map((el) => el.slice(el.indexOf('https://auto.ria.com/uk/')))
// //     //   .filter((el) => el.includes('uk'))
// //     //   .map((el) => el.slice(0, el.indexOf('"')))
// //       .map((el) => el.slice(strLen))
// //     //   .map((el) => el.split('/'));
// //     console.log(tempArr);
// //   }
// // });

// // request('https://auto.ria.com/uk/search/?indexName=auto,order_auto,newauto_search&body.id[4]=2&year[0].gte=2012&year[0].lte=2012&categories.main.id=1&brand.id[0]=6&price.currency=1&gearbox.id[1]=2&gearbox.id[2]=3&fuel.id[1]=2&drive.id[0]=1&abroad.not=0&custom.not=1&page=0&size=50', (error, response, body) => {
// //   if (error) {
// //     console.log('ERROR!');
// //   } else {
// //     const startIndex = body.indexOf('searchResults');
// //     console.log(startIndex);
// //   }
// // });

// // request('http://dou.ua', (error, response, body) => {
// //   if (error) {
// //     console.log('ERROR!');
// //   } else {
// //     const str = body;
// //     const strLen = 'CACHE/images/img/announces/'.length;
// //     const tempArr = str.split('>')
// //     //   .map((el) => el.slice(el.indexOf('CACHE/images/img/announces/')))
// //     //   .filter((el) => el.includes('announce'))
// //     //   .map((el) => el.slice(0, el.indexOf('"')))
// //     //   .map((el) => el.slice(strLen))
// //     //   .map((el) => el.split('/'));
// //     console.log(tempArr);
// //   }
// // });

// /// / домашка 23_01

// // const request = require('request');
// // const fs = require('fs');

// // const url = 'https://dou.ua/';

// // const imgSVG = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN""http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10dtd"><svg version="1.0" xmlns="http://www.w3.org/2000/svg"width="300.000000pt" height="300.000000pt" viewBox="0 0 300.000000 300.000000"preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"fill="#000000" stroke="none"><path d="M687 2312 l-337 -337 0 -475 0 -475 338 -338 337 -337 475 0 475 0338 338 337 337 0 475 0 475 -338 338 -337 337 -475 0 -475 0 -338 -338zm1595 -29 l318 -318 0 -465 0 -465 -317 -317 -318 -318 -465 0 -465 0 -317317 -318 318 0 465 0 465 317 317 318 318 465 0 465 0 317 -317z"/></g></svg>';

// // // 1) создаём 2 папки, в одну папку кладём картинку,  например SVG-файл. Эту картинку перемещаем из одной папки в другую.

// // fs.mkdir('new1', (err) => {
// //   if (err) {
// //     console.log(err);
// //   }
// //   console.log('new1 created');
// //   fs.writeFile('new1/1.svg', imgSVG, (err1) => {
// //     if (err1) {
// //       console.log(err1);
// //     }
// //     console.log('1.svg in folder1 created');
// //     fs.mkdir('new2', (err2) => {
// //       if (err2) {
// //         console.log(err2);
// //       }
// //       console.log('new2 created');
// //       fs.rename('new1/1.svg', 'new2/1.svg', (err3) => {
// //         if (err3) {
// //           console.log(err3);
// //           return;
// //         }
// //         console.log('1.svg moved to new2');
// //       });
// //     });
// //   });
// // });

// // // 2) из прошлой домашки делаем request на dou.ua, добываем массив адресов картинок, сохраняем его в файл arr.txt.

// // const parseUrl = (r, html, startIndex) => {
// //   const sliced = html.substring(startIndex);
// //   const indexOfSeparator1 = sliced.indexOf('https://s.dou.ua/CACHE/images/img/announces/');
// //   const tmp = sliced.slice(indexOfSeparator1, indexOfSeparator1 + 200);
// //   const indexOfSeparator2 = tmp.indexOf('"');
// //   r.push(tmp.substring(0, indexOfSeparator2));
// //   return indexOfSeparator1 + indexOfSeparator2;
// // };

// // let arrImages = [];
// // request(url, (err, res, body) => {
// //   if (!err) {
// //     const result = [];
// //     let startIndex = body.indexOf('<h3>Советуем почитать</h3>');
// //     for (let i = 0; i < 10; i++) {
// //       startIndex += parseUrl(result, body, startIndex);
// //     }
// //     fs.writeFile('arr.txt', JSON.stringify(result), (err1) => {
// //       console.log('arr.txt created');
// //       if (!err1) {
// //         fs.readFile('arr.txt', 'utf8', (err2, data) => {
// //           if (!err2) {
// //             arrImages = data.split(',').slice(1, -1);
// //             let html = '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Node js</title>\n</head>\n<body>';
// //             for (let i = 0; i < arrImages.length; i++) {
// //               html += `\n<img src=${arrImages[i]}>`;
// //             }
// //             html += '\n</body>\n</html>';
// //             fs.writeFile('index.html', html, (err3) => {
// //               if (err3) {
// //                 console.log(err3);
// //               }
// //             });
// //           }
// //         });
// //       }
// //     });
// //   } else {
// //     console.log(err);
// //   }
// // });

// // const request = require('request');

// // урок

// // const request = require('request');

// // request('http://dou.ua', (error, response, body) => {
// //   if (error) {
// //     console.log('ERROR!');
// //   } else {
// //     const str = body;
// //     const strLen = 'CACHE/images/img/announces/'.length;
// //     // const tempArr = str.split('>')
// //     //   .map((el) => el.slice(el.indexOf('CACHE/images/img/announces/')))
// //     //   .filter((el) => el.includes('announce'))
// //     //   .map((el) => el.slice(0, el.indexOf('"')))
// //     //   .map((el) => el.slice(strLen))
// //     //   .map((el) => el.split('/'));
// //     console.log(strLen);
// //   }
// // });

// // const download = function(uri, filename, callback){
// //    request.head(uri, function(err, res, body){
// //     console.log('content-type:', res.headers['content-type']);
// //     console.log('content-length:', res.headers['content-length']);

// //     request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
// //   });

// // download(result[1], 'google.png', function(){
// //   console.log('done');
// // });

// // let a = request('https://s.dou.ua/CACHE/images/img/announces/hamm-420/03c0f744cf161cbdb3fb32ac3b5a8623.jpg').pipe(fs.createWriteStream('./1.jpg'));

// // let a = request.get('https://s.dou.ua/CACHE/images/img/announces/hamm-420/03c0f744cf161cbdb3fb32ac3b5a8623.jpg');

// // console.log(a);

// // let str = 'you can also.';
// // str = str.substring(0, str.lastIndexOf(' '));

// // console.log(str);

// // let str = fs.readFileSync('./index.js').toString()
// // let arrStr = str.split('\n')
// // fs.appendFileSync('./temp.js', arrStr[0])

// // console.log(fs.readFileSync('./temp.js').toString())

// // const num1 = require('./a')
// // const num2 = require('./b')
// // const num3 = 60

// // console.log(num1)
// // console.log(num1 + num2)
// // console.log(num1 + num2 + num3)
