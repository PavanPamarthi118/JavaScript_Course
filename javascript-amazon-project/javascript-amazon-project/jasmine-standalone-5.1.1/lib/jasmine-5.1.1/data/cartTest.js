import { AddToCart, cart } from "../../../data/cart";

describe('test suite : Add to Cart', function() {

    it('should add a new product to the cart', function() {
        const initialCartLength = cart.length;
        AddToCart('new-product-id');
        expect(cart.length).toBe(initialCartLength + 1);
    });

    it('should increase quantity if product already exists in cart', function() {
        const productId = 'existing-product-id';
        AddToCart(productId); // First addition
        const initialQuantity = AddToCart.find(item => item.productId === productId).quantity;
        AddToCart(productId); // Second addition
        const updatedQuantity = AddToCart.find(item => item.productId === productId).quantity;
        expect(updatedQuantity).toBe(initialQuantity + 1);
    });
});