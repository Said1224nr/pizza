import data from "./mook.js";

document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const btn_all = document.querySelector('.btn_all');
    const btn_meat = document.querySelector('.btn_meat');
    const btn_Vigtails = document.querySelector('.btn_Vigtails');
    const btn_Gril = document.querySelector('.btn_Gril');
    const btn_Ostriy = document.querySelector('.btn_Ostriy');
    const btn_close = document.querySelector('.btn_close');

    const BasketData = JSON.parse(localStorage.getItem('datas')) || [];

    const ReadAllCategories = (items) => {
        wrapper.innerHTML = '';
        items.forEach((v) => {
            const card = document.createElement('div');
            card.innerHTML = `<img src="${v.img}" alt=""><p class="TextName">${v.name}</p><p class="price">от ${v.price} ₽</p>`;
            card.classList.add('card');
            wrapper.appendChild(card);

            const btnBasket = document.createElement('button');
            btnBasket.textContent = 'В корзину';
            btnBasket.addEventListener('click', () => {
                BasketData.push(v);
                localStorage.setItem('data', JSON.stringify(BasketData));
                console.log(BasketData);
            });
            btnBasket.classList.add('btnBasket');
            card.appendChild(btnBasket);
        });
    };

    ReadAllCategories(data.All);

    btn_meat.addEventListener('click', () => ReadAllCategories(data.Meat));
    btn_all.addEventListener('click', () => ReadAllCategories(data.All));
    btn_Vigtails.addEventListener('click', () => ReadAllCategories(data.Vigtails));
    btn_Gril.addEventListener('click', () => ReadAllCategories(data.Gril));
    btn_Ostriy.addEventListener('click', () => ReadAllCategories(data.Ostriy));
    btn_close.addEventListener('click', () => ReadAllCategories(data.Close));
});
