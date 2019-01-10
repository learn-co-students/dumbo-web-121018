class AddPersonToAnimal < ActiveRecord::Migration[5.2]
  def change
    add_column :animals, :person_id, :integer
  end
end
