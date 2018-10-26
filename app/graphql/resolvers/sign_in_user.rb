class Resolvers::SignInUser < GraphQL::Function
  argument :email, !Types::AuthProviderEmailInput

  type do
    name 'SigninPayload'

    field :session_token, types.String
    field :user, Types::UserType
  end

  def call(_obj, args, _ctx)
    input = args[:email]

    return unless input

    user = User.find_by(email: input[:email])

    return unless user
    return unless user.authenticate(input[:password])

    crypt = ActiveSupport::MessageEncryptor.new(Rails.application.credentials.secret_key_base.byteslice(0..31))

    session_token = crypt.encrypt_and_sign("user-id:#{user.id}")

    OpenStruct.new({
      user: user,
      session_token: session_token
    })
  end
end