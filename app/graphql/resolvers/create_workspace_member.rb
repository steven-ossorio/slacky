class Resolvers::CreateWorkspaceMember < GraphQL::Function
  argument :workspace_id, !types.ID
  argument :user_id, !types.ID

  type Types::MemberType

  def call(_obj, args, ctx)
    Member.create!(
      workspace_id: args[:workspace_id],
      user: ctx[:current_user]
    )
  end
end