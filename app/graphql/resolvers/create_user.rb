class Resolvers::CreateUser < GraphQL::Function
  AuthProviderInput = GraphQL::InputObjectType.define do
    name 'AuthProviderSignupData'

    argument :email, Types::AuthProviderEmailInput
  end

  argument :username, !types.String
  argument :authProvider, !AuthProviderInput

  type Types::UserType

  def call(_obj, args, ctx)
    user = User.create!(
      username: args[:username],
      email: args[:authProvider][:email][:email],
      password: args[:authProvider][:email][:password]
    )

    crypt = ActiveSupport::MessageEncryptor.new(Rails.application.credentials.secret_key_base.byteslice(0..31))
  
    session_token = crypt.encrypt_and_sign("user-id:#{user.id}")
  
    ctx[:session][:session_token] = session_token
  
    OpenStruct.new({
      user: user,
      session_token: session_token
    })
  end
end