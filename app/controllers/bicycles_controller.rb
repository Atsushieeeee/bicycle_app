class BicyclesController < ApplicationController
  def index
  end

  def search
    latitude = params[:latitude]
    longitude = params[:longitude]
  
    @places = Place.all.within(2, origin: [latitude, longitude])
  end

  def search_location
    latitude = params[:latitude].to_f
    longitude = params[:longitude].to_f
    @latitude = latitude
    @longitude = longitude
    @locations = Place.within_box(0.310686, latitude, longitude)
  end
end
