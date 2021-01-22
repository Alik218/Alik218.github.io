const request = require('request');
const fs = require('fs');

const url = 'https://dou.ua/';

const parseUrl = (r, html, startIndex) => {
  const sliced = html.substring(startIndex);
  const indexOfSeparator1 = sliced.indexOf('https://s.dou.ua/CACHE/images/img/announces/');
  const tmp = sliced.slice(indexOfSeparator1, indexOfSeparator1 + 200);
  const indexOfSeparator2 = tmp.indexOf('"');
  r.push(tmp.substring(0, indexOfSeparator2));
  return indexOfSeparator1 + indexOfSeparator2;
};

let arrImages = [];
request(url, (err, res, body) => {
  if (!err) {
    const result = [];
    let startIndex = body.indexOf('<h3>Советуем почитать</h3>');
    for (let i = 0; i < 10; i++) {
      startIndex += parseUrl(result, body, startIndex);
    }
    fs.writeFile('arr.txt', JSON.stringify(result), (err1) => {
      if (!err1) {
        fs.readFile('arr.txt', 'utf8', (err2, data) => {
          if (!err2) {
            arrImages = data.split(',').slice(1, -1);
            console.log(arrImages);
            let html = '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Node js</title>\n</head>\n<body>';
            for (let i = 0; i < arrImages.length; i++) {
              html += `\n<img src=${arrImages[i]}>`;
            }
            html += '\n</body>\n</html>';
            fs.writeFile('index.html', html, (err3) => {
              if (err3) {
                console.log(err3);
              }
            });
          }
        });
      }
    });
  } else {
    console.log(err);
  }
});