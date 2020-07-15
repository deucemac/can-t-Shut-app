Rails.application.routes.draw do
  resources :topics do
  resources :messages
  end
  resources :users

  # post 'users/:id/:topic_id/messages', to: 'messages#make_message'
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
end
# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
