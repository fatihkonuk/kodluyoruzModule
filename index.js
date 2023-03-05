const {circleArea, circleCircumference} = require('./Circle');

const radius = 5;
const area = circleArea(radius);
const circumference = circleCircumference(radius);

console.log(`Yarıçapı ${radius} olan dairenin Alanı: ${area}  Çevresi: ${circumference}`);