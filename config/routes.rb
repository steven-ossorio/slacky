Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    post 'register', to: 'users#create'
    get 'user/:id', to: 'users#show'
  end
end
