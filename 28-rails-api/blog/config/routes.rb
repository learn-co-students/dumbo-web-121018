Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index]
      resources :users, only: [:index]
    end
    namespace :v2 do
      
    end
  end

end
