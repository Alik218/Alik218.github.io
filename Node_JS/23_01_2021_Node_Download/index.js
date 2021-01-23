const request = require('request');
const fs = require('fs');

const url = 'https://dou.ua/';

const imgSVG = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN""http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10dtd"><svg version="1.0" xmlns="http://www.w3.org/2000/svg"width="300.000000pt" height="300.000000pt" viewBox="0 0 300.000000 300.000000"preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"fill="#000000" stroke="none"><path d="M687 2312 l-337 -337 0 -475 0 -475 338 -338 337 -337 475 0 475 0338 338 337 337 0 475 0 475 -338 338 -337 337 -475 0 -475 0 -338 -338zm1595 -29 l318 -318 0 -465 0 -465 -317 -317 -318 -318 -465 0 -465 0 -317317 -318 318 0 465 0 465 317 317 318 318 465 0 465 0 317 -317z"/></g></svg>';

// 1) создаём 2 папки, в одну папку кладём картинку,  например SVG-файл. Эту картинку перемещаем из одной папки в другую.

fs.mkdir('new1', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('new1 created');
  fs.writeFile('new1/1.svg', imgSVG, (err1) => {
    if (err1) {
      console.log(err1);
    }
    console.log('1.svg in folder1 created');
    fs.mkdir('new2', (err2) => {
      if (err2) {
        console.log(err2);
      }
      console.log('new2 created');
      fs.rename('new1/1.svg', 'new2/1.svg', (err3) => {
        if (err3) {
          console.log(err3);
          return;
        }
        console.log('1.svg moved to new2');
      });
    });
  });
});

// 2) из прошлой домашки делаем request на dou.ua, добываем массив адресов картинок, сохраняем его в файл arr.txt.

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
      console.log('arr.txt created');
      if (!err1) {
        fs.readFile('arr.txt', 'utf8', (err2, data) => {
          if (!err2) {
            arrImages = data.split(',').slice(1, -1);
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