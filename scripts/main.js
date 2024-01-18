import shoppingItemsData from './data.js';
const shoppingContainer = document.getElementById('shopping-items-container');


const renderItems = (data) => {
    data.forEach(item => {
        const shoppingCard = document.createElement('div');
        shoppingCard.classList.add('shopping-card');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        const image = document.createElement('img');
        image.src = item.imgLink;
        image.alt = 'icon';

        const itemName = document.createElement('div');
        itemName.classList.add('item-name');
        itemName.textContent = item.name;

        imageContainer.appendChild(image);
        imageContainer.appendChild(itemName);

        const footer = document.createElement('div');
        footer.classList.add('footer');

        const price = document.createElement('div');
        price.textContent = item.price;

        const cart = document.createElement('div');
        cart.innerHTML = `<i class="fas fa-shopping-cart"></i>`;

        footer.appendChild(price)
        footer.appendChild(cart)

        shoppingCard.appendChild(imageContainer);
        shoppingCard.appendChild(footer);

        shoppingContainer.appendChild(shoppingCard);
    });
}

renderItems(shoppingItemsData.shoppingItems);
