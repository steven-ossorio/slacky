class Api::SessionController < ApplicationController
<<<<<<< HEAD

  def create
    @user = User.find_by_credentials(
      user_params[:email_address],
      user_params[:password]
=======
  skip_before_action :verify_authenticity_token

  def create
    @user = User.find_by_credentials(
      params[:user][:email_address],
      params[:user][:password]
>>>>>>> 7829a44ef8c65ea243e413ae6c4a53a729acac5c
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
<<<<<<< HEAD

  def user_params
    params.require(:user).permit(:email_address, :password)
  end
=======
>>>>>>> 7829a44ef8c65ea243e413ae6c4a53a729acac5c
end