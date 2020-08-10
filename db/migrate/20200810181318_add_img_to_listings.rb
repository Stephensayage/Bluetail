class AddImgToListings < ActiveRecord::Migration[6.0]
  def change
    add_column :listings, :img_Url_1, :string
    add_column :listings, :img_Url_2, :string
    add_column :listings, :img_Url_3, :string
  end
end
