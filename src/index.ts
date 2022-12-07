import '@babel/polyfill';
import './index.html';
import './index.scss';
// import code from './img/code.png'
import { mult, sum } from './modules/calc';

const imgWrap = document.querySelector('.image')!;
const img = new Image();
// img.src = code
img.width = 700;
imgWrap.append(img);

console.log(mult(2, 4));
console.log(sum(2, 4));
