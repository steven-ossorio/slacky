Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    post 'register', to: 'users#create'
    post 'login', to: 'session#create'
    post 'workspaces', to: 'workspaces#create'
<<<<<<< HEAD
    post 'channels', to: 'channels#create'
    post 'messages', to: 'messages#create'
=======
>>>>>>> e9b6e61ceba75a328238be5489170a71961ebc51

    get 'user/:id', to: 'users#show'
    get 'user/:id/workspaces', to: 'users#workspaces'
    get 'workspace/:id/channels', to: 'workspaces#channels'
    get 'workspace/:id/members', to: 'workspaces#members'
<<<<<<< HEAD
    get 'channel/:id/messages', to: 'channels#messages'
=======
>>>>>>> e9b6e61ceba75a328238be5489170a71961ebc51

    delete 'logout', to: 'session#destroy'
  end
end
