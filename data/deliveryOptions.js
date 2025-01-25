export const deliveryOptions = [
  {
    id: '1',
    DeliveryDays: 7,
    priceCents: 0
  }, 
  {
    id: '2',
    DeliveryDays: 3,
    priceCents: 499
  },
  {
    id: '3',
    DeliveryDays: 1,
    priceCents: 999
  }
];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

      deliveryOptions.forEach((option) => {
        if(option.id === deliveryOptionId) {
          deliveryOption = option;
        }
      });

    return deliveryOption || deliveryOptions[0];
}