class Visit < ApplicationRecord
  
  validates_presence_of :venue
  validates_presence_of :visitor

  belongs_to :place
end
