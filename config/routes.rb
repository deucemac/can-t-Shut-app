Rails.application.routes.draw do
  resources :topics do
  resources :messages
  end
  resources :users

  # post 'users/:id/:topic_id/messages', to: 'messages#create'
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get '/current', to: 'users#get_current_user'
end
# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
