Rails.application.routes.draw do
  root to: 'bicycles#index'
  get 'bicycles/search_location' => 'bicycles#search_location'
end
