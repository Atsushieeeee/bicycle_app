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

    gon.lat = params[:latitude].to_f
    gon.lng = params[:longitude].to_f
    gon.location = Place.within_box(0.310686, latitude, longitude)

    @locations = Place.within_box(0.310686, latitude, longitude)

  end
end
