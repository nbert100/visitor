class Place < ApplicationRecord
    validates :city, presence: true
    validates :country, presence: true
   
    has_many :visits
    
end
