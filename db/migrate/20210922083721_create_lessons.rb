# frozen_string_literal: true

class CreateLessons < ActiveRecord::Migration[5.2]
  def change
    create_table :lessons do |t|
      t.string :name
      t.integer :difficulty
      t.string :content

      t.timestamps
    end
  end
end
