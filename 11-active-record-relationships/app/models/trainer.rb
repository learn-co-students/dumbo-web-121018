class Trainer < ActiveRecord::Base

  has_many :poke_balls
  has_many :pokemon, through: :poke_balls

end
