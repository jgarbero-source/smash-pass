Rails.application.routes.draw do
  resources :matches
  resources :users


  # Defines the root path route ("/")
  # root "articles#index"
  post "/signup", to: "users#create"

  get "/me", to: "users#me"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
