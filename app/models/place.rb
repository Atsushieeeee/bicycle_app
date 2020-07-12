class Place < ApplicationRecord
  geocoded_by :address
  after_validation :geocode, if: :address_changed?

  # window.location.href = "/bicycles/search_location?latitude="+position.coords.latitude+"&longitude="+position.coords.longitude

  class << self
    def within_box(distance, latitude, longitude)
        distance = distance
        center_point = [latitude, longitude]
        box = Geocoder::Calculations.bounding_box(center_point, distance)
        self.within_bounding_box(box)
    end
  end 

end
