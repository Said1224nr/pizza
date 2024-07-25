const wrapper = document.querySelector('.wrapper');
let Data = JSON.parse(localStorage.getItem('data')) || []

const ReadDatas = () => {
    Data.forEach((v) => {
        let card = document.createElement('div');
        card.innerHTML = `<img src="${v.img}" alt=""><p class="text">${v.name}</p><p class="price">${v.price} ₽</p>`;
        card.classList.add('card');
        wrapper.appendChild(card);

        const btn = document.createElement('button');
        btn.textContent = 'X';
        card.appendChild(btn);
    });
};

ReadDatas();