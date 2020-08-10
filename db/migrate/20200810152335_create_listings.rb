class CreateListings < ActiveRecord::Migration[6.0]
  def change
    create_table :listings do |t|
      t.string :street
      t.string :city
      t.string :state
      t.integer :zip
      t.string :content
      t.integer :price
      t.integer :square_footage
      t.date :date

      t.timestamps
    end
  end
end
