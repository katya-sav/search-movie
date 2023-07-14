// /a/b -> a-b
export const getUrlFromBookId = (bookId: string): string =>
  bookId.slice(1).split('/').join('-')

// a-b -> /a/b
export const getBookIdFromUrl = (url?: string): string | null => {
  if (!url) {
    return null
  }

  return `/${url.split('-').join('/')}`
}
