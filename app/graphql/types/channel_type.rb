class Types::ChannelType < Types::BaseObject
  field :id, ID, null: false
  field :workspace_id, ID, null: false
  field :name, String, null: false
end