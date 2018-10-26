Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'

  field :allUsers, !types[Types::UserType] do
    resolve -> (obj, arg, ctx) {
      User.all
    }
  end

  field :user, Types::UserType do
    argument :id, !types.ID 
    resolve -> (obj, arg, ctx) {
      User.find(arg[:id])
    }
  end

  field :channel, Types::ChannelType do
    argument :id, !types.ID
    resolve -> (obj, arg, ctx) {
      Channel.find(arg[:id])
    }
  end

  field :workspace, Types::WorkspaceType do
    argument :id, !types.ID
    resolve -> (obj, arg, ctx) {
      Workspace.find(arg[:id])
    }
  end

  field :channel, Types::ChannelType do
    argument :id, !types.ID
    resolve -> (obj, arg, ctx) {
      Channel.find(arg[:id])
    }
  end
end
