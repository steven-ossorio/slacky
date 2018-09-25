class Resolvers::CreateWorkspace < GraphQL::Function
  argument :name, !types.String
  argument :user_id, !types.ID

  type Types::WorkspaceType

  def call(_obj, args, _ctx)
    Workspace.create!(
      name: args[:name],
      user_id: args[:user_id]
    )
  end
end