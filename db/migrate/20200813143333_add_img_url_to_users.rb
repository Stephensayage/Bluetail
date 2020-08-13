class AddImgUrlToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :imgUrl, :string
    add_column :users, :bio, :string
  end
end
