const cart = [];

function addToCart(productId) {
    const productElement = document.querySelector(`.product[data-id="${productId}"]`);
    const productName = productElement.getAttribute('data-name');
    const productPrice = parseFloat(productElement.getAttribute('data-price'));

    const productInCart = cart.find(product => product.id === productId);

    if (productInCart) {
        productInCart.quantity += 1;
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }

    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    let totalPrice = 0;

    cart.forEach(product => {
        const cartItemElement = document.createElement('li');
        cartItemElement.textContent = `${product.name} - $${product.price.toFixed(2)} x ${product.quantity}`;
        cartItemsElement.appendChild(cartItemElement);

        totalPrice += product.price * product.quantity;
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
    document.getElementById('cart-count').textContent = cart.length;
}

function checkout() {
    alert('Thank you for your purchase!');
    cart.length = 0;
    updateCart();
}
