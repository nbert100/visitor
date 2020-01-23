class CreateVisits < ActiveRecord::Migration[5.2]
  def change
    create_table :visits do |t|
      t.string :venue
      t.date :when_visited
      t.boolean :visited, default: false
      t.text :comment
      t.string :visitor
      t.belongs_to :place, foreign_key: true

      t.timestamps
    end
  end
end
