Rails.application.routes.draw do

  root 'posts#index'   # redirect root page to posts index

  get  '/login' => 'sessions#new', as: 'login'
  post '/login' => 'sessions#validate_login'
  get  '/logout' => 'sessions#destroy', as: 'logout'

  resources :posts do
    resources :comments
  end

end
