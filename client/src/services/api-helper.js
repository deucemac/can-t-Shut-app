export const addBook = async (id, bookInfo) => {
  const response = await api.post(`/authors/${id}/books`, { book: bookInfo })
  return response.data
}