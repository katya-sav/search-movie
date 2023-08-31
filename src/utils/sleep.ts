export const sleep = async (ms: number) => {
  const promise = new Promise(res => {
    setTimeout(() => {
      res(undefined)
    }, ms)
  })

  return promise
}
