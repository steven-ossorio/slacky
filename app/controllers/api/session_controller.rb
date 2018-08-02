class Api::SessionController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @user = User.find_by_credentials(
      params[:user][:email_address],
      params[:user][:password]
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
end