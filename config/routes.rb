Rails.application.routes.draw do
  get 'bicycles' => 'bicycles#index'
  get 'bicycles/search_location' => 'bicycles#search_location'
end
