class Resolvers::CreateWorkspaceMember < GraphQL::Function
  argument :workspace_id, !types.ID
  argument :user_id, !types.ID

  type Types::MemberType

  def call(_obj, args, _ctx)
    Member.create!(
      workspace_id: args[:workspace_id],
      user_id: args[:user_id]
    )
  end
end