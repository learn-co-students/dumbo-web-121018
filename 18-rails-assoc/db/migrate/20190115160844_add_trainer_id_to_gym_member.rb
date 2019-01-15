class AddTrainerIdToGymMember < ActiveRecord::Migration[5.2]
  def change
    add_column :gym_members, :trainer_id, :integer
  end
end
