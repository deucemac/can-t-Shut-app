class Topic < ApplicationRecord
  has_many :messages, dependent: :destroy
  has_many :users, through: :messages
end
