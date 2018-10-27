class Resolvers::SignOutUser < GraphQL::Function
  type Types::UserType

  def call(_obj, _args, ctx)
    crypt = ActiveSupport::MessageEncryptor.new(Rails.application.credentials.secret_key_base.byteslice(0..31))

    session_token = crypt.decrypt_and_verify(ctx[:session][:session_token])
    user_id = session_token.gsub('user-id:', '').to_i
    user = User.find_by(id: user_id)
    user.reset_session_token!

    ctx[:session][:session_token] = nil

    user
  end
end