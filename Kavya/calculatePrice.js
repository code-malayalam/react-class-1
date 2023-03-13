export function calculatePrice(actualPrice, discount) {
  const currentPrice = actualPrice * ((100 - discount) / 100);
  return Math.floor(currentPrice).toLocaleString();
}
