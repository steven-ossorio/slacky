class Types::UserType < Types::BaseObject
  field :id, ID, null: false
  field :username, String, null: false
  field :email_address, String, null: false
end