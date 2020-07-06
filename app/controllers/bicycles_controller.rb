class BicyclesController < ApplicationController
  def index
  end

  def search
    latitude = params[:latitude]
    longitude = params[:longitude]
  
    @places = Place.all.within(2, origin: [latitude, longitude])
  end

  def create
    @place = Place.new(place_params)
    @place.address = @place.prefecture + @place.address_city
    @place.address = @place.address.gsub(/\d+/, "").gsub(/\-+/, "")
    @place.save
  end
end
