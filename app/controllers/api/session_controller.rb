class Api::SessionController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @user = User.find_by_credentials(
      user_params[:email_address],
      user_params[:password]
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid Credentials'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render '/api/users/show'
    else
      render json: ['No user is logged in']
    end
  end

  def user_params
    params.require(:user).permit(:email_address, :password)
  end
end