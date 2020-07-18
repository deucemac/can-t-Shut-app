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

export const addMessage = async (id, messageContent) => {
  const resp = await api.post(`/topics/${id}/messages`, {message: messageContent});
  console.log(resp.data)
  return resp.data
}

export const addTopic = async (topicName) => {
  const resp = await api.post('/topics', { topic: topicName });
  return resp.data
}
