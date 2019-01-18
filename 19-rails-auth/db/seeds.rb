# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Dinosaur.destroy_all

Dinosaur.create(name: "Benson", species: "Tyrannosaurus Rex", age: 1, alive: true)
Dinosaur.create(name: "Pronce", species: "Corgosaurus Maximus", age: 1, alive: true)
