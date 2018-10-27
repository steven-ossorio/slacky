module Types
  class MutationType < Types::BaseObject
    field :createUser, function: Resolvers::CreateUser.new
    field :signinUser, function: Resolvers::SignInUser.new
    field :signoutUser, function: Resolvers::SignOutUser.new

    field :createMessage, function: Resolvers::CreateMessage.new
    field :updateMessage, function: Resolvers::UpdateMessage.new
    field :deleteMessage, function: Resolvers::DeleteMessage.new

    field :createWorkspace, function: Resolvers::CreateWorkspace.new
    field :joinWorkspace, function: Resolvers::JoinWorkspace.new

    field :createChannel, function: Resolvers::CreateChannel.new
    field :createChannelMember, function: Resolvers::CreateChannelMember.new
  end
end
