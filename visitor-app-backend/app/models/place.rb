class Place < ApplicationRecord
    has_many :visits
    validates_presence_of :venue
end
