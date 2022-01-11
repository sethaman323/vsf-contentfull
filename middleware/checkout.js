const canEnterPayment = (cart) =>
  cart && cart.shippingInfo && cart.shippingAddress;
  
const canEnterReview = (cart) => cart && Boolean(cart.billingAddress);

export default async ({ app, $vsf }) => {
  const currentPath = app.context.route.fullPath.split('/checkout/')[1];

  if (!currentPath) return;

  const { data } = await $vsf.$kibo.api.getCart();
  
  const { activeCart } = data?.currentCart;

  switch (currentPath) {
    case 'shipping':
      if (!data.currentCart) {
        app.context.redirect('/checkout/shipping');
      } 
      break;
    case 'billing':
      if (!data.currentCart) {
        app.context.redirect('/checkout/billing');
      }
      break;
    case 'payment':
      if (!data.currentCart) {
        app.context.redirect('/checkout/payment');
      }
      break;
  }
};
