const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id);

const more = document.querySelector('.more');
const moreText = document.querySelector('.more__text');

const button = document.querySelector('.detailed-information__button');
const contacts = document.querySelector('.contacts');

const back = document.querySelector('.logo__arrow');
const contactsInfo = document.querySelector('.info');

button.addEventListener('click', () => {
    contacts.classList.remove('contacts');
    button.style.display = 'none';
});

back.addEventListener('click', () => {
    window.location.href = 'index.html';
});

const section = document.querySelector('.product-content');
const sectionDetailedInformation = document.querySelector('.detailed-information');

const OFFER = `https://skyrent-server.ru/offers/${id}`;

request({

    url: OFFER,

    onSuccess: (data) => {
        section.innerHTML = '';

        const productContentDescription = document.createElement('div');
        productContentDescription.classList.add('product-content__description');

        const h3 = document.createElement('h3');
        h3.classList.add('product-content__heading');
        h3.textContent = (data.country + ' ' + '→' + ' ' + data.city);

        const span = document.createElement('span');
        span.classList.add('product-content__price');
        span.textContent = ('$' + ' ' + data.price + ' ' + '/' + ' ' + 'month');


        const p = document.createElement('p');
        p.classList.add('product-content__text');
        p.textContent = data.description;
        console.log(data.description);

        const productContentImg = document.createElement('div');
        productContentImg.classList.add('product-content__img');

        const img = document.createElement('img');
        img.classList.add('img-content');
        img.src = data.picture_url;

        const detailedInformationContent = document.createElement('div');
        detailedInformationContent.classList.add('detailed-information__content');

        const h4 = document.createElement('h4');
        h4.classList.add('detailed-information__title');
        h4.textContent = 'Что есть внутри?';

        const featuresOn = document.createElement('ol');
        featuresOn.classList.add('hidden');

        features_on_data = data.features_on;
        features_on_data.forEach(element => {
            let li = document.createElement('li');
            li.classList.add('active');
            li.textContent = element;
            featuresOn.appendChild(li);
        });

        const featuresOff = document.createElement('ol');
        featuresOff.classList.add('hidden');

        features_off_data = data.features_off;
        features_off_data.forEach(element => {
            let li = document.createElement('li');
            li.classList.add('disabled');
            li.textContent = element;
            featuresOff.appendChild(li);

        });
    

        const contact = document.createElement('div');
        contact.classList.add('contact');

        const contactName = document.createElement('p');
        contactName.classList.add('contact__name');
        contactName.textContent = 'Имя хоста';

        const contactText = document.createElement('span');
        contactText.classList.add('contact__text');
        contactText.textContent = data.host_name;

        const contactNamePhone = document.createElement('p');
        contactNamePhone.classList.add('contact__name');
        contactNamePhone.textContent = 'Телефон';

        const contactTextPhone = document.createElement('span');
        contactTextPhone.classList.add('contact__text');
        contactTextPhone.textContent = data.host_phone;

        const contactNameAddress = document.createElement('p');
        contactNameAddress.classList.add('contact__name');
        contactNameAddress.textContent = 'Адрес';

        const contactTextAddress = document.createElement('span');
        contactTextAddress.classList.add('contact__text');
        contactTextAddress.textContent = data.host_location;


        section.appendChild(productContentDescription);
        productContentDescription.appendChild(h3);
        productContentDescription.appendChild(span);
        productContentDescription.appendChild(p);
        section.appendChild(productContentImg);
        productContentImg.appendChild(img);
        sectionDetailedInformation.appendChild(detailedInformationContent);
        detailedInformationContent.appendChild(h4);
        detailedInformationContent.appendChild(featuresOn);
        detailedInformationContent.appendChild(featuresOff);
        contactsInfo.appendChild(contact);
        contact.appendChild(contactName);
        contact.appendChild(contactText);
        contact.appendChild(contactNamePhone);
        contact.appendChild(contactTextPhone);
        contact.appendChild(contactNameAddress);
        contact.appendChild(contactTextAddress);


    }
})





