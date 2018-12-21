class CreatePokeBalls < ActiveRecord::Migration[5.2]
  def change
    create_table :poke_balls do |t|
      t.integer :pokemon_id
      t.integer :trainer_id
      t.string :nickname
    end

    remove_column :pokemons, :trainer_id, :integer
  end
end
