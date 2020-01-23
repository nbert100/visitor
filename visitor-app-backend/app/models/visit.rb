class Visit < ApplicationRecord
  belongs_to :place
  validates_presence_of :venue
  validates_presence_of :visitor
end
