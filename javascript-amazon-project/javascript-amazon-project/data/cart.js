
export let cart = [];

export function loadFromStorage() {
    // Load cart from localStorage if present, otherwise initialize with defaults
    const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('cart') : null;
    if (stored) {
        try {
            cart = JSON.parse(stored);
            return;
        } catch (e) {
            // fall through to reinitialize
        }
    }

    cart = [
        {
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionsId: '1'
        },
        {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1,
            deliveryOptionsId: '2'
        }
    ];
}

function saveToStorage() {
    if (typeof localStorage === 'undefined') return;
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (e) {
        // ignore storage errors in test environments
    }
}

export function AddToCart(productId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (cartItem.productId === productId) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1,
            deliveryOptionsId: '1'
        });
    }
    saveToStorage();
}

export function RemoveFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.productId === productId);
    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
    }
    saveToStorage();
}

export function UpdateDeliveryOptions(productId, deliveryOptionsId) {
    let matchingItem;

    cart.forEach(item => {
        if (item.productId === productId) {
            matchingItem = item;
        }
    });

    matchingItem.deliveryOptionsId = deliveryOptionsId;

    saveToStorage();
}