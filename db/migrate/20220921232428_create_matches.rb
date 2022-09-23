class CreateMatches < ActiveRecord::Migration[7.0]
  def change
    create_table :matches do |t|
      t.integer :user_id
      t.integer :target
      t.boolean :swipe
      t.timestamps
    end
  end
end
