import { loadFromStorage } from "../../data/cart.js";
import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";

describe("test suite: renderOrderSummary", function() {
    it("display the cart", function() {
        document.querySelector('.js-test-container').innerHTML = `
        <div class="js-order-summary"></div>
        `;
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([
                { productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6', quantity: 2, deliveryOptionsId: '1' },
                { productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d', quantity: 1, deliveryOptionsId: '2' }
            ]);
        });
        loadFromStorage();

        renderOrderSummary();
    const container = document.querySelector('.js-order-summary');
    // The renderer should populate the order summary element with cart items
    expect(container.innerHTML).not.toBe('');

    expect(document.querySelector('.js-product-quantity-e43638ce-6aa0-4b85-b27f-e1d07eb678c6').textContent)
        .toContain('Quantity: 2');
    });
});

