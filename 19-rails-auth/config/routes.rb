Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/signup', to: 'users#new'
  post '/users', to: "users#create", as: "users"

  get '/login', to: 'sessions#new', as: "login"
  post '/sessions', to: 'sessions#create'

  delete '/logout', to: 'sessions#destroy', as: 'logout'

  resources :dinosaurs, only: [:index]
end
