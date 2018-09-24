module Types
  class MutationType < Types::BaseObject
    field :createUser, function: Resolvers::CreateUser.new
    field :createChannel, function: Resolvers::CreateChannel.new
  end
end
