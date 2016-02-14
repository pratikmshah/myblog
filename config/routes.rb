Rails.application.routes.draw do

  root 'posts#index'   # redirect root page to posts index

  get  '/login' => 'sessions#new', as: 'login'
  post '/login' => 'sessions#create'
  get  '/logout' => 'sessions#destroy', as: 'logout'
  get  '/admin' => 'sessions#admin', as: 'admin'

  resources :posts do
    resources :comments
  end

end
