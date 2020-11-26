import $ from 'jquery';
import './css/index.css';
import snakehead from './images/snakehead.png';

    const name = $('#name');
    const button = $('#button');
    const display = $('#display');

    button.click(() => display.text(name.val()));

    const snakeImg = new Image();
    snakeImg.src = snakehead;
    $(document.body).append(snakeImg);