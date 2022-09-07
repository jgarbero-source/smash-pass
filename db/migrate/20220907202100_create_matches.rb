class CreateMatches < ActiveRecord::Migration[7.0]
  def change
    create_table :matches do |t|
      t.boolean :user_1_match
      t.boolean :user_2_match
      t.integer :user_1_id
      t.integer :user_2_id

      t.timestamps
    end
  end
end
