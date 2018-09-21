class Types::MessageType < Types::BaseObject
  field :id, ID, null: false
  field :user_id, ID, null: false
  field :channel_id, ID, null: false
  field :text, String, null: false
end