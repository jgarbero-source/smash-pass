Rails.application.routes.draw do
  resources :matches
  resources :users

  get "/me", to: "users#me"
  get "/me/matches/:id", to: "matches#my_matches"

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
