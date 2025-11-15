const deliveryOptions = [{
    id:'1',
    deliveryDays:7,
    priceCents:0
},
{
    id:'2',
    deliveryDays:3,
    priceCents:499
},
{
    id:'3',
    deliveryDays:1,
    priceCents:999
}];
export { deliveryOptions };

export function getDeliveryOptions(deliveryOptionsId) {
    let matchingDeliveryOption;

    deliveryOptions.forEach(option => {
      if (option.id === deliveryOptionsId) {
        matchingDeliveryOption = option;
      }
    });
    return matchingDeliveryOption|| deliveryOptions[0];
}