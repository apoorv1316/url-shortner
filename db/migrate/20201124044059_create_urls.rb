class CreateUrls < ActiveRecord::Migration[6.0]
  def change
    create_table :urls do |t|
      t.string :full_url
      t.string :slug, default: ""
      t.boolean :pinned, default: false
      t.integer :clicked, default: 0

      t.timestamps
    end
  end
end
