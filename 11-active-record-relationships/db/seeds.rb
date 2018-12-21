# Write some code here and run `rake db:seed` to add records to your databse!

Pokemon.destroy_all
Trainer.destroy_all


trainer = Trainer.create(name: "Ash")
poke = Pokemon.create(name: "Squirtle", poke_type: "water", attack: "bubble")
miles = Pokemon.create(name: "Miles", poke_type: "fire", attack: "fire")
PokeBall.create(trainer: trainer, pokemon: poke)
PokeBall.create(trainer: trainer, pokemon: miles)
