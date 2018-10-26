class Resolvers::CreateWorkspace < GraphQL::Function
  argument :name, !types.String

  type Types::WorkspaceType

  def call(_obj, args, ctx)
    Workspace.create!(
      name: args[:name],
      user: ctx[:current_user]
    )
  end
end