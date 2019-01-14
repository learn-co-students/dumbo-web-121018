class CreateGymMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :gym_members do |t|
      t.string :name
      t.string :address
      t.boolean :membership_status, default: true
      t.string :phone_number

      t.timestamps
    end
  end
end
