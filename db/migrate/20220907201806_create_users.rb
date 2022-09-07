class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :avatar
      t.integer :age
      t.string :gender
      t.string :sexuality
      t.string :location
      t.text :bio

      t.timestamps
    end
  end
end
