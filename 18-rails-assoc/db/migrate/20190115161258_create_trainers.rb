class CreateTrainers < ActiveRecord::Migration[5.2]
  def change
    create_table :trainers do |t|
      t.string :name
      t.string :phone_number
      t.boolean :employee_status, default: true

      t.timestamps
    end
  end
end
