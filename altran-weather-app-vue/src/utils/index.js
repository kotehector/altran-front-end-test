const calculateDiscont = (amount, toDiscount) => {
  console.log(`calculateDiscont:  ${amount} - ${toDiscount}`)
  let discount = amount * toDiscount
  let amountWithoutDiscount = amount - discount
  console.log(`amountWithoutDiscount:  ${amountWithoutDiscount}`)
  return amountWithoutDiscount
}

// const countObjectProperties = obj => {
//   if (typeof obj === 'object') {
//     return Object.keys(obj).length
//   }
//   return 0
// }

export {
  calculateDiscont
}
