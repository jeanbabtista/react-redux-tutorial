export const calculateTotalPrice = (itemsList) => {
  let total = 0
  itemsList.forEach((item) => (total += item.price * item.quantity))
  return total
}
