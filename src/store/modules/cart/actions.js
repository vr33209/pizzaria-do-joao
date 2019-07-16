export function addToCart(product) {
  return {
    type: '@cart/ADD',
    product,
  };
}

export function RemoveFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}
