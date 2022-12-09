const container = document.querySelector('.container');
const topContent = document.querySelector('.top-content');
const button = document.querySelector('.top-content__button');
const form = document.querySelector('.form');
const containerFilter = form.querySelector('.filter');
const divSelect = containerFilter.querySelector('.select');
const select = divSelect.querySelector('.select__dropdown');
const divInput = form.querySelector('.price');
const divFieldForm = divInput.querySelector('.field__form');
const inputIn = divInput.querySelectorAll('.field__control');
const btn = form.querySelector('.filter__button');



button.addEventListener('click', () => {

    containerFilter.classList.remove('filter');
    button.style.display = 'none';

})

inputIn.forEach(
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

const OFFERS = 'https://skyrent-server.ru';


request({

    url: `${OFFERS}/offers`,

    onSuccess: (data) => {
        //  uniq = uniqueLocations(data);
        // console.log(uniq);
        render(data);
        console.log(data);
    }
})



function render(item) {
    item.forEach(element => {
        const productContentImg = document.createElement('div');
        productContentImg.classList.add('product-content__img');

        const a = document.createElement('a');
        a.href = 'detailed-information.html?id=' + element.id;

        const img = document.createElement('img');
        img.classList.add('picture');
        img.src = element.picture_url;

        const productContentDescription = document.createElement('div');
        productContentDescription.classList.add('product-content__description');


        const h3 = document.createElement('h3');
        h3.classList.add('product-content__heading');
        h3.textContent = (element.country + ' ' + '→' + ' ' + element.city);

        const p = document.createElement('p');
        p.classList.add('product-content__text');
        p.textContent = element.description;

        const span = document.createElement('span');
        span.classList.add('product-content__price');
        span.textContent = ('$' + ' ' + element.price + ' ' + '/' + ' ' + 'month');


        section.appendChild(productContentImg);
        productContentImg.appendChild(a);
        a.appendChild(img);
        section.appendChild(productContentDescription);
        productContentDescription.appendChild(h3);
        productContentDescription.appendChild(p);
        productContentDescription.appendChild(span);

    });
}



request({

    url: `${OFFERS}/locations`,

    onSuccess: (data) => {
        renderSelect(data);
    }
})

function renderSelect(data) {
    data.forEach(element => {
        const option = document.createElement('option');
        option.textContent = (element.country + ' ' + '→' + ' ' + element.city);
        select.appendChild(option);

    });
}





const picture = document.querySelector('.picture');

select.addEventListener('change', () => {
    select.classList.add('btn-color');
})

let selectValue = '';



btn.addEventListener('click', (event) => {
    event.preventDefault();
    btn.classList.add('btn-color');
    selectValue = select.value;
    const minVal = +inputIn[0].value;
    const maxVal = +inputIn[1].value;


    request({
        url: `${OFFERS}/offers`,
        onSuccess: (data) => {

            filterSearch(data, selectValue, minVal, maxVal);

        }
    });

});

function filterSearch(data, selectValue, minVal, maxVal) {

    const rgx = new RegExp(selectValue);
    let filtered = data.filter(card => {
        if (rgx.test(card.country + ' ' + '→' + ' ' + card.city) && (card.price > minVal && card.price < maxVal)) {
            return true;
        } else {
            return false;
        }
    })

    section.innerHTML = '';

    filtered.forEach(element => {

        const productContentImg = document.createElement('div');
        productContentImg.classList.add('product-content__img');

        const a = document.createElement('a');
        a.href = 'detailed-information.html?id=' + element.id;

        const img = document.createElement('img');
        img.classList.add('picture');
        img.src = element.picture_url;

        const productContentDescription = document.createElement('div');
        productContentDescription.classList.add('product-content__description');


        const h3 = document.createElement('h3');
        h3.classList.add('product-content__heading');
        h3.textContent = (element.country + ' ' + '→' + ' ' + element.city);

        const p = document.createElement('p');
        p.classList.add('product-content__text');
        p.textContent = element.description;

        const span = document.createElement('span');
        span.classList.add('product-content__price');
        span.textContent = ('$' + ' ' + element.price + ' ' + '/' + ' ' + 'month');


        section.appendChild(productContentImg);
        productContentImg.appendChild(a);
        a.appendChild(img);
        section.appendChild(productContentDescription);
        productContentDescription.appendChild(h3);
        productContentDescription.appendChild(p);
        productContentDescription.appendChild(span);

    });

}










