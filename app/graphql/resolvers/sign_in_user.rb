class Resolvers::SignInUser < GraphQL::Function
  argument :authInputs, !Types::AuthProviderInput

  type do
    name 'SigninPayload'

    field :session_token, types.String
    field :user, Types::UserType
  end

  def call(_obj, args, ctx)
    input = args[:authInputs]

    return unless input

    user = User.find_by(email: input[:email])

    return unless user
    return unless user.authenticate(input[:password])

    crypt = ActiveSupport::MessageEncryptor.new(Rails.application.credentials.secret_key_base.byteslice(0..31))

    session_token = crypt.encrypt_and_sign("user-id:#{user.id}")

    ctx[:session][:session_token] = session_token

    OpenStruct.new({
      user: user,
      session_token: session_token
    })
  end
end