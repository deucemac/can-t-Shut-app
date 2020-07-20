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


export const addTopic = async (topicName) => {
  const resp = await api.post('/topics', { topic: topicName });
  return resp.data
}

export const getAllMessages = async (topic_id) => {
  const resp = await api.get(`/topics/${topic_id}/messages`)
  console.log(resp.data)
  return resp.data;
}

export const addMessage = async (topic_id, messageContent) => {
  const resp = await api.post(`/topics/${topic_id}/messages`, {message: messageContent});
  console.log(resp.data)
  return resp.data
}

export const getAllUsers = async () => {
  const resp = await api.get('/users')
  return resp.data
}

export const deleteMessage = async (topic_id, messageId) => {
  const resp = await api.delete(`/topics/${topic_id}/messages/${messageId}`)
  return resp.data
}

export const currentUser = async () => {
  const resp = await api.get('/current')
  return resp.data
}