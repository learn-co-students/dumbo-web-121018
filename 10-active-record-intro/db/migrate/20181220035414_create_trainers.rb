class CreateTrainers < ActiveRecord::Migration[5.2]
  def change
    def change
      create_table :trainers do |t|
        t.string :name
      end
    end
  end
end
