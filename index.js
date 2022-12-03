const container = document.querySelector('.container');
const topContent = document.querySelector('.top-content');
const button = document.querySelector('.top-content__button');
const containerFilter = document.querySelector('.filter');

button.addEventListener('click', () => {

    containerFilter.classList.remove('filter');
    button.style.display = 'none';

})

document.querySelectorAll('.price__input').forEach(
    item => item.addEventListener('keydown', function (event) {

        let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'Delete'];
        const key = event.key;
        if (arr.includes(key)) {
            return;
        } else {
            event.preventDefault();
        }
    })
);


    const section = document.querySelector('.product-content');

    request({
        url: 'https://skypro-raids-01.onrender.com/offers/',

        onSuccess: (data) => {

        }
    })

    function render(data) {
        data.forEach(element => {
            const productContentImg = document.createElement('div');
            productContentImg.classList.add('product-content__img');

            const a = document.createElement('a');
            a.href = 'detailed-information.html';

            const img = document.createElement('img');
            img.src = element.picture_url;
            img.style.height = '354px';
            img.style.width = '330px';

            const productContentDescription = document.createElement('div');
            productContentDescription.classList.add('product-content__description');

            const productContentName = document.createElement('a');
            productContentName.classList.add('product-content__name');
            productContentName.href = 'detailed-information.html';

            const h3 = document.createElement('h3');
            h3.classList.add('product-content__heading');
            h3.textContent = element.country / element.city;

            const p = document.createComment('p');
            p.classList.add('product-content__text');
            p.textContent = 'Привет';




            section.appendChild(productContentImg);
            productContentImg.appendChild(a);
            a.appendChild(img);
            section.appendChild(productContentDescription);
            productContentDescription.appendChild(productContentName);
            productContentName.appendChild(h3);

        })
    }