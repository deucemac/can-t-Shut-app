import api from './apiconfig'

export const getAllTopics = async () => {
  const resp = await api.get('/topics')
  return resp.data;
}

export const getOneTopic = async (id) => {
  const resp = await api.get(`/topics/${id}`);
  console.log(resp.data)
  return resp.data;
}
