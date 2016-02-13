class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.boolean :admin, default: false  # new users will not be admins

      t.timestamps null: false
    end
  end
end
