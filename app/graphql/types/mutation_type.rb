module Types
  class MutationType < Types::BaseObject
    field :createUser, function: Resolvers::CreateUser.new
    field :createChannel, function: Resolvers::CreateChannel.new
    field :createChannelMember, function: Resolvers::CreateChannelMember.new
    field :createWorkspace, function: Resolvers::CreateWorkspace.new
    field :createWorkspaceMember, function: Resolvers::CreateWorkspaceMember.new
    field :createMessage, function: Resolvers::CreateMessage.new

  end
end
