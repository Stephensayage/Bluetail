Rails.application.routes.draw do
  resources :listings
  resources :users
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  put '/listings/:listing_id/users/:user_id/', to: 'listings#add_agent'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
