import tabs  from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import forms from './modules/forms';
import slise from './modules/slise';
import calc  from './modules/calc';
import cards from './modules/cards';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);  
    
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2020-09-11');
    forms('form', modalTimerId);
    slise({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        curretCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',

    });
    calc();
    cards();
});

 