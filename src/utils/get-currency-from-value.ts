export const getCurrencyFromValue = (value: string) => {
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  })

  return USDollar.format(Number(value))
}
