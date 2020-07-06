class AddColumnsToPlaces < ActiveRecord::Migration[5.2]
  def change
    add_column :places, :prefecture, :string
    add_column :places, :address_city, :string
    add_column :places, :address_street, :string
  end
end
