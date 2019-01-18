class CreateDinosaurs < ActiveRecord::Migration[5.2]
  def change
    create_table :dinosaurs do |t|
      t.string :name
      t.string :species
      t.integer :age
      t.boolean :alive

      t.timestamps
    end
  end
end
