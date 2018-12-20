class RenameTypeToPokeType < ActiveRecord::Migration[5.2]
  def change
    rename_column :pokemons, :type, :poke_type
  end
end
