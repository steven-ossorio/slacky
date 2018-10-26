class Resolvers::SignOutUser < GraphQL::Function
  def call(_obj, _args, ctx)
    ctx[:session][:session_token] = nil
  end
end