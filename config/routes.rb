Rails.application.routes.draw do
  resources :projects do
    member do
      put 'resample'
    end
  end
  root 'projects#index'
end
