class AddChannelIdToMembers < ActiveRecord::Migration[5.2]
  def change
    add_column :members, :channel_id, :integer
  end
end
