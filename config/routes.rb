Rails.application.routes.draw do

  root 'posts#index'   # redirect root page to posts index

  resources :posts do
    resources :comments
  end

end
