Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # GET /gym_members/new
  get "/gym_members/new", to: "gym_members#new"

  # GET /gym_members/:id
  get '/gym_members/:id', to: 'gym_members#show', as: "gym_member"

  # Create Action => POST /gym_members

  post '/gym_members', to: 'gym_members#create'

  get '/gym_members/:id/edit', to: 'gym_members#edit'

  patch "/gym_members/:id", to: 'gym_members#update'


end
