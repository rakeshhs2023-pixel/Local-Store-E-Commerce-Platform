// Cart Management
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cart = getCart();
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart(cart);
    showNotification('Product added to cart!');
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
}

function updateQuantity(productId, quantity) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = parseInt(quantity);
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart(cart);
        }
    }
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const badge = document.querySelector('.cart-count');
    if (badge) {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'block' : 'none';
    }
}

// User Management
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

function login(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
    }
    return false;
}

function register(name, email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.email === email)) {
        return false;
    }
    const newUser = { id: Date.now(), name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

// Order Management
function createOrder(orderData) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const order = {
        id: Date.now(),
        ...orderData,
        items: getCart(),
        total: getCartTotal(),
        date: new Date().toISOString(),
        status: 'Processing'
    };
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.removeItem('cart');
    return order;
}

function getOrders() {
    return JSON.parse(localStorage.getItem('orders')) || [];
}

function deleteOrder(orderId) {
    const orderToDelete = getOrders().find(order => order.id === orderId);
    if (!orderToDelete) {
        return;
    }

    const confirmed = window.confirm(`Delete order #${orderId}?`);
    if (!confirmed) {
        return;
    }

    const orders = getOrders().filter(order => order.id !== orderId);
    localStorage.setItem('orders', JSON.stringify(orders));
    showNotification(`Order #${orderId} deleted successfully.`);
    renderOrders();
}

// UI Functions
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

function renderProducts(productsToRender = products) {
    const container = document.getElementById('products-container');
    if (!container) return;

    container.innerHTML = productsToRender.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="category">${product.category}</p>
                <p class="description">${product.description}</p>
                <div class="rating">
                    ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                    <span>(${product.reviews})</span>
                </div>
                <div class="product-footer">
                    <span class="price">$${product.price.toFixed(2)}</span>
                    <button onclick="addToCart(${product.id})" class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
            <a href="product.html?id=${product.id}" class="product-link"></a>
        </div>
    `).join('');
}

function renderCart() {
    const container = document.getElementById('cart-items');
    const cart = getCart();

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-cart"><p>Your cart is empty</p><a href="index.html" class="btn btn-primary">Continue Shopping</a></div>';
        const cartSummary = document.getElementById('cart-summary');
        if (cartSummary) {
            cartSummary.style.display = 'none';
        }
        return;
    }

    const cartSummary = document.getElementById('cart-summary');
    if (cartSummary) {
        cartSummary.style.display = 'block';
    }

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p class="price">$${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-actions">
                <input type="number" min="1" value="${item.quantity}" 
                    onchange="updateQuantity(${item.id}, this.value)" class="quantity-input">
                <button onclick="removeFromCart(${item.id}); renderCart();" class="btn-remove">Remove</button>
            </div>
            <div class="cart-item-total">
                $${(item.price * item.quantity).toFixed(2)}
            </div>
        </div>
    `).join('');

    const subtotal = getCartTotal();
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

function renderProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (!product) {
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('product-image').src = product.image;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-category').textContent = product.category;
    document.getElementById('product-price').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-rating').innerHTML = `
        ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
        <span>${product.rating} (${product.reviews} reviews)</span>
    `;

    document.getElementById('add-to-cart-btn').onclick = () => {
        addToCart(product.id);
    };
}

function renderOrders() {
    const container = document.getElementById('orders-container');
    const orders = getOrders().reverse();

    if (!container) return;

    if (orders.length === 0) {
        container.innerHTML = '<div class="empty-orders"><p>No orders yet</p><a href="index.html" class="btn btn-primary">Start Shopping</a></div>';
        return;
    }

    container.innerHTML = orders.map(order => `
        <div class="order-card">
            <div class="order-header">
                <div>
                    <h3>Order #${order.id}</h3>
                    <p class="order-date">${new Date(order.date).toLocaleDateString()}</p>
                </div>
                <span class="order-status status-${order.status.toLowerCase()}">${order.status}</span>
            </div>
            <div class="order-items">
                ${order.items.map(item => `
                    <div class="order-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div>
                            <p>${item.name}</p>
                            <p class="item-quantity">Qty: ${item.quantity}</p>
                        </div>
                        <p class="item-price">$${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                `).join('')}
            </div>
            <div class="order-footer">
                <p><strong>Total: $${order.total.toFixed(2)}</strong></p>
                <button onclick="deleteOrder(${order.id})" class="btn-remove">Delete This Order</button>
            </div>
        </div>
    `).join('');
}

// Search and Filter
function searchProducts(query) {
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
    );
    renderProducts(filtered);
}

function filterByCategory(category) {
    if (category === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

function sortProducts(sortBy) {
    let sorted = [...products];
    if (sortBy === 'price-low') {
        sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
        sorted.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
        sorted.sort((a, b) => b.rating - a.rating);
    }
    renderProducts(sorted);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    
    const user = getCurrentUser();
    const userInfo = document.getElementById('user-info');
    if (userInfo && user) {
        userInfo.innerHTML = `<span>Welcome, ${user.name}</span> <button onclick="logout()" class="btn-logout">Logout</button>`;
    }
});
