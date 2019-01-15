class GymMember < ApplicationRecord
  belongs_to :trainer

  validates :name, length: { minimum: 6}
end
