class BicyclesController < ApplicationController
  def index
  end

  def search
    latitude = params[:latitude]
    longitude = params[:longitude]
  
    @places = Place.all.within(2, origin: [latitude, longitude])
  end
end
