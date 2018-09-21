class Resolvers::CreateUser < GraphQL::Function
  argument :email, !types.String
  argument :password, !types.String
  argument :username, !types.String

  type Types::UserType

  def call(_obj, args, _ctx)
    User.create!(
      email_address: args[:email],
      password_digest: args[:password],
      username: args[:username]
    )
  end
end