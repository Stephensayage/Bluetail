# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Listing.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')
# @listing = Listing.create!(street: '1 Tiny Home Ln', city: 'Larchmont', state: 'NY', zip: 10538, content: 'Welcome to the first tiny home available!',
#    price: 75000, square_footage: 285, date: '08/10/2020', img_Url_1: 'https://i.imgur.com/ID5O17a.jpg', img_Url_2: 'https://i.imgur.com/WZfFT6C.jpg', img_Url_3: 'https://i.imgur.com/3mILMlm.jpg')

# @admin.listings.push(@listing)
