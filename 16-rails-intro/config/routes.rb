Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # HTTP Verb URL, to Controller#Action
  get "/pokemons", to: "pokemons#index"

  # Show Action "Showing one item"
  get "/pokemons/:id", to: "pokemons#show"

  get "/kachow", to: "pokemons#kachow"
end
