import { AddToCart, cart,loadFromStorage } from "../../data/cart.js";

describe('AddToCart', function() {
  beforeEach(function() {
    // reset cart to a known state before each test
    cart.length = 0;
    // also clear localStorage key if present so cart initializer won't override
    try {
      localStorage.removeItem('cart');
    } catch (e) {
      // localStorage may not be available in some runner environments
    }
  });

  it('should add a new product to the cart', function() {

    spyOn(localStorage,'setItem');
    spyOn(localStorage,'getItem').and.callFake(() => {
        return JSON.stringify([]);
    });
    console.log(localStorage.getItem('cart'));
    loadFromStorage();

    const initialCartLength = cart.length;
    AddToCart('new-product-id');
    expect(cart.length).toBe(initialCartLength + 1);
  });

  it('should increase quantity if product already exists in cart', function() {
    const productId = 'existing-product-id';
    AddToCart(productId); // First addition
    const initialQuantity = cart.find(item => item.productId === productId).quantity;
    AddToCart(productId); // Second addition
    const updatedQuantity = cart.find(item => item.productId === productId).quantity;
    expect(updatedQuantity).toBe(initialQuantity + 1);
  });
  
 it('should save updated cart to localStorage', function() {
    spyOn(localStorage,'setItem');
    const productId = 'test-product-id';
    AddToCart(productId);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', jasmine.any(String));
});
});

