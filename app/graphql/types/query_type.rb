Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'

  if Rails.env.development?
    field :allUsers, !types[Types::UserType] do
      resolve -> (_obj, _arg, _ctx) {
        User.all
      }
    end

    field :user, Types::UserType do
      argument :id, !types.ID 
      resolve -> (_obj, arg, _ctx) {
        User.find(arg[:id])
      }
    end
  end

  field :current_user, Types::UserType do
    resolve ->(_obj, _args, ctx) {
      ctx[:current_user]
    }
  end

  field :userChannels, !types[Types::ChannelType] do
    argument :workspace_id, !types.ID
    resolve -> (_obj, arg, ctx) {
      user = ctx[:current_user]
      user.channels.where(workspace_id: arg[:workspace_id])
    }
  end

  field :channel, Types::ChannelType do
    argument :id, !types.ID
    resolve -> (_obj, arg, _ctx) {
      Channel.find(arg[:id])
    }
  end

  field :workspace, Types::WorkspaceType do
    argument :id, !types.ID
    resolve -> (_obj, arg, _ctx) {
      Workspace.find(arg[:id])
    }
  end 
end
